import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineCheck } from "react-icons/hi2";
import Reveal from "@/components/Reveal";
import SectionSignal from "@/components/SectionSignal";
import SwipeHint from "@/components/SwipeHint";
import recoded from "../public/recoded.jpg";
import responsive from "../public/responsive.jpg";
import JS from "../public/JS.jpg";
import restApi from "../public/restApi.png";
import JSBasic from "../public/JSBasic.png";
import JSIntermediate from "../public/JSIntermediate.png";
import react from "../public/react.png";
import dataScience from "../public/DataS.png";
import turkcellReact from "../public/turkcellReact.png";
import network from "../public/network.png";
import awsAiPractitioner from "../public/aws-ai-practitioner-challenge.png";

const certificates = [
  { title: "AWS AI Practitioner Challenge", issuer: "Udacity", image: awsAiPractitioner, href: "https://www.udacity.com/certificate/e/cb1f8592-27b5-11f1-990d-afcd55211234" },
  { title: "Front-End Web Development", issuer: "Re:Coded", image: recoded, href: "https://www.credential.net/48e80d36-01bd-43ac-a7fe-71970e2346b6" },
  { title: "Data Science and AI Introduction", issuer: "Turkcell", image: dataScience, href: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/abdo94m/Veri%20Bilimi%20ve%20Yapay%20Zekaya%20Giri%C5%9F/101" },
  { title: "Basic Network", issuer: "Turkcell", image: network, href: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/abdo94m/Temel%20Network/101" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", image: responsive, href: "https://www.freecodecamp.org/certification/fcc9c774212-27cf-48dc-90e8-896c340927e1/responsive-web-design" },
  { title: "JavaScript Basic", issuer: "HackerRank", image: JSBasic, href: "https://www.hackerrank.com/certificates/4c27602f86a4" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", image: JS, href: "https://www.freecodecamp.org/certification/fcc9c774212-27cf-48dc-90e8-896c340927e1/javascript-algorithms-and-data-structures" },
  { title: "REST API", issuer: "HackerRank", image: restApi, href: "https://www.hackerrank.com/certificates/7f7f69fd9d79" },
  { title: "JavaScript Intermediate", issuer: "HackerRank", image: JSIntermediate, href: "https://www.hackerrank.com/certificates/8f3a4f3ca8e7" },
  { title: "React", issuer: "HackerRank", image: react, href: "https://www.hackerrank.com/certificates/f5d2a7051b52" },
  { title: "React", issuer: "Turkcell", image: turkcellReact, href: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/abdo94m/React/101" },
];

const spans = ["md:col-span-8", "md:col-span-4", "md:col-span-4", "md:col-span-8"];

const Certificate = () => (
  <main className="min-h-screen px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36 lg:px-8">
    <div className="mx-auto max-w-[1240px]">
      <Reveal>
        <SectionSignal index="05" label="Credentials / Verified Learning" />
        <div className="mt-4 grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl leading-tight text-gradient md:text-6xl">Verified learning, practical momentum.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
              Completed programs and technical certifications across frontend
              development, APIs, React, AI, and core web skills.
            </p>
          </div>
          <div className="bento-card flex items-end justify-between p-5 lg:col-span-4">
            <div><p className="eyebrow">Verified record</p><p className="mt-2 text-sm text-zinc-500">Continuous technical learning</p></div>
            <span className="text-5xl font-black leading-none text-blue-400">11</span>
          </div>
        </div>
      </Reveal>

      <SwipeHint accent="#60a5fa" label="Swipe to explore credentials" />
      <div className="mt-3 flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 md:mt-12 md:grid md:touch-auto md:grid-cols-12 md:gap-4 md:overflow-visible md:pb-0">
        {certificates.map((certificate, index) => (
          <motion.div
            key={`${certificate.issuer}-${certificate.title}`}
            className={`w-full min-w-full shrink-0 snap-start md:min-w-0 md:snap-none ${spans[index % spans.length]}`}
            initial={{ opacity: 0, y: 54, clipPath: "inset(12% 0 0 0 round 8px)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0 round 8px)" }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.68, delay: Math.min(index * 0.04, 0.2), ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={certificate.href} className="group block h-full" aria-label={`View ${certificate.title} certificate`}>
              <motion.article className="bento-card h-full p-3" whileHover={{ y: -4, borderColor: "rgba(96,165,250,.55)" }}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />
                <div className="overflow-hidden rounded-md bg-white/[0.04]">
                  <Image src={certificate.image} alt={`${certificate.title} certificate`} className="aspect-[16/11] w-full object-contain transition duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="relative z-10 flex items-center justify-between gap-4 p-3 md:p-4">
                  <div>
                    <p className="eyebrow">{certificate.issuer}</p>
                    <h2 className="mt-2 text-lg text-white md:text-xl">{certificate.title}</h2>
                  </div>
                  <motion.span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white" whileHover={{ rotate: 6, scale: 1.04 }}>
                    <HiOutlineCheck size={20} />
                  </motion.span>
                </div>
              </motion.article>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default Certificate;
