import React from "react"
import Givingly from "../public/assets/projects/nike.png";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri"
const givingly = () => {
    return (
        <div className="w-full pl-[5rem]">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 rounded-b-lg" />
                <Image
                    className="absolute z-1 rounded-b-lg"
                    layout="fill"
                    objectFit="cover"
                    src={Givingly}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Nike Work Version</h2>
                    <h3>React.JS/Vite / Tailwind </h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2 className="my-4">Overview</h2>
                    <p>I created the "Nike Working Version" webpage as a practice project to further enhance my skills in React, Vite, and Tailwind. The project involved designing and developing a responsive and visually appealing interface, simulating a Nike product page. This exercise allowed me to deepen my understanding of modern front-end development techniques, component-based architecture, and styling using Tailwind. The project also helped me refine my workflow with Vite, optimizing development speed and performance.
                    </p>
                    <Link href="https://nike-plum.vercel.app/">
                        <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    </Link>
                    <Link href="https://github.com/AbdalrahmanM/nike">
                        <button className="px-8 py-2 mt-4">Code</button>
                    </Link>
                </div>
                <div className="col-span-4 w-fit md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-2 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />HTML</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />TAILWIND</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />React.JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default givingly