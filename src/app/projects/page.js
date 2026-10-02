import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects — Selected Work & Applications by Ankit Gupta",
  description: "Explore selected full stack web applications, AI-powered systems, REST APIs, and software engineering projects built by Ankit Gupta.",
  keywords:    ["Ankit Gupta projects", "Full Stack projects", "MeetMind", "QR Menu Express", "MERN Stack projects", "Next.js applications"],
  openGraph: {
    title: "Projects — Ankit Gupta | Full Stack Developer",
    description: "Selected software engineering projects, full stack applications, and AI platforms by Ankit Gupta.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
