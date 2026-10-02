/**
 * SeoContent — Hidden semantic HTML for search engines & AI crawlers.
 * Structured for Ankit Gupta — Full Stack Developer.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">Ankit Gupta — Full Stack Developer</h1>
      
      <p itemProp="description">
        Ankit Gupta is a Full Stack Developer specializing in React, Next.js, Node.js and MongoDB. 
        Focused on building modern web applications, scalable backend systems, REST APIs, and AI-powered products with clean architecture.
      </p>

      <p itemProp="jobTitle">Full Stack Developer</p>

      <section aria-label="Capabilities">
        <h2>Engineering Capabilities — Ankit Gupta</h2>
        
        <article>
          <h3>Frontend Engineering</h3>
          <p>
            Building responsive, interactive and modern interfaces using React, Next.js and component-driven architecture with Tailwind CSS.
          </p>
        </article>

        <article>
          <h3>Backend & REST APIs</h3>
          <p>
            Designing scalable REST APIs, authentication systems with JWT, server-side logic and backend architecture using Node.js and Express.js.
          </p>
        </article>

        <article>
          <h3>Databases & Cloud</h3>
          <p>
            Designing and managing scalable data layers with MongoDB, SQL, Firebase, and integrating cloud services like Cloudinary and Docker.
          </p>
        </article>

        <article>
          <h3>AI-Powered Products</h3>
          <p>
            Developing AI-powered meeting intelligence platforms like MeetMind, integrating transcription (Deepgram), NLP summaries, and intelligent assistants.
          </p>
        </article>
      </section>

      <section aria-label="Problem Solving Statistics">
        <h2>Problem Solving Statistics</h2>
        <ul>
          <li>500+ LeetCode DSA Problems Solved</li>
          <li>650+ GeeksforGeeks Problems Solved</li>
          <li>B.Tech Computer Science & Engineering (8.30 CGPA)</li>
          <li>GirlScript Summer of Code 2024 Contributor</li>
        </ul>
      </section>

      <section aria-label="Technical Skills">
        <h2>Technical Skills</h2>
        <p itemProp="knowsAbout">
          React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI, Vite,
          Node.js, Express.js, MongoDB, SQL, Firebase, REST APIs, JWT, Authentication, Git, GitHub, Postman,
          Cloudinary, Docker, AI Integration, Deepgram
        </p>
      </section>

      <section aria-label="Selected Projects">
        <h2>Selected Projects by Ankit Gupta</h2>
        <ul>
          <li>MeetMind — AI Meeting Intelligence Platform (Next.js, Node.js, MongoDB, AI, Deepgram, JWT)</li>
          <li>QR Menu Express — Digital Restaurant Menu Platform (React, Node.js, Express, MongoDB, Firebase)</li>
          <li>Nexus — Disaster Relief Platform (React, Node.js, MongoDB, REST APIs)</li>
          <li>MERN Restaurant App — Full-Stack Digital Restaurant System</li>
          <li>Hospital Management System — Web-based Healthcare Management Application</li>
          <li>Chat Application — Real-Time Instant Messaging System</li>
          <li>Fitness Tracker — Workout and Fitness Activity Monitoring App</li>
        </ul>
      </section>

      <section aria-label="Contact">
        <h2>Contact Ankit Gupta</h2>
        <p>
          Available for software development roles, full-stack projects, and technical collaborations worldwide.
        </p>
      </section>
    </div>
  );
}
