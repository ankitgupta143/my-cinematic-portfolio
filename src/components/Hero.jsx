"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./BlurText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.4 });
      gsap.from(".hero-line",  { y: 90, opacity: 0, stagger: 0.1, duration: 1.1, ease: "power4.out", delay: 0.6 });
      
      // Premium staggered letter effect for the main name
      gsap.from(".hero-letter", { 
        y: 100, 
        opacity: 0, 
        rotateX: -40,
        stagger: 0.06, 
        duration: 1.2, 
        ease: "power4.out", 
        delay: 0.7 
      });

      gsap.from(".hero-sub",   { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 1.4 });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 60%",
          end:   "bottom 10%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[135vh] flex flex-col justify-center px-10 md:px-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl lg:max-w-3xl">
        <p className="hero-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.25em] uppercase font-bold mb-4">
          Full Stack Developer
        </p>

        <h1
          className="font-black tracking-tighter leading-[0.88] mb-8 flex flex-col relative z-10 hero-clamp-text"
        >
          <span className="hero-line block ghost z-0 text-[0.55em] tracking-normal mb-1">Hey, I'm</span>
          <span className="block text-white whitespace-nowrap z-10 hero-perspective">
            {"Ankit Gupta.".split("").map((char, index) => (
              <span key={index} className="hero-letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <div className="max-w-lg hero-sub flex flex-col gap-4">
          <BlurText
            text="I build *modern* web applications with *clean* interfaces, powerful backends, *scalable* APIs and thoughtful engineering."
            delay={30}
            animateBy="words"
            direction="bottom"
            stepDuration={0.22}
            className="text-sm md:text-base text-white/70 font-medium leading-[1.6]"
          />
          <BlurText
            text="FULL STACK DEVELOPER • *REACT* • *NEXT.JS* • *NODE.JS* • *MONGODB*"
            delay={22}
            animateBy="words"
            direction="bottom"
            stepDuration={0.2}
            className="text-[11px] md:text-xs text-[#ff6b1a]/90 font-mono tracking-wider leading-relaxed uppercase"
          />

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work-section"
              className="px-6 py-3 bg-[#ff6b1a] text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact-section"
              className="px-6 py-3 border border-white/20 text-white font-medium text-xs uppercase tracking-widest rounded-full hover:border-[#ff6b1a] hover:text-[#ff6b1a] transition-colors duration-300"
            >
              Let's Talk
            </a>
          </div>

          <p className="mt-2 text-[10px] text-white/30 tracking-[0.4em] uppercase font-medium">
            Explore ↓
          </p>
        </div>

      </div>

    </section>
  );
}
