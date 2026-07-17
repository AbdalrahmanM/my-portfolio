import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import Link from "next/link";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import SectionSignal from "./SectionSignal";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [startedAt, setStartedAt] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    setStartedAt(String(Date.now()));
  }, []);

  const resetTurnstile = () => {
    if (typeof window !== "undefined" && window.turnstile) {
      window.turnstile.reset();
    }
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    if (status.type === "submitting") return;

    const fields = new FormData(e.currentTarget);
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

      if (!response.ok) {
        throw new Error(result.message || "The message could not be sent.");
      }

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
    <section id="contact" className="w-full py-16 md:py-28 section-slide-in">
      {turnstileSiteKey && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      )}
      <div className="max-w-[1240px] m-auto px-4 w-full">
        <Reveal>
        <SectionSignal index="04" label="Contact / Open Channel" accent="coral" />
        <AnimatedHeading className="py-4 text-3xl text-white md:text-6xl">Let&apos;s build something with presence.</AnimatedHeading>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-5 lg:gap-8">
          <Reveal className="col-span-3 h-full w-full glass-card p-5 lg:col-span-2 lg:p-7" hover>
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff8f70]">Transmission ready</p>
                  <h3 className="mt-2 text-2xl text-white">Open channel</h3>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff8f70] opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ff8f70]" />
                </span>
              </div>

              <div className="my-7 flex h-24 items-end gap-2 rounded-2xl border border-white/[0.08] bg-black/15 px-4 py-3">
                {[38, 68, 48, 82, 55, 92, 44, 72, 36, 64, 50, 86].map((height, index) => (
                  <motion.span
                    key={`${height}-${index}`}
                    className="flex-1 rounded-full bg-gradient-to-t from-[#ff8f70] via-[#ffd166] to-[#72f2c1]"
                    animate={{ height: [`${height * 0.45}%`, `${height}%`, `${height * 0.58}%`] }}
                    transition={{ duration: 1.7 + index * 0.08, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>

              <p className="text-sm leading-7 text-white/62 md:text-base">
                Available for frontend roles, ambitious product work, and
                collaborations where thoughtful motion and AI-aware thinking
                matter.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["LinkedIn", FaLinkedinIn, "https://www.linkedin.com/in/abdulrahman-alsamaraie/"],
                  ["GitHub", FaGithub, "https://github.com/AbdalrahmanM"],
                  ["Email", AiOutlineMail, "mailto:abdodj18@gmail.com"],
                  ["Discord", BsDiscord, "https://discord.com/channels/abdulrahman94M#0731"],
                ].map(([label, Icon, href], index) => (
                  <motion.div key={label} whileHover={{ y: -5, scale: 1.02 }}>
                    <Link href={href} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3 text-sm font-bold text-white/70 transition hover:border-[#ff8f70]/50 hover:text-white">
                      <Icon style={{ color: index % 2 === 0 ? "#ff8f70" : "#7dd3fc" }} />
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="col-span-3 h-auto w-full glass-card lg:p-4" hover>
            <div className="relative z-10 p-4 md:p-4">
              <form ref={formRef} method="post" onSubmit={handleOnSubmit} aria-describedby="contact-status">
                <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" name="website" type="text" tabIndex="-1" autoComplete="off" />
                </div>
                <input type="hidden" name="startedAt" value={startedAt} readOnly />
                <div className="grid gap-3 w-full py-2 md:grid-cols-2 md:gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="contact-name" className="sr-only">Name</label>
                    <input
                      id="contact-name"
                      placeholder="Name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      minLength="2"
                      maxLength="80"
                      required
                      className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff8f70] md:p-4"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="contact-phone" className="sr-only">Phone number</label>
                    <input
                      id="contact-phone"
                      placeholder="Phone Number"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength="30"
                      className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff8f70] md:p-4"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                  id="contact-email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength="160"
                  required
                  className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff8f70] md:p-4"
                />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <input
                  id="contact-subject"
                  placeholder="Subject"
                  name="subject"
                  type="text"
                  minLength="3"
                  maxLength="120"
                  required
                  className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff8f70] md:p-4"
                />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <textarea
                    id="contact-message"
                    placeholder="Message"
                    name="message"
                    rows="6"
                    minLength="20"
                    maxLength="3000"
                    required
                    className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff8f70] md:p-4"
                  />
                </div>

                {turnstileSiteKey && (
                  <div className="my-3 overflow-hidden rounded-xl border border-white/10 bg-black/15 p-2">
                    <div
                      className="cf-turnstile"
                      data-sitekey={turnstileSiteKey}
                      data-theme="dark"
                      data-size="flexible"
                      data-action="contact"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === "submitting" || !startedAt}
                  aria-busy={status.type === "submitting"}
                  className="w-full group flex items-center justify-center gap-2 p-4 text-[#060d0c] mt-4 bg-gradient-to-r from-[#72f2c1] via-[#7dd3fc] to-[#ffd166] transition hover:-translate-y-1 hover:saturate-150 disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0"
                >
                  {status.type === "submitting" ? "Sending" : "Send Message"}
                  <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <div
                  id="contact-status"
                  className={`mt-4 flex min-h-6 items-center justify-center gap-2 text-center text-xs font-semibold ${
                    status.type === "success"
                      ? "text-[#72f2c1]"
                      : status.type === "error"
                        ? "text-[#ff8f70]"
                        : status.type === "submitting"
                          ? "text-[#7dd3fc]"
                          : "text-white/40"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <HiOutlineShieldCheck size={16} />
                  {status.message || "Protected by validation, spam screening, and rate limiting."}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center py-8 md:py-12">
          <Link href="/#home">
            <div className="rounded-full border border-white/10 bg-white/10 p-4 cursor-pointer transition hover:-translate-y-1">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5ee7bd]" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
