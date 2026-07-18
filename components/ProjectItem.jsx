import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const ProjectItem = ({ title, type, tech, backgroundImg, projectUrl, index }) => {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}px ${glowY}px, rgba(183,243,74,.24), transparent 72%)`;

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    glowX.set(event.clientX - bounds.left);
    glowY.set(event.clientY - bounds.top);
  };

  return (
    <Link href={projectUrl} className="group block h-full" aria-label={`View ${title} case study`}>
      <motion.article
        className="bento-card h-[390px] md:h-[430px]"
        onPointerMove={handlePointerMove}
        initial={{ opacity: 0, y: 58, clipPath: "inset(16% 0 0 0 round 8px)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0 round 8px)" }}
        viewport={{ once: true, amount: 0.22 }}
        whileHover={{ y: -4, borderColor: "rgba(183,243,74,.6)" }}
        transition={{ duration: 0.7, delay: Math.min(index * 0.035, 0.2), ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src={backgroundImg} alt={`${title} project preview`} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/25 to-black/5" />
        <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
        <div className="signal-grid absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
          <span className="rounded-md border border-white/15 bg-black/55 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-200 backdrop-blur-md">{type}</span>
          <span className="text-sm font-black text-white/60">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="eyebrow">{tech}</p>
          <div className="mt-3 flex items-end justify-between gap-4">
            <h3 className="text-3xl leading-none text-white sm:text-4xl">{title}</h3>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-spark text-canvas transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-ice">
              <HiOutlineArrowUpRight size={22} />
            </span>
          </div>
          <motion.div className="mt-5 h-px origin-left bg-gradient-to-r from-ice via-spark to-transparent" initial={{ scaleX: 0.25 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
        </div>
      </motion.article>
    </Link>
  );
};

export default ProjectItem;
