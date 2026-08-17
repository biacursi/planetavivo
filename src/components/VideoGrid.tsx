import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaYoutube } from 'react-icons/fa'
import VideoCard from './VideoCard'
import VideoModal from './VideoModal'
import { CHANNEL_URL, episodes, shorts, type VideoItem } from '../data/videos'
import { revealUp, staggerContainer, viewportOnce } from '../hooks/useScrollReveal'

export default function VideoGrid() {
  const [active, setActive] = useState<VideoItem | null>(null)

  return (
    <section id="videos" className="bg-forest-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-14 text-center"
        >
          <motion.p
            variants={revealUp}
            className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-white"
          >
            Planeta Ao Vivo
          </motion.p>
          <motion.h2 variants={revealUp} className="font-display text-3xl font-bold text-white sm:text-4xl">
            Histórias reais de sustentabilidade, direto da fábrica
          </motion.h2>
          <motion.p variants={revealUp} className="mx-auto mt-4 max-w-2xl font-body text-white/60">
            Um recorte do nosso podcast e dos bastidores que mostramos no canal. Clique para assistir sem
            sair da página.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {episodes.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={setActive} featured />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6"
        >
          {shorts.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={setActive} />
          ))}
        </motion.div>

        <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-14 text-center">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FaYoutube size={20} className="text-red-500" /> Ver todos os vídeos no canal
          </a>
        </motion.div>
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  )
}
