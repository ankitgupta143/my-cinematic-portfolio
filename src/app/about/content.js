// ─────────────────────────────────────────────
//  ABOUT & DEVELOPER DATA — ANKIT GUPTA
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiHtml5, SiCss, SiTypescript, SiBootstrap, SiMui, SiVite,
  SiGit, SiGithub, SiDocker, SiNodedotjs, SiExpress, SiMongodb,
  SiFirebase, SiPostman, SiCloudinary, SiJsonwebtokens
} from "react-icons/si";
import { TbSql, TbCpu, TbTerminal2, TbNetwork, TbServer, TbCode, TbDatabase, TbBrain } from "react-icons/tb";

export const SECTION = {
  label: "About Me",
};

export const HEADING = {
  line1: "Developer.",
  line2: "Problem Solver.",
  line3: "Builder.",
};

// *word* = highlighted/bold in BlurText
export const BIO = [
  "I’m *Ankit Gupta*, a Computer Science graduate and *Full Stack Developer* who enjoys turning ideas into practical digital products.",
  "My work spans *modern frontend experiences*, backend architecture, *REST APIs*, authentication, databases and *AI-powered applications*.",
  "I care about writing *clean code*, understanding how systems work under the hood, and creating products that are both *functional* and *scalable*.",
  "I hold a *B.Tech in Computer Science & Engineering* from Parul Institute of Technology, Parul University (Graduation: May 2025, CGPA: 8.30) with an active focus on data structures, algorithmic problem solving, and modern cloud ecosystems."
];

export const RESUME_URL = "/resume.pdf";

export const STATS = [
  { number: "500+", label: "LeetCode Problems", sub: "DSA Practice" },
  { number: "650+", label: "GeeksforGeeks", sub: "Algorithms Solved" },
  { number: "8.30", label: "B.Tech CGPA", sub: "Parul University" },
  { number: "MERN", label: "Full Stack", sub: "Architecture" },
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
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Material UI", icon: SiMui },
  { name: "Vite", icon: SiVite },
  { name: "REST APIs", icon: TbNetwork },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "Docker", icon: SiDocker },
];

export const CAPABILITIES = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, interactive and modern interfaces using React, Next.js and component-driven architecture.",
    icon: TbCode,
  },
  {
    title: "Backend Engineering",
    description: "Designing REST APIs, authentication systems, server-side logic and backend services using Node.js and Express.",
    icon: TbServer,
  },
  {
    title: "Databases",
    description: "Working with MongoDB, SQL and Firebase to design, query and manage scalable application data.",
    icon: TbDatabase,
  },
  {
    title: "API & Authentication",
    description: "Building APIs using JWT authentication, access and refresh tokens, validation and middleware.",
    icon: TbNetwork,
  },
  {
    title: "AI Integration",
    description: "Exploring AI-powered applications and integrating AI capabilities into modern web products.",
    icon: TbBrain,
  },
  {
    title: "Problem Solving",
    description: "Regularly practicing data structures and algorithms with 500+ LeetCode problems and 650+ GeeksforGeeks problems.",
    icon: TbTerminal2,
  },
];

export const EXPERIENCE = [
  {
    company: "Prometteur Solutions Pvt Ltd",
    role: "Software Engineer-1",
    period: "March 2026 — Present",
    location: "Surat, India",
    description: "Developing robust full-stack web applications, designing scalable backend REST APIs, implementing responsive frontend architectures, and collaborating on high-performance digital solutions.",
  },
  {
    company: "SlashMark",
    role: "React Intern",
    period: "2025",
    location: "Remote",
    description: "Worked on frontend development using React and modern web development practices while contributing to real-world application development.",
  },
  {
    company: "ByteXL",
    role: "Summer Intern",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    description: "Participated in a software development internship focused on strengthening practical programming and development skills.",
  },
  {
    company: "DC InfoTech",
    role: "Training & Internship Program",
    period: "Sep 2024 — Nov 2024",
    location: "India",
    description: "Completed a structured training and internship program focused on practical software development skills.",
  },
];

export const JOURNEY = [
  { year: "2024", title: "Foundations in CS", desc: "Started building deeper foundations in software development, data structures and computer science." },
  { year: "2024", title: "DC InfoTech", desc: "Completed training and internship program focused on software engineering practices." },
  { year: "2024", title: "GirlScript Summer of Code", desc: "Open Source Contributor — collaborated on real-world open source repositories." },
  { year: "2025", title: "ByteXL & SlashMark", desc: "Completed internships focused on core programming and React frontend development." },
  { year: "May 2025", title: "B.Tech CSE Graduation", desc: "Graduated with 8.30 CGPA from Parul Institute of Technology, Parul University." },
  { year: "March 2026 — Present", title: "Software Engineer-1", desc: "Working as Software Engineer-1 at Prometteur Solutions Pvt Ltd, engineering full-stack web applications and scalable APIs." },
];

export const WHAT_I_BUILD = [
  {
    num: "01",
    title: "Web Applications",
    desc: "Modern web applications with responsive interfaces, clean architecture and scalable functionality.",
  },
  {
    num: "02",
    title: "Full-Stack Systems",
    desc: "End-to-end applications combining modern frontend experiences with robust backend services.",
  },
  {
    num: "03",
    title: "Backend & APIs",
    desc: "REST APIs, authentication, databases and backend architecture designed for real-world applications.",
  },
  {
    num: "04",
    title: "AI-Powered Products",
    desc: "Applications that combine modern web technologies with AI to turn complex workflows into useful experiences.",
  },
];

export const APPROACH = [
  { step: "01", title: "Understand", desc: "Start by understanding the problem, users and requirements before writing code." },
  { step: "02", title: "Design", desc: "Turn requirements into clean interfaces, data flows and application architecture." },
  { step: "03", title: "Build", desc: "Build iteratively with reusable components, maintainable code and scalable APIs." },
  { step: "04", title: "Test", desc: "Validate functionality, edge cases, performance and user experience." },
  { step: "05", title: "Ship", desc: "Deploy, monitor, improve and keep iterating." },
];

export const PHILOSOPHY = {
  heading: "BUILD WITH PURPOSE.",
  content: "I believe good software is more than code that works. It should be understandable, maintainable, scalable and enjoyable to use. I'm continuously learning, experimenting and building to become a better engineer.",
};

export const CURRENT_FOCUS = [
  "Backend Architecture",
  "System Design",
  "AI Integration",
  "Scalable APIs",
  "Cloud & Deployment",
  "Real-Time Systems",
];

export const FAQ = [
  {
    q: "What technologies do you work with?",
    a: "I primarily work with React, Next.js, Node.js, Express.js, MongoDB and JavaScript, along with tools such as Git, GitHub, Postman, and Tailwind CSS.",
  },
  {
    q: "What type of projects do you build?",
    a: "I enjoy building full-stack web applications, SaaS products, AI-powered applications, dashboards and API-driven systems.",
  },
  {
    q: "Do you work with backend technologies?",
    a: "Yes. Backend development is an important part of my focus, including Node.js, Express.js, REST APIs, authentication (JWT), databases (MongoDB, SQL, Firebase), and backend architecture.",
  },
  {
    q: "Are you available for development opportunities?",
    a: "I'm open to relevant software development opportunities, full-time roles, freelance projects and technical collaborations.",
  },
  {
    q: "Can I see your code?",
    a: "Yes. My GitHub contains my projects, experiments and open-source contributions.",
  },
];
