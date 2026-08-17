import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaPlay, FaInstagram } from 'react-icons/fa'
import { CHANNEL_URL, HERO_VIDEO_ID, INSTAGRAM_URL } from '../data/videos'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <section id="top" ref={ref} className="relative h-screen w-full overflow-hidden bg-forest-dark">
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] w-full">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[130vh] w-[230vw] -translate-x-1/2 -translate-y-1/2 md:h-[80vh] md:w-[142vh]"
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${HERO_VIDEO_ID}`}
          title="Planeta Vivo"
          allow="autoplay; encrypted-media"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/55 via-forest-dark/25 to-forest-dark/65" />

      {/* Extra opaque strip at the very top: hides the YouTube player's native
          title/channel overlay that briefly flashes on autoplay, especially
          right after a page refresh on mobile. */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forest-dark/95 via-forest-dark/60 to-transparent sm:h-36" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-white"
        >
          Desde 1998 · Economia Circular &amp; Sustentabilidade
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl"
        >
          Transformando vidas de modo sustentável
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-2xl font-body text-lg text-white/80"
        >
          Contamos histórias reais de reciclagem, economia circular e ESG — direto da fábrica até a tela.
          Acompanhe o podcast Planeta Ao Vivo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-white shadow-lg shadow-forest/30 transition-transform hover:scale-105 hover:bg-forest-light"
          >
            <FaPlay size={14} /> Assistir no YouTube
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FaInstagram size={18} /> Seguir no Instagram
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1">
          <div className="h-2 w-1 rounded-full bg-white/80" />
        </div>
      </motion.div>
    </section>
  )
}
