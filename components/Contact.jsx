import React, { useRef } from "react";
import ContactImg from "../public/assets/contactimg.jpg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const formRef = useRef(null);
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    console.log(formData);
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <div id="contact" className="w-full lg:h-screen section-slide-in">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact{" "}
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 h-[10%]"
                  src={ContactImg}
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2 text-[#5651e5]">ABDULRAHMAN</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/abdulrahman-alsamaraie/">
                    <div className="rounded-full shadow-lg shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/AbdalrahmanM">
                    <div className="rounded-full shadow-lg shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:abdodj18@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="https://discord.com/channels/abdulrahman94M#0731">
                    <div className="rounded-full shadow-lg shadow-gray-400  p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
                      <BsDiscord />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={formRef} method="post" onSubmit={handleOnSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <input
                      placeholder="Name"
                      name="name"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="Phone Number"
                      name="phone"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <input
                    placeholder="Subject"
                    name="subject"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    placeholder="Message"
                    name="message"
                    rows="10"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <button className="w-full group flex items-center justify-center gap-2 p-4 text-gray-100 mt-4">
                  Submit
                  <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
