"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#project", label: "Projects" },
  { href: "/Certificate", label: "Certificates" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-4 z-[100] px-4"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-full border border-white/10 bg-[#071310]/70 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <Link href="/#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5ee7bd] text-sm font-black text-[#071310] transition group-hover:rotate-6">
              AM
            </span>
            <span className="hidden text-sm font-bold uppercase tracking-[0.22em] text-white sm:block">
              Abdulrahman
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="https://www.linkedin.com/in/abdulrahman-alsamaraie/" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition hover:border-[#5ee7bd] hover:text-[#5ee7bd]">
              <FaLinkedinIn />
            </Link>
            <Link href="https://github.com/AbdalrahmanM" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition hover:border-[#5ee7bd] hover:text-[#5ee7bd]">
              <FaGithub />
            </Link>
            <a href="/cv.pdf" download className="primary-link py-2">
              CV
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-none lg:hidden"
            aria-label="Open navigation"
          >
            <AiOutlineMenu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              className="ml-auto h-full w-full max-w-sm border-l border-white/10 bg-[#071310] p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.26em] text-white">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-none"
                  aria-label="Close navigation"
                >
                  <AiOutlineClose size={22} />
                </button>
              </div>

              <nav className="mt-10 grid gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-xl font-bold text-white transition hover:border-[#5ee7bd] hover:text-[#5ee7bd]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10 flex gap-3">
                <Link href="mailto:abdodj18@gmail.com" className="secondary-link">
                  <AiOutlineMail className="mr-2" />
                  Email
                </Link>
                <a href="/cv.pdf" download className="primary-link">
                  <HiOutlineDownload className="mr-2" />
                  CV
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
