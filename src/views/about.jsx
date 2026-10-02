"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ProfileCard from "@/components/ProfileCard";
import {
  SECTION, HEADING, BIO, RESUME_URL, TECH, STATS,
  CAPABILITIES, EXPERIENCE, JOURNEY, WHAT_I_BUILD, APPROACH,
  PHILOSOPHY, CURRENT_FOCUS, FAQ
} from "@/app/about/content";

const renderParsedText = (text) => {
  if (!text) return "";
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="font-semibold text-white/90">
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function AboutPage() {
  const ref = useRef(null);
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ap-label", { y: 20, opacity: 0, duration: 0.5, delay: 0.3 });
      gsap.from(".ap-h", { y: 55, opacity: 0, duration: 0.8, ease: "power4.out", delay: 0.5 });
      gsap.from(".ap-bio", { y: 25, opacity: 0, duration: 0.6, delay: 0.7 });
      gsap.from(".ap-stat", { y: 20, opacity: 0, stagger: 0.05, duration: 0.4, delay: 0.8 });
      gsap.from(".ap-card", { scale: 0.95, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.2 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-dvh overflow-y-auto pb-32">

      {/* Subtle background glow */}
      <div className="ap-img absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff6b1a]/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1250px] mx-auto px-6 sm:px-12 lg:px-16 pt-[14vh] relative z-10 flex flex-col gap-20">
        
        {/* ── Top: Profile Hero & Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          
          {/* Left: Profile Card */}
          <div className="ap-card flex justify-center items-start lg:sticky lg:top-[15vh]">
            <ProfileCard
              name="Ankit Gupta"
              title="Full Stack Developer"
              handle="ankitgupta"
              avatarUrl="/photo/ankit.jpg"
              miniAvatarUrl="/photo/ankit.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => router.push("/contact")}
            />
          </div>

          {/* Right: Bio & Stats */}
          <div className="flex flex-col items-start text-left">
            <p className="ap-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-bold">
              {SECTION.label}
            </p>
            <h1 className="ap-h font-black tracking-tighter leading-[0.88] mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              <span className="block text-white">{HEADING.line1}</span>
              <span className="block text-white">{HEADING.line2}</span>
              <span className="block ghost">{HEADING.line3}</span>
            </h1>

            <div className="space-y-4 text-sm md:text-base text-white/60 font-light leading-relaxed mb-8">
              {BIO.map((text, i) => (
                <p key={i}>
                  {renderParsedText(text)}
                </p>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8 py-5 border-y border-white/10">
              {STATS.map((stat, i) => (
                <div key={i} className="ap-stat flex flex-col">
                  <span className="text-2xl font-black text-[#ff6b1a] tracking-tight">{stat.number}</span>
                  <span className="text-xs text-white/90 font-medium">{stat.label}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">{stat.sub}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download="Ankit_Gupta_Resume.pdf"
                className="ap-bio inline-flex items-center gap-2 px-6 py-3.5 bg-[#ff6b1a] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,107,26,0.3)]"
              >
                View Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <button
                onClick={() => router.push("/contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white text-xs font-medium uppercase tracking-widest rounded-full hover:border-[#ff6b1a] hover:text-[#ff6b1a] transition-colors duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* ── Section: What I Build (Services) ── */}
        <div className="flex flex-col gap-8 pt-12 border-t border-white/10">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">What I Build.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_I_BUILD.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#ff6b1a]/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#ff6b1a] tracking-widest">{item.num}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-2 mb-3">{item.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section: Core Capabilities Grid ── */}
        <div className="flex flex-col gap-8 pt-12 border-t border-white/10">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Core Engineering</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">Technical Strengths.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b1a]/10 border border-[#ff6b1a]/30 flex items-center justify-center text-[#ff6b1a]">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{c.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-light">{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section: Tech Stack & Tools ── */}
        <div className="flex flex-col gap-8 pt-12 border-t border-white/10" id="stack">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Tech Stack</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">Tools I Build With.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {TECH.map((t) => (
              <div key={t.name} className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full flex items-center gap-2 hover:border-[#ff6b1a] hover:bg-white/5 transition-all duration-200">
                <t.icon className="w-3.5 h-3.5 text-[#ff6b1a]" />
                <span className="text-xs text-white/80 font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section: Developer Journey Timeline & Experience ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-white/10" id="journey">
          
          {/* Journey Timeline */}
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Timeline</p>
            <h2 className="text-3xl font-black tracking-tighter text-white mb-8">My Journey.</h2>
            <div className="relative border-l border-white/10 ml-3 pl-6 space-y-8">
              {JOURNEY.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#ff6b1a] shadow-[0_0_10px_#ff6b1a]" />
                  <span className="text-[10px] font-mono text-[#ff6b1a] uppercase tracking-wider">{item.year}</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">{item.title}</h4>
                  <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Work History</p>
            <h2 className="text-3xl font-black tracking-tighter text-white mb-8">Experience.</h2>
            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white">{exp.role}</h4>
                      <p className="text-xs font-mono text-[#ff6b1a] mt-0.5">{exp.company} {exp.location ? `· ${exp.location}` : ""}</p>
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-xs text-white/50 mt-3 font-light leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Section: Open Source & Problem Solving ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#ff6b1a] font-bold mb-3">Open Source</p>
              <h3 className="text-2xl font-black text-white tracking-tight mb-3">GirlScript Summer of Code 2024</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Contributed to open-source projects through GirlScript Summer of Code 2024, gaining experience working with real-world codebases and collaborative development workflows.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ff6b1a]/10 to-transparent border border-[#ff6b1a]/30 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#ff6b1a] font-bold mb-3">Problem Solving</p>
              <h3 className="text-2xl font-black text-white tracking-tight mb-3">I Don't Just Write Code. I Solve Problems.</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-4">
                Regularly practicing data structures and algorithms to strengthen problem-solving ability and build a deeper understanding of computer science fundamentals.
              </p>
              <div className="flex gap-4">
                <div>
                  <span className="text-2xl font-black text-[#ff6b1a]">500+</span>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">LeetCode Problems</p>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div>
                  <span className="text-2xl font-black text-[#ff6b1a]">650+</span>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">GFG Problems</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Section: Approach & Philosophy ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          
          <div className="lg:col-span-2">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Methodology</p>
            <h2 className="text-3xl font-black tracking-tighter text-white mb-6">My Approach.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APPROACH.map((a) => (
                <div key={a.step} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono text-[#ff6b1a] font-bold">{a.step}</span>
                  <h4 className="text-sm font-bold text-white mt-1 mb-1">{a.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#ff6b1a] font-bold mb-3">How I Think</p>
              <h3 className="text-xl font-black text-white tracking-tight mb-3">{PHILOSOPHY.heading}</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                {PHILOSOPHY.content}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">Currently Exploring</p>
              <div className="flex flex-wrap gap-1.5">
                {CURRENT_FOCUS.map((focus) => (
                  <span key={focus} className="px-2.5 py-1 rounded bg-white/5 text-[9px] text-white/60 font-mono">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Section: FAQ ── */}
        <div className="flex flex-col gap-6 pt-12 border-t border-white/10">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#ff6b1a] font-bold mb-2">Questions</p>
            <h2 className="text-3xl font-black tracking-tighter text-white">Frequently Asked Questions.</h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQ.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-sm font-bold text-white hover:text-[#ff6b1a] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-[#ff6b1a] font-mono text-lg ml-4">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-xs text-white/60 font-light leading-relaxed border-t border-white/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}