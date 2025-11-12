import { Code2, Brain, Rocket, Github, Linkedin, Mail, Star } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Full‑Stack', desc: 'React, Node, FastAPI, MongoDB' },
  { icon: Brain, label: 'AI/ML', desc: 'LangChain, OpenAI, vector search' },
  { icon: Rocket, label: 'Perf & DX', desc: 'Vite, Tailwind, CI/CD' },
]

const projects = [
  {
    title: 'Realtime Chat + AI Assistant',
    desc: 'Socket-powered chat with semantic tools and memory.',
    tags: ['React', 'FastAPI', 'WebSocket'],
    link: 'https://example.com',
  },
  {
    title: '3D Product Configurator',
    desc: 'Interactive Spline/Three.js configurator with e‑commerce.',
    tags: ['Spline', 'Three.js', 'Stripe'],
    link: 'https://example.com',
  },
  {
    title: 'Developer Portfolio',
    desc: 'Animates, fast, and content-driven portfolio site.',
    tags: ['Vite', 'Tailwind', 'SEO'],
    link: 'https://example.com',
  },
]

export default function Sections() {
  return (
    <>
      <section id="about" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            I’m a software engineer who loves building joyful, reliable products. I focus on clean architecture,
            accessible UI, and developer experience. I thrive in teams that value curiosity and craft.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <s.icon className="w-8 h-8 text-white" />
                <h3 className="mt-4 text-white font-semibold">{s.label}</h3>
                <p className="text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-300" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['React', 'TypeScript', 'FastAPI', 'Node', 'MongoDB', 'Tailwind', 'Framer Motion', 'Docker', 'AWS', 'Vite', 'Playwright', 'Jest'].map((t) => (
              <span key={t} className="text-sm rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold text-white group-hover:translate-x-0.5 transition-transform">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-white/70">Let’s collaborate. I’m available for full‑time roles and select freelance projects.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold shadow hover:shadow-md transition"><Mail className="w-4 h-4"/> Email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-900/80 text-white px-5 py-3 font-semibold border border-white/20 hover:bg-gray-900 transition"><Github className="w-4 h-4"/> GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-900/80 text-white px-5 py-3 font-semibold border border-white/20 hover:bg-gray-900 transition"><Linkedin className="w-4 h-4"/> LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  )
}
