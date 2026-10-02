// ─────────────────────────────────────────────
//  CONTACT SECTION — ANKIT GUPTA
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiHtml5, SiCss, SiTypescript, SiGit, SiDocker, SiNodedotjs,
  SiExpress, SiMongodb, SiFirebase, SiPostman, SiGithub
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { TbSql, TbNetwork, TbMail } from "react-icons/tb";

export const SECTION = {
  label: "Have A Project In Mind?",
  heading: "Let's Build Something.",
  description: "Whether it's a product idea, a development opportunity, or an interesting technical challenge — I'd love to connect.",
};

export const SOCIAL_LINKS = [
  { label: "Email Me", href: "mailto:contact@ankitgupta.dev", icon: TbMail },
  { label: "GitHub", href: "https://github.com/ankitgupta143", icon: SiGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
];


export const COUNTRIES = [
  { code: "91",  name: "India",         flag: "🇮🇳" },
  { code: "1",   name: "US / Canada",   flag: "🇺🇸" },
  { code: "44",  name: "UK",            flag: "🇬🇧" },
  { code: "971", name: "UAE",           flag: "🇦🇪" },
  { code: "966", name: "Saudi Arabia",  flag: "🇸🇦" },
  { code: "974", name: "Qatar",         flag: "🇶🇦" },
  { code: "65",  name: "Singapore",     flag: "🇸🇬" },
  { code: "61",  name: "Australia",     flag: "🇦🇺" },
  { code: "49",  name: "Germany",       flag: "🇩🇪" },
];

export const TECH = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: TbSql },
  { name: "Firebase", icon: SiFirebase },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "Postman", icon: SiPostman },
];
