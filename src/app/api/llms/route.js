import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ankitgupta.dev";
  const data = {
    name: "Ankit Gupta",
    title: "Full Stack Developer",
    website: base,
    location: "India",
    available_for_hire: true,
    summary:
      "Ankit Gupta is a Full Stack Developer focused on building modern web applications, scalable backend systems, REST APIs, and AI-powered products with React, Next.js, Node.js, and MongoDB.",
    
    services: [
      {
        name: "Full Stack Web Development",
        description: "Modern web applications with responsive interfaces, clean architecture and scalable functionality",
        technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      },
      {
        name: "Backend & REST API Engineering",
        description: "Designing REST APIs, authentication systems, server-side logic and backend architecture",
        technologies: ["Node.js", "Express.js", "JWT", "REST APIs", "Postman"],
      },
      {
        name: "AI-Powered Applications",
        description: "Applications that combine modern web technologies with AI to turn complex workflows into useful experiences",
        technologies: ["AI Integration", "Deepgram", "Next.js", "Node.js"],
      },
    ],

    skills: {
      frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI", "Vite"],
      backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
      database: ["MongoDB", "SQL", "Firebase"],
      tools_devops: ["Git", "GitHub", "Postman", "Cloudinary", "Docker"],
      focus_areas: ["Backend Architecture", "System Design", "AI Integration", "Scalable APIs", "Cloud & Deployment", "Real-Time Systems"],
    },

    stats: {
      leetcode_problems: "500+",
      geeksforgeeks_problems: "650+",
      degree: "B.Tech Computer Science & Engineering (8.30 CGPA)",
      architecture: "MERN Stack Full Stack Development",
    },

    projects: [
      { name: "MeetMind", category: "AI • Full Stack • Next.js", description: "AI-powered meeting intelligence platform" },
      { name: "QR Menu Express", category: "Full Stack • MERN", description: "Digital restaurant menu platform with QR codes" },
      { name: "Nexus", category: "Full Stack • Social Impact", description: "Disaster relief and emergency coordination platform" },
      { name: "MERN Restaurant App", category: "Full Stack • MERN", description: "Seamless digital restaurant system" },
      { name: "Hospital Management System", category: "Full Stack • Management System", description: "Centralized healthcare management platform" },
      { name: "Chat Application", category: "Real-Time • Full Stack", description: "Instant messaging and user communication application" },
      { name: "Fitness Tracker", category: "Web Application", description: "Workout and fitness activity monitoring app" },
    ],

    pages: {
      home: `${base}/`,
      about: `${base}/about`,
      projects: `${base}/projects`,
      contact: `${base}/contact`,
    },
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
