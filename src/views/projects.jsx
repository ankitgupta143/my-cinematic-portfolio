"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { PROJECTS } from "@/app/work/content";

const CircularGallery = dynamic(
  () => import("@/components/CircularGallery/CircularGallery"),
  { ssr: false }
);

function safeUrl(url) {
  if (!url) return url;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* ─── Magnetic CTA ─── */
function MagneticCTA({ href, children }) {
  const ref = useRef(null);
  return (
    <a ref={ref} href={safeUrl(href)} target="_blank" rel="noopener noreferrer"
      onMouseMove={(e) => {
        const b = ref.current.getBoundingClientRect();
        ref.current.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.25}px,${(e.clientY - b.top - b.height / 2) * 0.25}px)`;
      }}
      onMouseLeave={() => { ref.current.style.transform = "translate(0,0)"; }}
      className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#ff6b1a] text-black font-black rounded-xl text-[10px] uppercase tracking-[0.25em] hover:bg-[#ff8c42] will-change-transform"
      style={{ transition: "transform 0.2s cubic-bezier(.23,1,.32,1), background-color 0.3s" }}
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M3.5 9.5L9.5 3.5M9.5 3.5H5.5M9.5 3.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </a>
  );
}

/* ─── Fullscreen Showcase ─── */
function ProjectShowcase({ items, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx);
  const [dir, setDir] = useState(1);
  const locked = useRef(false);
  const touchY = useRef(0);
  const imgRef = useRef(null);
  const router = useRouter();
  const current = items[idx];

  const go = useCallback((next) => {
    if (next < 0 || next >= items.length || locked.current || next === idx) return;
    locked.current = true;
    setDir(next > idx ? 1 : -1);
    setIdx(next);
    setTimeout(() => { locked.current = false; }, 700);
  }, [items, idx]);

  useEffect(() => {
    const onWheel = (e) => { e.preventDefault(); if (!locked.current) { if (e.deltaY > 25) go(idx + 1); else if (e.deltaY < -25) go(idx - 1); } };
    const onTS = (e) => { touchY.current = e.touches[0].clientY; };
    const onTE = (e) => { const d = touchY.current - e.changedTouches[0].clientY; if (Math.abs(d) > 40) go(d > 0 ? idx + 1 : idx - 1); };
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "j") go(idx + 1);
      else if (e.key === "ArrowUp" || e.key === "k") go(idx - 1);
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchend", onTE, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchend", onTE);
      window.removeEventListener("keydown", onKey);
    };
  }, [go, idx, onClose]);

  const slideV = {
    enter: (d) => ({ y: d > 0 ? "8%" : "-8%", opacity: 0 }),
    center: { y: "0%", opacity: 1 },
    exit: (d) => ({ y: d > 0 ? "-8%" : "8%", opacity: 0 }),
  };
  const imageV = { enter: { scale: 1.12, opacity: 0 }, center: { scale: 1.02, opacity: 1 }, exit: { scale: 0.95, opacity: 0 } };
  const spring = { type: "tween", duration: 0.65, ease: [0.76, 0, 0.24, 1] };

  if (!current) return null;

  return (
    <motion.div className="fixed inset-0 z-[100] bg-[#060606] overflow-hidden select-none"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

      {/* Noise */}
      <div className="pointer-events-none fixed inset-0 z-[110] opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat" }} />

      {/* Close */}
      <button onClick={onClose}
        className="fixed top-6 left-6 md:left-auto md:right-20 z-[120] flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/30 hover:text-white hover:bg-white/5 text-[9px] tracking-[0.4em] uppercase transition-all backdrop-blur-sm">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        Close
      </button>

      {/* Details Box */}
      <div className="fixed inset-0 z-[115] flex flex-col items-center justify-center p-6 md:p-12 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono text-[#ff6b1a] tracking-widest uppercase mb-3">{current.category}</span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">{current.text}</h2>
        <p className="text-sm md:text-base text-white/60 leading-relaxed font-light mb-6 max-w-xl">{current.description}</p>
        {current.tech && (
          <p className="text-xs font-mono text-[#ff6b1a]/90 mb-8 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            {current.tech}
          </p>
        )}
        <div className="flex gap-4">
          <button onClick={onClose} className="px-6 py-3 bg-[#ff6b1a] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
            Back to Gallery
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PROJECTS PAGE — CircularGallery + Showcase
   ═══════════════════════════════════════════════ */
const defaultMapped = PROJECTS.map((p) => ({
  id: p.id,
  image: p.image || "/photo/project.webp",
  text: p.title,
  category: p.shortCategory || "Full Stack",
  description: p.description,
  tech: p.tech,
  link: p.link,
}));

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [showcaseItem, setShowcaseItem] = useState(null);
  const [spinRequest, setSpinRequest] = useState({ index: 0, timestamp: 0 });

  const filteredFull = useMemo(() => {
    if (activeCategory === "ALL") return defaultMapped;
    const filtered = defaultMapped.filter((p) =>
      (p.category || "").toLowerCase().includes(activeCategory.toLowerCase())
    );
    return filtered.length > 0 ? filtered : defaultMapped;
  }, [activeCategory]);

  const items = useMemo(() => {
    return filteredFull.map((p) => ({ image: p.image, text: p.text }));
  }, [filteredFull]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setSpinRequest({ index: 0, timestamp: Date.now() });
  };

  const handleItemClick = useCallback((idx) => {
    if (!filteredFull || !filteredFull[idx]) return;
    setShowcaseItem(idx);
  }, [filteredFull]);

  const categories = ["ALL", "FULL STACK", "REAL-TIME", "WEB APP"];

  return (
    <>
      <section className="relative w-full overflow-hidden" style={{ height: "100svh" }}>
        {/* Gallery */}
        <div className="absolute inset-0">
          {items !== null && items.length > 0 ? (
            <CircularGallery
              key={activeCategory}
              items={items}
              bend={3}
              textColor="gradient"
              borderRadius={0.05}
              font="600 32px 'Inter', sans-serif"
              scrollSpeed={2}
              scrollEase={0.05}
              onItemClick={handleItemClick}
              activeIndex={0}
              spinTimestamp={spinRequest.timestamp}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-white/30 text-xs tracking-[0.3em] uppercase">
              Loading Projects...
            </div>
          )}
        </div>

        {/* Categories Bar */}
        <div className="fixed top-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#ff6b1a] text-black shadow-[0_0_15px_rgba(255,107,26,0.3)]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Footer Hint */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 pointer-events-none">
          Drag to explore · Click card for details
        </div>
      </section>

      {/* Modal / Showcase */}
      {showcaseItem !== null && filteredFull && (
        <ProjectShowcase
          items={filteredFull}
          startIdx={showcaseItem}
          onClose={() => setShowcaseItem(null)}
        />
      )}
    </>
  );
}
