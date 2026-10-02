import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://ankitgupta.dev";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Ankit Gupta — Full Stack Developer",
    template: "%s — Ankit Gupta | Full Stack Developer",
  },
  description:
    "Ankit Gupta is a Full Stack Developer specializing in React, Next.js, Node.js and MongoDB. Explore his projects, experience, skills and software development journey.",
  keywords: [
    "Ankit Gupta",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer"
  ],
  authors: [{ name: "Ankit Gupta", url: BASE }],
  creator: "Ankit Gupta",
  publisher: "Ankit Gupta",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Ankit Gupta — Full Stack Developer",
    title: "Ankit Gupta — Full Stack Developer",
    description: "Ankit Gupta is a Full Stack Developer specializing in React, Next.js, Node.js and MongoDB. Explore his projects, experience, skills and software development journey.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Ankit Gupta — Full Stack Developer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ankit Gupta — Full Stack Developer",
    description: "Ankit Gupta is a Full Stack Developer specializing in React, Next.js, Node.js and MongoDB. Explore his projects, experience, skills and software development journey.",
    images: ["/og-image.png"],
    creator: "@ankitgupta",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/photo/favicon.png", type: "image/png" },
    ],
    apple: "/photo/favicon.png",
    shortcut: "/photo/favicon.png",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Ankit Gupta",
      "url": BASE,
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer building modern web applications, scalable backend systems, and AI-powered products with React, Next.js, Node.js, and MongoDB.",
      "knowsAbout": [
        "React", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
        "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI",
        "Vite", "REST APIs", "JWT", "Authentication", "SQL", "Firebase",
        "Git", "GitHub", "Postman", "Docker", "AI Integration"
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "occupationLocation": { "@type": "Country", "name": "India" },
          "skills": "React, Next.js, Node.js, Express.js, MongoDB, REST APIs, AI Integration"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "Modern web applications with clean interfaces, powerful backends, scalable APIs and thoughtful engineering."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backend & REST API Development",
            "description": "Designing REST APIs, authentication systems, server-side logic and backend architecture using Node.js and Express."
          }
        }
      ],
      "sameAs": [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "Ankit Gupta — Full Stack Developer",
      "description": "Portfolio of Ankit Gupta, a Full Stack Developer building modern web applications, scalable backends, and AI-powered products.",
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": "Ankit Gupta — Full Stack Developer Portfolio",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${BASE}/projects` },
          { "@type": "ListItem", "position": 3, "name": "About", "item": `${BASE}/about` },
          { "@type": "ListItem", "position": 4, "name": "Contact", "item": `${BASE}/contact` },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What technologies do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I primarily work with React, Next.js, Node.js, Express.js, MongoDB and JavaScript, along with tools such as Git, GitHub and Postman."
          }
        },
        {
          "@type": "Question",
          "name": "What type of projects do you build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I enjoy building full-stack web applications, SaaS products, AI-powered applications, dashboards and API-driven systems."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with backend technologies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Backend development is an important part of my current focus, including Node.js, Express.js, REST APIs, authentication, databases and backend architecture."
          }
        },
        {
          "@type": "Question",
          "name": "Are you available for development opportunities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I'm open to relevant software development opportunities, freelance projects and collaborations."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see your code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. My GitHub contains my projects, experiments and open-source contributions."
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      "url": BASE,
      "name": "Ankit Gupta — Full Stack Developer",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "description": "Portfolio of Ankit Gupta — Full Stack Developer building modern web applications, scalable backends, and AI-powered products.",
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-tagline", ".about-summary", "article p"]
      }
    }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}
