import React, { useRef } from "react";
import ContactImg from "../public/assets/contactimg.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Reveal from "./Reveal";

const Contact = () => {
  const formRef = useRef(null);
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <section id="contact" className="w-full py-16 md:py-28 section-slide-in">
      <div className="max-w-[1240px] m-auto px-4 w-full">
        <Reveal>
        <p className="section-kicker">
          Contact{" "}
        </p>
        <h2 className="py-4 text-3xl text-white md:text-6xl">Let&apos;s build something with presence.</h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-5 lg:gap-8">
          <Reveal className="col-span-3 hidden h-full w-full glass-card p-4 md:block lg:col-span-2" hover>
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl h-[10%]"
                  src={ContactImg}
                  alt="Workspace desk"
                />
              </div>
              <div>
                <h2 className="py-2 text-[#5ee7bd]">ABDULRAHMAN</h2>
                <p className="text-white/80">Front-End Developer</p>
                <p className="py-4 leading-7 text-white/62">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-white/75">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/abdulrahman-alsamaraie/">
                    <div className="rounded-full border border-white/10 bg-white/10 p-4 text-[#5ee7bd] cursor-pointer transition hover:-translate-y-1">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/AbdalrahmanM">
                    <div className="rounded-full border border-white/10 bg-white/10 p-4 text-[#5ee7bd] cursor-pointer transition hover:-translate-y-1">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:abdodj18@gmail.com">
                    <div className="rounded-full border border-white/10 bg-white/10 p-4 text-[#5ee7bd] cursor-pointer transition hover:-translate-y-1">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="https://discord.com/channels/abdulrahman94M#0731">
                    <div className="rounded-full border border-white/10 bg-white/10 p-4 text-[#5ee7bd] cursor-pointer transition hover:-translate-y-1">
                      <BsDiscord />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="col-span-3 h-auto w-full glass-card lg:p-4" hover>
            <div className="p-4 md:p-4">
              <form ref={formRef} method="post" onSubmit={handleOnSubmit}>
                <div className="grid gap-3 w-full py-2 md:grid-cols-2 md:gap-4">
                  <div className="flex flex-col">
                    <input
                      placeholder="Name"
                      name="name"
                      type="text"
                      className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#5ee7bd] md:p-4"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Phone Number"
                      name="phone"
                      type="text"
                      className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#5ee7bd] md:p-4"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#5ee7bd] md:p-4"
                />
                </div>
                <div className="flex flex-col py-2">
                  <input
                  placeholder="Subject"
                  name="subject"
                  type="text"
                  className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#5ee7bd] md:p-4"
                />
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    placeholder="Message"
                    name="message"
                    rows="6"
                    className="rounded-xl border border-white/10 bg-white/[0.07] p-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#5ee7bd] md:p-4"
                  />
                </div>
                <button className="w-full group flex items-center justify-center gap-2 p-4 text-[#071310] mt-4 transition hover:-translate-y-1 hover:bg-white">
                  Submit
                  <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
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
