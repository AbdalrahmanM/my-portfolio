import React from "react";
import Carshow1 from "../public/assets/projects/Carshow.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
const Carshow = () => {
  return (
    <div className="w-full pl-[5rem]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 rounded-b-lg" />
        <Image
          className="absolute z-1 rounded-b-lg"
          layout="fill"
          objectFit="cover"
          src={Carshow1}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Car Show</h2>
          <h3>TypeScript / NEXT JS / Tailwind </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="my-4">Overview</h2>
          <p>
            Car Showcase is a web application that allows you to explore a wide
            range of cars from various manufacturers. Whether you&apos;re a car
            enthusiast or looking for your dream ride, this platform has you
            covered. It offers an intuitive and user-friendly interface, making
            it easy to discover and compare different car models.
          </p>
          <Link href="https://car-showcase-ashen-five.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/AbdalrahmanM/car_showcase">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 w-fit md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Type Script
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TAILWIND
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carshow;
