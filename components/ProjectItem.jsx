import React from "react"
import Image from "next/image"
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const ProjectItem = ({title, tech, backgroundImg, projectUrl, index, accent, featured}) => {
    const glowX = useMotionValue(0);
    const glowY = useMotionValue(0);
    const glow = useMotionTemplate`radial-gradient(380px circle at ${glowX}px ${glowY}px, ${accent}38, transparent 72%)`;

    const handlePointerMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        glowX.set(event.clientX - bounds.left);
        glowY.set(event.clientY - bounds.top);
    };

    return (
        <Link href={projectUrl} className="group block h-full">
            <motion.div
                className="glass-card h-full p-3"
                onPointerMove={handlePointerMove}
                initial={{ opacity: 0, y: 76, clipPath: "inset(0 0 35% 0 round 26px)" }}
                whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 26px)" }}
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -10, rotateX: 1.2, rotateY: -1.2 }}
                transition={{ duration: 0.85, delay: Math.min(index * 0.035, 0.22), ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 900 }}
            >
                <motion.div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
                <div className="relative z-20 overflow-hidden rounded-xl">
                    <Image
                        src={backgroundImg}
                        className={`${featured ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"} w-full object-cover transition duration-700 group-hover:scale-105`}
                        alt={`${title} project preview`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071310] via-[#071310]/15 to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: accent }}>{tech}</p>
                            <h3 className={`${featured ? "md:text-4xl" : ""} mt-1 text-2xl`}>{title}</h3>
                        </div>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full text-[#060d0c] transition group-hover:-translate-y-1 group-hover:translate-x-1" style={{ backgroundColor: accent }}>
                            <HiOutlineArrowUpRight size={22} />
                        </span>
                    </div>
                    <span className="absolute right-4 top-4 text-5xl font-black text-white/[0.16] md:text-7xl">{String(index + 1).padStart(2, "0")}</span>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProjectItem
