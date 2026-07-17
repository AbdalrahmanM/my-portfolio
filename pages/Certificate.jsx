import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  {
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    image: awsAiPractitioner,
    href: "https://www.udacity.com/certificate/e/cb1f8592-27b5-11f1-990d-afcd55211234",
  },
  {
    title: "Front-End Web Development",
    issuer: "Re:Coded",
    image: recoded,
    href: "https://www.credential.net/48e80d36-01bd-43ac-a7fe-71970e2346b6",
  },
  {
    title: "Data Science and AI Introduction",
    issuer: "Turkcell",
    image: dataScience,
    href: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/abdo94m/Veri%20Bilimi%20ve%20Yapay%20Zekaya%20Giri%C5%9F/101",
  },
  {
    title: "Basic Network",
    issuer: "Turkcell",
    image: network,
    href: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/abdo94m/Temel%20Network/101",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    image: responsive,
    href: "https://www.freecodecamp.org/certification/fcc9c774212-27cf-48dc-90e8-896c340927e1/responsive-web-design",
  },
  {
    title: "JavaScript Basic",
    issuer: "HackerRank",
    image: JSBasic,
    href: "https://www.hackerrank.com/certificates/4c27602f86a4",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    image: JS,
    href: "https://www.freecodecamp.org/certification/fcc9c774212-27cf-48dc-90e8-896c340927e1/javascript-algorithms-and-data-structures",
  },
  {
    title: "REST API",
    issuer: "HackerRank",
    image: restApi,
    href: "https://www.hackerrank.com/certificates/7f7f69fd9d79",
  },
  {
    title: "JavaScript Intermediate",
    issuer: "HackerRank",
    image: JSIntermediate,
    href: "https://www.hackerrank.com/certificates/8f3a4f3ca8e7",
  },
  {
    title: "React",
    issuer: "HackerRank",
    image: react,
    href: "https://www.hackerrank.com/certificates/f5d2a7051b52",
  },
  {
    title: "React",
    issuer: "Turkcell",
    image: turkcellReact,
    href: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/abdo94m/React/101",
  },
];

const accents = ["#7dd3fc", "#72f2c1", "#ffd166", "#ff8f70"];

const Certificate = () => {
  return (
    <main className="min-h-screen px-4 py-16 pt-28 md:py-28 md:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <SectionSignal index="05" label="Credentials / Verified Learning" accent="sky" />
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl leading-tight text-gradient md:text-7xl">
                Verified learning, practical momentum.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-base md:leading-8">
                A curated view of completed programs and technical
                certifications across frontend development, APIs, React, AI,
                and core web skills.
              </p>
            </div>
            <Link href="/#contact" className="primary-link w-fit">
              Contact Me
            </Link>
          </div>
        </Reveal>

        <SwipeHint accent="#7dd3fc" />
        <div className="mt-3 flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth pb-4 md:mt-12 md:grid md:touch-auto md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
          {certificates.map((certificate, index) => (
            <motion.div
              key={`${certificate.issuer}-${certificate.title}`}
              className={`w-full min-w-full shrink-0 snap-start md:min-w-0 md:snap-none ${index === 0 ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 70, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.28 }}
              transition={{ duration: 0.8, delay: Math.min(index * 0.04, 0.2), ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={certificate.href} className="group block h-full">
                <motion.article className="glass-card h-full p-3" whileHover={{ y: -8 }}>
                  <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 90% 10%, ${accents[index % accents.length]}45, transparent 34%)` }} />
                  <div className="overflow-hidden rounded-xl bg-white/[0.04]">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className={`${index === 0 ? "md:aspect-[21/9]" : ""} aspect-[16/11] w-full object-contain transition duration-700 group-hover:scale-[1.025]`}
                    />
                  </div>
                  <div className="relative z-10 flex items-center justify-between gap-4 p-3 md:p-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: accents[index % accents.length] }}>
                        {certificate.issuer}
                      </p>
                      <h2 className={`${index === 0 ? "md:text-3xl" : "md:text-xl"} mt-2 text-lg text-white`}>{certificate.title}</h2>
                    </div>
                    <motion.span
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-black text-[#060d0c]"
                      style={{ backgroundColor: accents[index % accents.length], borderColor: accents[index % accents.length] }}
                      whileHover={{ rotate: 12, scale: 1.08 }}
                    >
                      ✓
                      <motion.span className="absolute -inset-1 rounded-full border border-dashed" style={{ borderColor: `${accents[index % accents.length]}85` }} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
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
};

export default Certificate;
