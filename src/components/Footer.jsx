"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const LINKS = [
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(48px)";
    el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="relative border-t border-white/8 px-10 md:px-20 py-16">

      {/* top row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">

        {/* name + tagline */}
        <div>
          <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-bold">
            Full Stack Developer
          </p>
          <h2
            className="font-black tracking-tighter leading-[0.85]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            <span className="block text-white">Ankit Gupta</span>
          </h2>
          <p className="text-xs text-white/40 font-mono mt-3 tracking-wider">
            React • Next.js • Node.js • MongoDB
          </p>
        </div>

        {/* nav + socials */}
        <div className="flex flex-col gap-8 md:items-end">
          <nav className="flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.3em] font-medium">
            {LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white/40 hover:text-[#ff6b1a] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.3em] font-medium">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-gupta-77580b238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="w-full h-px bg-white/8 mb-8" />

      {/* bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs text-white/40 font-mono">
          Building modern digital experiences & scalable backend systems.
        </p>
        <p className="text-[10px] text-white/25 tracking-[0.3em] uppercase">
          © 2026 Ankit Gupta. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
