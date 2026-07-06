import React from "react"
import Image from "next/image"
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const ProjectItem = ({title, tech, backgroundImg, projectUrl}) => {
    return (
        <Link href={projectUrl} className="group block h-full">
            <div className="glass-card h-full p-3 transition duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl">
                    <Image
                        src={backgroundImg}
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                        alt={`${title} project preview`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071310] via-[#071310]/15 to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#5ee7bd]">{tech}</p>
                            <h3 className="mt-1 text-2xl">{title}</h3>
                        </div>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5ee7bd] text-[#071310] transition group-hover:-translate-y-1 group-hover:translate-x-1">
                            <HiOutlineArrowUpRight size={22} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectItem
