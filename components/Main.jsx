import React from "react"
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import Link from "next/link";

export const Main = () => {

  return (
    <div id="home" className="w-full h-screen text-center max-sm:pt-24 section-slide-in">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">Let&apos;s Build Something Extraordinary Together!</p>
          <h1 className="py-4 text-gray-700">Hi, I&apos;m <span className="text-[#5651e5]">ABDULRAHMAN</span></h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">with a passion for creating immersive digital experiences that seamlessly
            blend innovative design and flawless functionality. My expertise lies in responsive web development, and I&apos;m excited to contribute to
            dynamic projects that leave a lasting impact on user engagement.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
              <Link href="https://www.linkedin.com/in/abdulrahman-alsamaraie/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
              <Link href="https://github.com/AbdalrahmanM">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
              <Link href="mailto:abdodj18@email.com">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:rotate-[360deg]">
              <Link href="https://discord.com/channels/abdulrahman94M#0731">
                <BsDiscord />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
