import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About — Ankit Gupta | Full Stack Developer",
  description: "Meet Ankit Gupta — a Computer Science graduate and Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore his skills, journey, and problem-solving background.",
  keywords:    ["Ankit Gupta", "Full Stack Developer", "React Developer", "Node.js Developer", "MongoDB Developer", "Software Developer India", "B.Tech CSE"],
  openGraph: {
    title: "About Ankit Gupta — Full Stack Developer",
    description: "Full Stack Developer building modern web applications, scalable backend systems, and AI-powered products.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
