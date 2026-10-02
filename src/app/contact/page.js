import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact — Ankit Gupta | Full Stack Developer",
  description: "Get in touch with Ankit Gupta for full stack web development, backend architecture, REST API design, or AI-powered product development. Available worldwide.",
  keywords:    ["contact Ankit Gupta", "hire full stack developer", "hire react developer", "hire nodejs developer", "freelance developer"],
  openGraph: {
    title: "Contact Ankit Gupta — Full Stack Developer",
    description: "Get in touch with Ankit Gupta for software development opportunities and technical collaborations.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
