import React from "react"
import Image from "next/image"
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import C from "../public/assets/skills/csharp.png"
import redux from "../public/assets/skills/redux.png"
import Git from "../public/assets/skills/Git.png"
const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2 section-slide-in">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-wider uppercase text-[#5651e5]">
                    Skills
                </p>
                <h2>What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Html} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Css} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Javascript} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={ReactImg} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={NextJS} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">NextJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Tailwind} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Github} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Git} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">Git</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={Firebase} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={redux} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">redux</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={C} width="64px" height="64px" alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="uppercase">C#</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills