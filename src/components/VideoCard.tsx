import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import type { VideoItem } from '../data/videos'
import { youtubeThumbnail } from '../data/videos'
import { revealUp } from '../hooks/useScrollReveal'

interface VideoCardProps {
  video: VideoItem
  onPlay: (video: VideoItem) => void
  featured?: boolean
}

export default function VideoCard({ video, onPlay, featured = false }: VideoCardProps) {
  return (
    <motion.button
      type="button"
      variants={revealUp}
      whileHover={{ y: -6 }}
      onClick={() => onPlay(video)}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-indigo-dark text-left shadow-lg ${
        featured ? 'aspect-video' : 'aspect-[9/13]'
      }`}
    >
      <img
        src={youtubeThumbnail(video.id)}
        alt={video.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/90 text-white shadow-lg backdrop-blur-sm">
          <FaPlay size={20} />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        {video.kind === 'episode' && (
          <span className="mb-2 inline-block rounded-full bg-forest-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Planeta Ao Vivo
          </span>
        )}
        <h3 className={`font-display font-bold text-white ${featured ? 'text-lg' : 'text-sm'}`}>{video.title}</h3>
        <p className="mt-1 font-body text-xs text-white/60">{video.views.toLocaleString('pt-BR')} visualizações</p>
      </div>
    </motion.button>
  )
}
