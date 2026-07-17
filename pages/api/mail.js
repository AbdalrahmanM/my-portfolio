const { createHash } = require("crypto");
const mail = require("@sendgrid/mail");

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const DUPLICATE_WINDOW_MS = 60 * 60 * 1000;
const MIN_FORM_TIME_MS = 2500;
const MAX_FORM_TIME_MS = 60 * 60 * 1000;

const rateLimitStore = globalThis.__portfolioContactRateLimit || new Map();
const duplicateStore = globalThis.__portfolioContactDuplicates || new Map();

globalThis.__portfolioContactRateLimit = rateLimitStore;
globalThis.__portfolioContactDuplicates = duplicateStore;

const disposableDomains = new Set([
  "10minutemail.com",
  "guerrillamail.com",
  "maildrop.cc",
  "mailinator.com",
  "temp-mail.org",
  "tempmail.com",
  "yopmail.com",
]);

const blockedPhrases = [
  "buy backlinks",
  "casino promotion",
  "crypto investment",
  "guest post opportunity",
  "guaranteed seo",
  "loan offer",
  "viagra",
];

const firstHeaderValue = (value) => {
  if (Array.isArray(value)) return value[0] || "";
  return String(value || "").split(",")[0].trim();
};

const getClientIp = (req) =>
  firstHeaderValue(req.headers["x-forwarded-for"]) ||
  firstHeaderValue(req.headers["x-real-ip"]) ||
  req.socket?.remoteAddress ||
  "unknown";

const hashValue = (value) =>
  createHash("sha256")
    .update(`${process.env.CONTACT_RATE_LIMIT_SALT || "portfolio-contact"}:${value}`)
    .digest("hex");

const pruneStore = (store, cutoff) => {
  for (const [key, value] of store.entries()) {
    const timestamp = typeof value === "number" ? value : value.startedAt;
    if (timestamp < cutoff) store.delete(key);
  }
};

const consumeRateLimit = (ip) => {
  const now = Date.now();
  pruneStore(rateLimitStore, now - RATE_LIMIT_WINDOW_MS);

  const key = hashValue(ip);
  const current = rateLimitStore.get(key);

  if (!current || now - current.startedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { count: 1, startedAt: now });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - current.startedAt)) / 1000)),
    };
  }

  current.count += 1;
  rateLimitStore.set(key, current);
  return { allowed: true, remaining: RATE_LIMIT_MAX - current.count, retryAfter: 0 };
};

const isSameOrigin = (req) => {
  const origin = firstHeaderValue(req.headers.origin);
  const host = firstHeaderValue(req.headers.host || req.headers["x-forwarded-host"]);

  if (!origin) return false;

  try {
    const parsedOrigin = new URL(origin);
    const configuredOrigins = String(process.env.CONTACT_ALLOWED_ORIGINS || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const fetchSite = firstHeaderValue(req.headers["sec-fetch-site"]);
    const isLocalDevelopment =
      process.env.NODE_ENV !== "production" &&
      ["localhost", "127.0.0.1", "::1"].includes(parsedOrigin.hostname);

    return (
      parsedOrigin.host === host ||
      configuredOrigins.includes(parsedOrigin.origin) ||
      fetchSite === "same-origin" ||
      isLocalDevelopment
    );
  } catch {
    return false;
  }
};

const cleanText = (value) =>
  typeof value === "string" ? value.replace(/\0/g, "").replace(/\r\n/g, "\n").trim() : "";

const validatePayload = (body) => {
  const name = cleanText(body.name);
  const phone = cleanText(body.phone);
  const email = cleanText(body.email).toLowerCase();
  const subject = cleanText(body.subject);
  const message = cleanText(body.message);
  const website = cleanText(body.website);
  const startedAt = Number(body.startedAt);
  const turnstileToken = cleanText(body.turnstileToken);

  if (website) return { honeypot: true };

  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_TIME_MS) {
    return { error: "Please refresh the page and complete the form normally." };
  }

  if (name.length < 2 || name.length > 80 || !/^[\p{L}\p{M} .'-]+$/u.test(name)) {
    return { error: "Please enter a valid name." };
  }

  if (email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const emailDomain = email.split("@")[1];
  if (disposableDomains.has(emailDomain)) {
    return { error: "Temporary email addresses are not accepted." };
  }

  if (phone && (phone.length > 30 || !/^[+()\d\s.-]{7,30}$/.test(phone))) {
    return { error: "Please enter a valid phone number or leave it empty." };
  }

  if (subject.length < 3 || subject.length > 120 || /[\r\n]/.test(subject)) {
    return { error: "The subject must be between 3 and 120 characters." };
  }

  if (message.length < 20 || message.length > 3000) {
    return { error: "The message must be between 20 and 3000 characters." };
  }

  if (turnstileToken.length > 2048) {
    return { error: "Security verification failed." };
  }

  const combined = `${subject}\n${message}`.toLowerCase();
  const linkCount = (combined.match(/https?:\/\/|www\./g) || []).length;
  const containsBlockedPhrase = blockedPhrases.some((phrase) => combined.includes(phrase));
  const containsCharacterFlood = /(\S)\1{12,}/i.test(combined);

  if (linkCount > 2 || containsBlockedPhrase || containsCharacterFlood) {
    return { error: "This message was blocked by the spam filter." };
  }

  return { name, phone, email, subject, message, turnstileToken };
};

const verifyTurnstile = async (token, ip) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { success: true, enabled: false };
  if (!token) return { success: false, enabled: true };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: ip === "unknown" ? undefined : ip,
      }),
      signal: controller.signal,
    });
    const result = await response.json();
    const expectedHostname = process.env.TURNSTILE_EXPECTED_HOSTNAME;
    const hostnameMatches = !expectedHostname || result.hostname === expectedHostname;
    const actionMatches = result.action === "contact";

    return { success: Boolean(result.success && hostnameMatches && actionMatches), enabled: true };
  } catch {
    return { success: false, enabled: true, unavailable: true };
  } finally {
    clearTimeout(timeout);
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  if (!isSameOrigin(req)) {
    return res.status(403).json({ message: "Request origin could not be verified." });
  }

  const contentType = firstHeaderValue(req.headers["content-type"]);
  if (!contentType.startsWith("application/json")) {
    return res.status(415).json({ message: "Content type must be application/json." });
  }

  const ip = getClientIp(req);
  const rateLimit = consumeRateLimit(ip);
  res.setHeader("X-RateLimit-Limit", String(RATE_LIMIT_MAX));
  res.setHeader("X-RateLimit-Remaining", String(rateLimit.remaining));

  if (!rateLimit.allowed) {
    res.setHeader("Retry-After", String(rateLimit.retryAfter));
    return res.status(429).json({ message: "Too many messages. Please try again later." });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ message: "Invalid request body." });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ message: "Invalid request body." });
  }

  const payload = validatePayload(body);
  if (payload.honeypot) {
    return res.status(200).json({ message: "Message received." });
  }
  if (payload.error) {
    return res.status(400).json({ message: payload.error });
  }

  const turnstile = await verifyTurnstile(payload.turnstileToken, ip);
  if (turnstile.unavailable) {
    return res.status(503).json({ message: "Security verification is temporarily unavailable." });
  }
  if (!turnstile.success) {
    return res.status(403).json({ message: "Please complete the security verification." });
  }

  pruneStore(duplicateStore, Date.now() - DUPLICATE_WINDOW_MS);
  const duplicateKey = hashValue(`${payload.email}:${payload.subject}:${payload.message}`);
  if (duplicateStore.has(duplicateKey)) {
    return res.status(429).json({ message: "This message was already sent." });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ message: "The contact form is temporarily unavailable. Please use the email link." });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "abdodj18@gmail.com";
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "hello@mudher.com";
  const emailText = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Subject: ${payload.subject}`,
    "",
    payload.message,
  ].join("\n");

  try {
    mail.setApiKey(apiKey);
    await mail.send({
      to: toEmail,
      from: { email: fromEmail, name: "Portfolio Contact" },
      replyTo: { email: payload.email, name: payload.name },
      subject: `Portfolio contact: ${payload.subject}`,
      text: emailText,
    });
    duplicateStore.set(duplicateKey, Date.now());
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact mail delivery failed", {
      code: error?.code || "unknown",
      statusCode: error?.response?.statusCode || 500,
    });
    return res.status(502).json({ message: "The message could not be delivered. Please try again later." });
  }
}
