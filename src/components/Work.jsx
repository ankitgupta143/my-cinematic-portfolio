"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION, PROJECTS } from "@/app/work/content";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
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
      id="work-section"
      className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 pt-48 pb-60 flex flex-col justify-center"
    >
      <div className="max-w-5xl w-full mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-bold">
            {SECTION.label}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {SECTION.heading}
            </h2>

            {/* Quick Filter links */}
            <div className="flex flex-wrap gap-2 lg:pb-2">
              <Link
                href="/projects"
                className="px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-[#ff6b1a] text-black hover:bg-white"
              >
                All Projects ({PROJECTS.length})
              </Link>
            </div>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className={`work-item group relative p-8 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden ${proj.featured
                  ? "bg-gradient-to-br from-[#ff6b1a]/15 via-white/[0.03] to-transparent border-[#ff6b1a]/40 shadow-[0_0_30px_rgba(255,107,26,0.15)]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
            >
              {/* Top Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

                {/* Left info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-[#ff6b1a] tracking-widest font-bold">
                      {proj.num}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded bg-white/5 text-white/60 border border-white/10">
                      {proj.category}
                    </span>
                    {proj.featured && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ff6b1a] text-black">
                        Featured Platform
                      </span>
                    )}
                  </div>

                  <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-[#ff6b1a] transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm font-mono text-white/50 mb-4">{proj.tagline}</p>

                  <p className="font-sans text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-2xl mb-5">
                    {proj.description}
                  </p>

                  {/* Feature Pills */}
                  {proj.features && proj.features.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] px-2.5 py-1 rounded bg-white/[0.04] text-white/60 font-light">
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badge */}
                  <div className="pt-3 border-t border-white/5 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#ff6b1a] tracking-wider uppercase">Tech:</span>
                    <span className="text-[11px] font-mono text-white/60">{proj.tech}</span>
                  </div>
                </div>

                {/* Right: Compact Screenshot preview & CTA */}
                <div className="shrink-0 w-full sm:w-[180px] md:w-[180px] lg:w-[200px] flex flex-col items-start md:items-end justify-between gap-3">
                  {proj.image && (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/30 group-hover:border-[#ff6b1a]/60 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-end w-full">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white/90 hover:bg-[#ff6b1a] hover:text-black hover:border-[#ff6b1a] transition-all duration-300"
                    >
                      Explore
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* View Full Gallery CTA */}
          <Link
            href="/projects"
            className="work-item group relative flex items-center justify-between p-8 rounded-2xl bg-gradient-to-r from-white/[0.02] to-white/[0.05] border border-white/10 hover:border-[#ff6b1a] transition-all duration-500 mt-4"
          >
            <div>
              <p className="text-[10px] text-[#ff6b1a] uppercase font-mono tracking-widest mb-1">Full Portfolio</p>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-[#ff6b1a] transition-colors">
                Explore All Projects in 3D Showcase →
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#ff6b1a] text-black flex items-center justify-center font-bold">
              →
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
