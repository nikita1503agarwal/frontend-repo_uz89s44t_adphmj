import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Open to opportunities
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Software Engineer crafting playful, interactive experiences
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            I build modern web apps with delightful UX, robust architecture, and a focus on performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold shadow hover:shadow-md transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gray-900/80 text-white px-5 py-3 font-semibold border border-white/20 hover:bg-gray-900 transition">Contact Me</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent" />
    </section>
  )
}
