// ─────────────────────────────────────────────
//  PROJECTS & WORK DATA — ANKIT GUPTA
// ─────────────────────────────────────────────

export const SECTION = {
  label: "Selected Work",
  heading: "Projects.",
};

export const PROJECTS = [
  {
    id: "meetmind",
    num: "01",
    featured: true,
    title: "MeetMind",
    category: "AI • Full Stack • Next.js",
    shortCategory: "Full Stack",
    tagline: "AI Meeting Intelligence Platform",
    description:
      "An AI-powered meeting intelligence platform that transforms conversations into structured, searchable insights. MeetMind helps users understand meetings through AI-generated summaries, transcripts, action items, decisions, analytics, and an interactive AI assistant.",
    tech: "Next.js · React · Node.js · MongoDB · AI · Deepgram · REST APIs · JWT",
    image: "/projects/meetmind.png",
    features: [
      "AI Meeting Summaries",
      "Meeting Transcription",
      "Action Items & Decisions",
      "Speaker Analysis",
      "Meeting Analytics",
      "AI Assistant",
      "Search & Workspace Management",
    ],
    github: "#",
    link: "#",
  },
  {
    id: "production-igaming-platform",
    num: "02",
    featured: false,
    title: "Production iGaming Platform",
    category: "Full Stack • iGaming • Next.js",
    shortCategory: "Full Stack",
    tagline: "Scalable iGaming Web Application",
    description:
      "Developed and maintained scalable iGaming web applications using React.js and Next.js. Integrated third-party payment and KYC verification services, wallet management, and promotional features while optimizing application performance, responsive UI, and multilingual user experiences.",
    tech: "React.js · Next.js · Node.js · Payment Gateways · KYC Verification · REST APIs",
    image: "/projects/igaming-platform.jpg",
    features: [
      "Payment & KYC Integration",
      "Wallet Management",
      "Promotional Features",
      "Multilingual UI",
      "Performance Optimization",
      "Responsive Experience",
    ],
    bullets: [
      "Developed and maintained scalable iGaming web applications using React.js and Next.js.",
      "Integrated third-party payment and KYC verification services, wallet management, and promotional features.",
      "Optimized application performance, responsive UI, and multilingual user experiences.",
      "Collaborated with backend and QA teams to deliver reliable production features.",
    ],
    github: "#",
    link: "#",
  },
  {
    id: "hospital-management",
    num: "03",
    featured: false,
    title: "Hospital Management System",
    category: "Full Stack • Management System",
    shortCategory: "Full Stack",
    tagline: "Healthcare Operations Platform",
    description:
      "A web-based hospital management application designed to simplify the management of patients, doctors, and healthcare operations through a centralized system.",
    tech: "React · Node.js · Express.js · MongoDB · REST APIs",
    image: "/projects/hospital.png",
    features: ["Patient Records", "Doctor Appointments", "Centralized Admin"],
    github: "#",
    link: "https://hospital-management-system-site.netlify.app",
  },
  {
    id: "chat-application",
    num: "04",
    featured: false,
    title: "Chat Application",
    category: "Real-Time • Full Stack",
    shortCategory: "Real-Time",
    tagline: "Instant Messaging Platform",
    description:
      "A real-time communication application designed for instant messaging and interactive user conversations.",
    tech: "React · Node.js · Socket.io · Express.js · MongoDB",
    image: "/projects/chatapp.jpg",
    features: ["Real-time Chat", "User Presence", "Instant Messaging"],
    github: "#",
    link: "#",
  },
  {
    id: "fitness-tracker",
    num: "05",
    featured: false,
    title: "Fitness Tracker",
    category: "Web Application",
    shortCategory: "Web App",
    tagline: "Workout & Health Monitoring",
    description:
      "A fitness tracking application designed to help users monitor workouts, log daily metrics, and maintain their fitness routines.",
    tech: "React · Node.js · Express.js · MongoDB",
    image: "/projects/fitness.png",
    features: ["Workout Logs", "Progress Tracking", "Metric Visuals"],
    github: "#",
    link: "https://gym-fitness-tracker.netlify.app",
  },
];

export const FALLBACK_PROJECTS = PROJECTS;
