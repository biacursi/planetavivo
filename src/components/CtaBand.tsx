import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { CHANNEL_URL, INSTAGRAM_URL } from '../data/videos'
import { revealUp, staggerContainer, viewportOnce } from '../hooks/useScrollReveal'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-dark via-forest-dark to-forest py-20">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h2 variants={revealUp} className="font-display text-3xl font-bold text-white sm:text-4xl">
          Vamos transformar o futuro juntos?
        </motion.h2>
        <motion.p variants={revealUp} className="mx-auto mt-4 max-w-xl font-body text-white/80">
          Acompanhe nossas histórias, apoie a causa e conheça as empresas que estão reinventando a reciclagem no Brasil.
        </motion.p>
        <motion.div variants={revealUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-indigo-dark transition-transform hover:scale-105"
          >
            <FaYoutube size={20} className="text-red-600" /> Inscreva-se no YouTube
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FaInstagram size={18} /> @oficialplanetavivo
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
