"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const navItems = [
  { href: "/#home", label: "Home", section: "home" },
  { href: "/#about", label: "About", section: "about" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#project", label: "Projects", section: "project" },
  { href: "/Certificate", label: "Certificates", section: null },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (window.location.pathname !== "/") return undefined;
    const sectionIds = navItems.map((item) => item.section).filter(Boolean);

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.38;
      const active = sectionIds.reduce((current, id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= activationLine ? id : current;
      }, "home");
      setActiveSection(active);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-3 z-[100] px-3 sm:top-4 sm:px-4"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-lg border border-white/10 bg-canvas/85 px-2 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-3">
          <Link href="/#home" className="group flex min-h-[44px] items-center gap-3 rounded-md pr-2" aria-label="Abdulrahman Mudher home">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-spark text-sm font-black text-canvas transition duration-200 group-hover:bg-ice">
              AM
            </span>
            <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-white sm:block">Abdulrahman</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] p-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={`relative flex min-h-10 items-center rounded-md px-3 text-sm font-semibold transition duration-200 ${activeSection === item.section ? "text-canvas" : "text-zinc-400 hover:text-white"}`}>
                {activeSection === item.section && (
                  <motion.span
                    layoutId="active-nav-section"
                    className="absolute inset-0 rounded-md bg-spark"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="https://www.linkedin.com/in/abdulrahman-alsamaraie/" aria-label="LinkedIn" title="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-ice hover:text-ice">
              <FaLinkedinIn />
            </Link>
            <Link href="https://github.com/AbdalrahmanM" aria-label="GitHub" title="GitHub" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-ice hover:text-ice">
              <FaGithub />
            </Link>
            <a href="/cv.pdf" download className="primary-link !px-4">CV</a>
          </div>

          <button onClick={() => setOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-white shadow-none lg:hidden" aria-label="Open navigation" aria-expanded={open}>
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.aside
              className="ml-auto flex h-full w-[min(92vw,390px)] flex-col border-l border-white/10 bg-canvas p-4 sm:p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="eyebrow">Navigation</p>
                  <p className="mt-1 text-lg font-bold text-white">Explore the portfolio</p>
                </div>
                <button onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-white shadow-none" aria-label="Close navigation">
                  <AiOutlineClose size={22} />
                </button>
              </div>

              <nav className="mt-5 grid gap-2" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.045 }}>
                    <Link href={item.href} onClick={() => setOpen(false)} className={`group flex min-h-[54px] items-center justify-between rounded-lg border px-4 text-base font-bold transition hover:border-spark hover:bg-spark hover:text-canvas ${activeSection === item.section ? "border-spark/60 bg-spark/10 text-spark" : "border-white/10 bg-panel text-white"}`}>
                      {item.label}
                      <span className="text-xs text-zinc-500 transition group-hover:text-canvas">0{index + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
                <Link href="mailto:abdodj18@gmail.com" className="secondary-link gap-2"><AiOutlineMail />Email</Link>
                <a href="/cv.pdf" download className="primary-link gap-2"><HiOutlineDownload />CV</a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
