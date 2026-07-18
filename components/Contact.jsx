import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import SectionSignal from "./SectionSignal";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const contactLinks = [
  ["LinkedIn", FaLinkedinIn, "https://www.linkedin.com/in/abdulrahman-alsamaraie/"],
  ["GitHub", FaGithub, "https://github.com/AbdalrahmanM"],
  ["Email", AiOutlineMail, "mailto:abdodj18@gmail.com"],
];

const Contact = () => {
  const formRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [startedAt, setStartedAt] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => { setStartedAt(String(Date.now())); }, []);

  const resetTurnstile = () => {
    if (typeof window !== "undefined" && window.turnstile) window.turnstile.reset();
  };

  async function handleOnSubmit(event) {
    event.preventDefault();
    if (status.type === "submitting") return;

    const fields = new FormData(event.currentTarget);
    const turnstileToken = fields.get("cf-turnstile-response") || "";

    if (turnstileSiteKey && !turnstileToken) {
      setStatus({ type: "error", message: "Please complete the security verification." });
      return;
    }

    const payload = {
      name: fields.get("name") || "",
      phone: fields.get("phone") || "",
      email: fields.get("email") || "",
      subject: fields.get("subject") || "",
      message: fields.get("message") || "",
      website: fields.get("website") || "",
      startedAt,
      turnstileToken,
    };

    setStatus({ type: "submitting", message: "Sending your message..." });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "The message could not be sent.");

      setStatus({ type: "success", message: result.message || "Message sent successfully." });
      formRef.current?.reset();
      setStartedAt(String(Date.now()));
      resetTurnstile();
    } catch (error) {
      setStatus({ type: "error", message: error.message || "The message could not be sent." });
      resetTurnstile();
    }
  }

  return (
    <section id="contact" className="w-full py-16 md:py-28">
      {turnstileSiteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />}
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionSignal index="04" label="Contact / Open Channel" />
          <AnimatedHeading className="max-w-4xl text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s build something with presence.
          </AnimatedHeading>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Reveal className="bento-card p-5 sm:p-7 lg:col-span-4" hover>
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Available for new work</p>
                  <h3 className="mt-3 text-2xl text-white">Open channel</h3>
                </div>
                <span className="relative mt-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-blue-400 opacity-70" />
                  <span className="relative inline-flex h-3 w-3 bg-blue-400" />
                </span>
              </div>

              <div className="my-7 flex h-24 items-end gap-1.5 rounded-lg border border-white/[0.08] bg-[#09090b]/55 px-4 py-3" aria-hidden="true">
                {[38, 68, 48, 82, 55, 92, 44, 72, 36, 64, 50, 86].map((height, index) => (
                  <motion.span
                    key={`${height}-${index}`}
                    className="flex-1 rounded-sm bg-blue-500"
                    animate={reducedMotion ? { height: `${height}%` } : { height: [`${height * 0.45}%`, `${height}%`, `${height * 0.58}%`] }}
                    transition={{ duration: 1.7 + index * 0.08, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-zinc-400 md:text-base">
                Available for frontend roles, ambitious product work, and
                collaborations where thoughtful motion and AI-aware thinking matter.
              </p>

              <div className="mt-auto grid grid-cols-3 gap-2 pt-7">
                {contactLinks.map(([label, Icon, href]) => (
                  <Link key={label} href={href} className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-[#09090b]/45 px-2 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400 transition hover:border-blue-400 hover:text-blue-300">
                    <Icon size={17} />{label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bento-card p-5 sm:p-7 lg:col-span-8">
            <form ref={formRef} method="post" onSubmit={handleOnSubmit} aria-describedby="contact-status" className="relative z-10">
              <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex="-1" autoComplete="off" />
              </div>
              <input type="hidden" name="startedAt" value={startedAt} readOnly />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="field-label">Name *</label>
                  <input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" minLength="2" maxLength="80" required className="field-input" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="field-label">Phone <span className="font-normal text-zinc-600">(optional)</span></label>
                  <input id="contact-phone" name="phone" type="tel" placeholder="+90 ..." inputMode="tel" autoComplete="tel" maxLength="30" className="field-input" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="contact-email" className="field-label">Email *</label>
                  <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength="160" required className="field-input" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="contact-subject" className="field-label">Subject *</label>
                  <input id="contact-subject" name="subject" type="text" placeholder="What would you like to build?" minLength="3" maxLength="120" required className="field-input" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="contact-message" className="field-label">Message *</label>
                  <textarea id="contact-message" name="message" rows="6" placeholder="Tell me about the project, role, or idea..." minLength="20" maxLength="3000" required className="field-input resize-y" />
                </div>
              </div>

              {turnstileSiteKey && (
                <div className="my-4 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-2">
                  <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="dark" data-size="flexible" data-action="contact" />
                </div>
              )}

              <button type="submit" disabled={status.type === "submitting" || !startedAt} aria-busy={status.type === "submitting"} className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0">
                {status.type === "submitting" ? "Sending" : "Send message"}
                <FaPaperPlane className="text-xs" />
              </button>

              <div id="contact-status" className={`mt-4 flex min-h-6 items-center justify-center gap-2 text-center text-xs font-semibold ${status.type === "success" ? "text-green-400" : status.type === "error" ? "text-red-400" : status.type === "submitting" ? "text-blue-300" : "text-zinc-500"}`} role="status" aria-live="polite">
                <HiOutlineShieldCheck size={16} />
                {status.message || "Protected by validation, spam screening, and rate limiting."}
              </div>
            </form>
          </Reveal>
        </div>

        <div className="flex justify-center pt-8 md:pt-12">
          <Link href="/#home" aria-label="Back to top" className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-blue-400 transition hover:-translate-y-1 hover:border-blue-400">
            <HiOutlineChevronDoubleUp size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
