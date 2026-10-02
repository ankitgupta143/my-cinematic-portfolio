import { PROJECTS } from "@/app/work/content";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ankitgupta.dev";

export default function sitemap() {
  const staticPages = [
    { url: BASE,               lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9  },
    { url: `${BASE}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/contact`,  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.75 },
  ];

  const projectPages = (PROJECTS || []).map((p) => ({
    url: `${BASE}/project/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
