"use client";

import { useState, useEffect } from "react";

/* ============================================================
   MAYUR RATHORE — PORTFOLIO (single-file)
   Replace any https://images.unsplash.com / picsum URLs with
   your own images later (search: "TODO: replace image")
============================================================ */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "4", label: "Live Production Apps" },
  { value: "150+", label: "HackerRank Problems" },
  { value: "2", label: "Certifications" },
];

const SKILLS = [
  {
    title: "Backend",
    icon: "⚙️",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "C# / .NET MVC", "REST API Design"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Razor Views"],
  },
  {
    title: "Database & Security",
    icon: "🗄️",
    items: ["MySQL", "Schema Design", "Query Optimization", "JWT Auth", "RBAC", "Auth Workflows"],
  },
  {
    title: "Cloud & Tools",
    icon: "☁️",
    items: ["AWS (Certified)", "Git & GitHub", "Postman", "CI/CD", "Agile / Scrum", "VS Code"],
  },
];

const EXPERIENCE = [
  {
    role: "Software Developer — Full Stack",
    company: "Arnasoftech Pvt. Ltd.",
    location: "Indore, India",
    period: "May 2025 — Present",
    points: [
      "Engineering end-to-end features for Buurt, a live housing-management platform (Next.js, React, TypeScript, FastAPI, Python, MySQL).",
      "Designed scalable RESTful APIs in Python for dynamic forms, payment workflows and notification services.",
      "Implemented JWT authentication with Role-Based Access Control to secure tenant & property data.",
      "Built real-time notifications and dynamic PDF generation, automating document delivery.",
      "Delivered feature updates on GoBuild (C#, ASP.NET MVC, Razor Views) and eTrack web applications.",
    ],
    tags: ["Python", "FastAPI", "Next.js", "TypeScript", "C#", ".NET MVC", "MySQL"],
  },
  {
    role: "Trainee — Full Stack Development",
    company: "InfoBeans Foundation",
    location: "Indore, India",
    period: "Apr 2024 — May 2025",
    points: [
      "Completed a structured industry training program in full stack development.",
      "Built and integrated backend REST APIs with frontend modules (Node.js, Express.js, MySQL).",
      "Solved 150+ problems on HackerRank, strengthening algorithmic problem-solving.",
    ],
    tags: ["JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs"],
  },
];

const PROJECTS = [
  {
    name: "Buurt — Housing Management Platform",
    description:
      "A live production platform for housing management. Owned the full development lifecycle — dynamic forms, payment workflows, real-time notifications, JWT/RBAC security and automated PDF document delivery.",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "MySQL"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", // TODO: replace image
    live: "#",
    code: "https://github.com/developermayur",
  },
  {
    name: "GoBuild — Business Application",
    description:
      "Microsoft-stack business application. Delivered feature updates, module enhancements and production issue resolution aligned with evolving business requirements.",
    tech: ["C#", "ASP.NET MVC", "Razor Views", "MySQL", "REST APIs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // TODO: replace image
    live: "#",
    code: "https://github.com/developermayur",
  },
  {
    name: "eTrack & Architectural Request",
    description:
      "Web applications featuring request lifecycle management and form-based data capture, with third-party API integrations and performance gains through query optimization.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "MySQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // TODO: replace image
    live: "#",
    code: "https://github.com/developermayur",
  },
];

const EMAIL = "mayurrathore2003@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 font-sans selection:bg-indigo-500/30">
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0f]/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-xl font-bold tracking-tight">
            Mayur<span className="text-indigo-400">.</span>dev
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
          >
            Hire Me
          </a>

          {/* mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </nav>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 px-6 py-4">
            <ul className="flex flex-col gap-4 text-zinc-300">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenuOpen(false)} className="block hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        {/* glow background */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-28 pb-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for Remote & Hybrid Roles
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Mayur Rathore</span>
            </h1>

            <p className="mt-4 text-xl font-medium text-zinc-300">
              Full Stack Engineer
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Python · FastAPI · Next.js · React · C# · .NET MVC
            </p>

            <p className="mt-6 max-w-lg leading-relaxed text-zinc-400">
              I design, build and support production-grade web applications — from pixel-perfect
              user experiences to scalable backend APIs. Currently shipping features across 4 live
              business platforms with a cloud-first, agile mindset.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-zinc-200 hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-zinc-400">
              <a href="https://github.com/developermayur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              </a>
              <a href="https://linkedin.com/in/developermayur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors" aria-label="Email">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
              </a>
            </div>
          </div>

          {/* hero image */}
          <div className="relative mx-auto hidden md:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" // TODO: replace image — use your photo
              alt="Mayur Rathore — Full Stack Engineer"
              className="relative h-[420px] w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#12121a]/95 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-2xl font-bold text-indigo-400">4+</p>
              <p className="text-xs text-zinc-400">Production apps shipped</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-indigo-400 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="About Me" title="Turning ideas into production-ready products" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-zinc-400">
            <p>
              I&apos;m a Full Stack Engineer based in <span className="text-zinc-200">Indore, India</span>,
              with ~2 years of hands-on experience building and supporting live business applications.
              My core strength is <span className="text-zinc-200">Python with FastAPI</span> on the backend,
              paired with modern frontends in <span className="text-zinc-200">Next.js, React and TypeScript</span> —
              plus the Microsoft stack (C#, ASP.NET MVC, Razor Views).
            </p>
            <p>
              I&apos;ve delivered end-to-end features — RESTful APIs, JWT/RBAC authentication, payment
              workflows, real-time notifications and dynamic PDF generation — and I hold an{" "}
              <span className="text-zinc-200">AWS Public Cloud Infrastructure certification</span>.
            </p>
            <p>
              I&apos;m currently open to <span className="text-emerald-400 font-medium">remote and hybrid full-stack roles</span> where
              I can own features from database to UI and help teams ship reliable software.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "🎓", title: "B.Tech, Computer Science", sub: "Swami Vivekanand College of Engineering, Indore (2021–2025)" },
              { icon: "☁️", title: "AWS Certified", sub: "Public Cloud Infrastructure with Amazon Web Services" },
              { icon: "🗄️", title: "NPTEL Certified", sub: "Database Management System — NPTEL Swayam" },
              { icon: "🏆", title: "150+ Problems", sub: "Solved on HackerRank — algorithms & problem solving" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-500/40 transition-colors">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-3 font-semibold text-zinc-100">{c.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Tech Stack" title="Tools I build with" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-[#12121a] p-6 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Career" title="Work experience" />
        <div className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-white/10 md:before:left-1/2">
          {EXPERIENCE.map((job, i) => (
            <div key={job.company} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "" : ""}`}>
              {/* dot */}
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-indigo-400 bg-[#0a0a0f] md:left-1/2 md:-translate-x-1/2" />
              <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">{job.period}</span>
                <h3 className="mt-2 text-xl font-bold text-zinc-100">{job.role}</h3>
                <p className="text-sm text-zinc-400">
                  {job.company} · {job.location}
                </p>
                <ul className={`mt-4 space-y-2 text-sm text-zinc-400 ${i % 2 === 0 ? "md:[direction:rtl] md:[&>li]:[direction:ltr]" : ""}`}>
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 md:inline">
                      <span className="text-indigo-400 md:hidden">▹</span> {p}
                    </li>
                  ))}
                </ul>
                <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {job.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Portfolio" title="Featured projects" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#12121a] transition-all hover:border-indigo-500/40 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-100">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    <a href={p.live} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      Live Demo →
                    </a>
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                      Source Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-[#12121a] to-purple-600/10 p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
          <h2 className="relative text-3xl font-bold sm:text-4xl">
            Let&apos;s build something <span className="text-indigo-400">great together</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">
            I&apos;m open to remote and hybrid full-stack opportunities. Whether you have a project
            in mind, a role to discuss, or just want to say hi — my inbox is always open.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}?subject=Opportunity%20for%20Mayur%20Rathore`}
              className="rounded-full bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-400 transition-colors"
            >
              Send Me an Email
            </a>
            <button
              onClick={copyEmail}
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-zinc-200 hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              {copied ? "✓ Copied!" : "Copy Email Address"}
            </button>
          </div>

          <div className="relative mt-10 grid gap-4 text-left sm:grid-cols-3">
            <ContactCard icon="📧" label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactCard icon="📱" label="Phone / WhatsApp" value="+91 93033 31739" href="tel:+919303331739" />
            <ContactCard icon="📍" label="Location" value="Indore, India · Open to Remote" href="https://linkedin.com/in/developermayur" />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Mayur Rathore. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-6">
            <a href="https://github.com/developermayur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/developermayur" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- small helper components ---------- */

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">{title}</h2>
    </div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0f]/60 p-4 backdrop-blur hover:border-indigo-500/40 transition-colors"
    >
      <span className="text-2xl">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-zinc-500">{label}</span>
        <span className="block text-sm font-medium text-zinc-200 break-all">{value}</span>
      </span>
    </a>
  );
}
