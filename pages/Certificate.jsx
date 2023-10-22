import React from "react";
import Image from "next/image";
import recoded from "@/public/recoded.jpg";
import responsive from "@/public/responsive.jpg";
import JS from "@/public/JS.jpg";
import restApi from "@/public/restApi.png";
import JSBasic from "@/public/JSBasic.png";
import JSIntermediate from "@/public/JSIntermediate.png"
import Link from "next/link";

const Certificate = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto px-2 py-16 section-slide-in ml-14 pl-[1.5rem] pr-[0.5rem]">
      <p className="text-xl tracking-widest uppercase text-[#5651e5] mb-4">Certificates</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={recoded}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link href="https://www.credential.net/48e80d36-01bd-43ac-a7fe-71970e2346b6">
                <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={responsive}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link href="https://www.freecodecamp.org/certification/fcc9c774212-27cf-48dc-90e8-896c340927e1/responsive-web-design">
                <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={JSBasic}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link href="https://www.hackerrank.com/certificates/4c27602f86a4">
                <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={JS}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link href="https://www.freecodecamp.org/certification/fcc9c774212-27cf-48dc-90e8-896c340927e1/javascript-algorithms-and-data-structures">
                <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={restApi}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link href="https://www.hackerrank.com/certificates/7f7f69fd9d79">
                <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={JSIntermediate}
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link href="https://www.hackerrank.com/certificates/8f3a4f3ca8e7">
                <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
