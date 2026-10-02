export default function manifest() {
  return {
    name:             "Ankit Gupta — Full Stack Developer",
    short_name:       "Ankit Gupta",
    description:      "Full Stack Developer building modern web applications, scalable backends, and AI-powered products.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#080808",
    theme_color:      "#ff6b1a",
    lang:             "en",
    icons: [
      { src: "/photo/favicon.png?v=2", sizes: "192x192", type: "image/png" },
      { src: "/photo/favicon.png?v=2", sizes: "512x512", type: "image/png" },
    ],
  };
}
