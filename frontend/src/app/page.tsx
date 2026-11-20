import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Header / Status bar */}
      <header className="flex justify-between items-center max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase tracking-wider font-mono text-emerald-400">
            Live on URL • Week 4 Milestone
          </span>
        </div>
        <div className="text-xs text-neutral-400 font-mono">
          Phase: Build
        </div>
      </header>

      {/* Main Content Area */}
      <section className="max-w-4xl w-full mx-auto my-auto py-16">
        <div className="inline-block px-3 py-1 mb-6 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-mono text-neutral-300">
          Empty but Live 🚀
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          Rahul Hasan
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mb-8 leading-relaxed">
          Full-Stack Web &amp; AI Developer building modern web applications. 
          This project is officially live and reachable on the web.
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-3">
            Confirmed Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 15 (App Router)",
              "React",
              "TypeScript",
              "Django REST Framework",
              "PostgreSQL",
              "Tailwind CSS"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-300 hover:border-neutral-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next Week Roadmap Card */}
        <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6 backdrop-blur max-w-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-2">
            <span>📋</span> Coming in Next Week&apos;s Build
          </h2>
          <ul className="text-xs sm:text-sm text-neutral-400 space-y-1.5 list-disc list-inside">
            <li>Interactive portfolio with featured case studies</li>
            <li>Django REST API integration for dynamic projects &amp; blogs</li>
            <li>PostgreSQL-backed data models and analytics</li>
            <li>Full responsiveness &amp; dark mode refined layout</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-mono">
        <div>
          © 2026 Rahul Hasan • Portfolio Project
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/rahul-hasan25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:rahulhaasan2022@gmail.com"
            className="hover:text-emerald-400 transition"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
