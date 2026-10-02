"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BlurText from "./BlurText";
import { SECTION, HEADING, BIO, RESUME_URL, TECH, STATS, CAPABILITIES, EXPERIENCE } from "@/app/about/content";

gsap.registerPlugin(ScrollTrigger);

export default function About({ standalone = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (standalone) {
        gsap.from(".about-label", { y: 25, opacity: 0, duration: 0.6, delay: 0.4 });
        gsap.from(".about-h", { y: 70, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.6 });
        gsap.from(".about-p", { y: 40, opacity: 0, duration: 0.7, delay: 0.8 });
        gsap.from(".about-stat", { scale: 0.9, opacity: 0, stagger: 0.08, duration: 0.6, delay: 0.9 });
        gsap.from(".about-skill", { x: -20, opacity: 0, stagger: 0.04, duration: 0.5, delay: 1.0 });
        gsap.from(".about-img", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.8 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".about-label", { y: 14, opacity: 0, duration: 0.3, ease: "power3.out" })
        .from(".about-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".about-p", { y: 20, opacity: 0, duration: 0.35, ease: "power3.out" }, 0.15)
        .from(".about-stat", { y: 20, opacity: 0, stagger: 0.05, duration: 0.3, ease: "power2.out" }, 0.2);

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 15%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -45,
      });

      setTimeout(() => ScrollTrigger.refresh(), 300);
    }, ref);
    return () => ctx.revert();
  }, [standalone]);

  return (
    <section
      id="about-section"
      ref={ref}
      className={`relative w-full min-h-screen px-10 md:px-20 ${standalone ? "" : "z-20"}`}
    >
      {standalone && (
        <div className="about-img absolute inset-0 z-0">
          <Image
            src="/photo/ankit.jpg"
            alt="Ankit Gupta"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-[#080808]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        </div>
      )}

      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-32">

        {/* Left Bio */}
        <div className={`w-full lg:w-[55%] max-w-2xl flex flex-col ${standalone ? "ml-auto lg:pr-10 text-right items-end" : "mr-auto text-left items-start"}`}>
          <p className="about-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-6 font-medium">
            {SECTION.label}
          </p>

          <h2
            className="about-h font-black tracking-tighter leading-[0.92] mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            <span className="block text-white">{HEADING.line1}</span>
            <span className="block text-white">{HEADING.line2}</span>
            <span className="block ghost">{HEADING.line3}</span>
          </h2>

          {BIO.map((text, i) => (
            <BlurText
              key={i}
              text={text}
              delay={25}
              animateBy="words"
              direction="bottom"
              stepDuration={0.22}
              className={`about-p text-sm md:text-base text-white/60 max-w-lg ${i < BIO.length - 1 ? "mb-5" : "mb-4"} font-light leading-relaxed ${standalone ? "text-right" : ""}`}
            />
          ))}

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full my-6 py-4 border-y border-white/10">
            {STATS.map((stat, i) => (
              <div key={i} className="about-stat flex flex-col">
                <span className="text-xl md:text-2xl font-black text-[#ff6b1a] tracking-tight">{stat.number}</span>
                <span className="text-[11px] text-white/80 font-medium">{stat.label}</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest">{stat.sub}</span>
              </div>
            ))}
          </div>

          <div className={`about-p mt-4 ${standalone ? "flex justify-end" : "flex justify-start"}`}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Ankit_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#ff6b1a]/30 text-[#ff6b1a] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#ff6b1a] hover:text-black transition-colors duration-300"
            >
              View Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Skills & Experience */}
        <div className={`w-full lg:w-[42%] max-w-md mt-10 lg:mt-0 flex flex-col ${standalone ? "mr-auto lg:items-start lg:text-left" : "ml-auto items-end text-right"}`}>
          <div className="about-p w-12 h-px bg-white/15 mb-8 lg:mb-10" />

          <div className="flex flex-col gap-8 w-full" id="stack">
            <div className="w-full">
              <p className={`about-p text-[10px] tracking-[0.4em] uppercase mb-4 ${standalone ? "text-left" : "text-right"}`}>
                <span className="border-b border-[#ff6b1a]/40 pb-1 inline-block text-white/60 font-medium">Tech I Work With</span>
              </p>
              <div className={`flex gap-2 flex-wrap ${standalone ? "justify-start" : "justify-end"}`}>
                {TECH.map((s) => (
                  <span
                    key={s.name}
                    className="group px-3 py-1 flex items-center gap-1.5 border border-white/10 bg-white/[0.03] rounded-full text-[10px] text-white/50 tracking-wider uppercase font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white cursor-default"
                  >
                    <s.icon className="w-3 h-3 text-white/50 transition-colors duration-300 group-hover:text-black shrink-0" />
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full" id="experience">
              <p className={`about-p text-[10px] tracking-[0.4em] uppercase mb-4 ${standalone ? "text-left" : "text-right"}`}>
                <span className="border-b border-[#ff6b1a]/40 pb-1 inline-block text-white/60 font-medium">Experience</span>
              </p>
              <div className={`flex flex-col gap-3 mt-2 ${standalone ? "items-start" : "items-end"}`}>
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="border-l-2 border-[#ff6b1a]/50 bg-white/[0.02] border-y border-r border-white/5 p-3 rounded-r-lg pl-3.5 text-left w-full transition-colors duration-300 hover:border-l-[#ff6b1a]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-white/90 text-xs font-bold">{exp.role}</p>
                      <span className="text-[#ff6b1a] text-[9px] font-mono tracking-wider uppercase font-semibold">{exp.period}</span>
                    </div>
                    <p className="text-white/50 text-[10px] font-mono mt-0.5">{exp.company} {exp.location ? `· ${exp.location}` : ""}</p>
                    <p className="text-white/40 text-[11px] font-light leading-relaxed mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
