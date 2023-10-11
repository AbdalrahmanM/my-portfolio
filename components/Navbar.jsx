"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineHome,
  AiFillFilePdf,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import a from "../public/assets/Logo.png";
import icon from "../public/icon.png";
import Certificate from "../public/Certificate.png";

export const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 600);
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/Givingly" ||
      router.asPath === "/Movies" ||
      router.asPath === "/hangman"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={`fixed h-full pt-2 ${
        nav ? "w-64" : "w-[4.3rem]"
      } bg-[#ecf0f3] z-[100] transition-all duration-700`}
    >
      <div
        className={`flex items-center justify-between h-20 px-4 ${
          nav ? "w-full" : "w-20"
        }`}
      >
        {nav && (
          <Link href="/#home">
            <Image
              src={a}
              className={`${showContent ? "fade-in" : "hidden"}`}
              width="125"
              height="50"
              alt=""
            />
          </Link>
        )}
        <div>
          {nav ? (
            <div
              onClick={handleNav}
              className={`${
                showContent ? "fade-in" : "hidden"
              } hover:rotate-[360deg] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer duration-500 `}
            >
              <AiOutlineClose
                size={25}
                className={`${showContent ? "fade-in" : "hidden"}`}
              />
            </div>
          ) : (
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer duration-500 hover:rotate-[360deg]"
            >
              <AiOutlineMenu size={25} />
            </div>
          )}
        </div>
      </div>
      {!nav && (
        <div
          className={`flex items-center justify-between h-20 px-4 ${
            nav ? "w-full" : "w-20"
          }`}
        >
          <Link href="/#home">
            <div
              className={`rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer duration-500 hover:rotate-[360deg]`}
            >
              <AiOutlineHome size={25} />
            </div>
          </Link>
        </div>
      )}
      {!nav && (
        <div
          className={`flex items-center justify-between h-20 px-4 ${
            nav ? "w-full" : "w-20"
          }`}
        >
          <a href="/cv.pdf" title="Download CV" download>
            <div
              className={`rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer duration-500 hover:rotate-[360deg]`}
            >
              <Image src={icon} size={25} />
            </div>
          </a>
        </div>
      )}
      {!nav && (
        <div
          className={`flex items-center justify-between h-20 px-4 ${
            nav ? "w-full" : "w-20"
          }`}
        >
          <Link href="/Certificate" title="My Certificate">
            <div
              className={`rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer duration-500 hover:rotate-[360deg]`}
            >
              <Image src={Certificate} size={25} />
            </div>
          </Link>
        </div>
      )}
      {nav && (
        <div className={`p-4 ${showContent ? "fade-in" : "hidden"}`}>
          <ul style={{ color: `${linkColor}` }} className="uppercase">
            <div className="flex flex-col text-gray-700 font-bold">
              <div>
                <Link href="/#home">
                  <li onClick={handleNav} className="py-2 text-sm">
                    Home
                  </li>
                </Link>
              </div>
              <div>
                <Link href="/#about">
                  <li onClick={handleNav} className="py-2 text-sm">
                    About
                  </li>
                </Link>
              </div>
              <div>
                <Link href="/#skills">
                  <li onClick={handleNav} className="py-2 text-sm">
                    Skills
                  </li>
                </Link>
              </div>
              <div>
                <Link href="/#project">
                  <li onClick={handleNav} className="py-2 text-sm">
                    Projects
                  </li>
                </Link>
              </div>
              <div>
                <Link href="/Certificate">
                  <li onClick={handleNav} className="py-2 text-sm">
                  Certificates
                  </li>
                </Link>
              </div>
              <div>
                <Link href="/#contact">
                  <li onClick={handleNav} className="py-2 text-sm">
                    Contact
                  </li>
                </Link>
              </div>
            </div>
          </ul>
          <div className="pt-40">
            <p className="uppercase font-bold tracking-widest text-[#5651e5]">
              Let&apos;s Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:rotate-[360deg]">
                <Link href="https://www.linkedin.com/in/abdulrahman-alsamaraie/">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:rotate-[360deg]">
                <Link href="https://github.com/AbdalrahmanM">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:rotate-[360deg]">
                <Link href="mailto:abdodj18@email.com">
                  <AiOutlineMail />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:rotate-[360deg]">
                <Link href="https://discord.com/channels/abdulrahman94M#0731">
                  <BsDiscord />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
