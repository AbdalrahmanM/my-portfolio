import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
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

const Certificate = () => {
  return (
    <main className="min-h-screen px-4 py-16 pt-28 md:py-28 md:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="section-kicker">Certificates</p>
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

        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
          {certificates.map((certificate, index) => (
            <Reveal key={`${certificate.issuer}-${certificate.title}`} delay={Math.min(index * 0.035, 0.22)} hover className="min-w-[84vw] snap-center md:min-w-0">
              <Link href={certificate.href} className="group block h-full">
                <article className="glass-card h-full p-3 transition duration-300">
                  <div className="overflow-hidden rounded-xl bg-white/[0.04]">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="aspect-[16/11] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-3 md:p-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5ee7bd]">
                        {certificate.issuer}
                      </p>
                      <h2 className="mt-2 text-lg text-white md:text-xl">{certificate.title}</h2>
                    </div>
                    <span className="rounded-full bg-[#5ee7bd] px-4 py-2 text-sm font-bold text-[#071310]">
                      View
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Certificate;
