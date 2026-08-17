import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import type { VideoItem } from '../data/videos'

interface VideoModalProps {
  video: VideoItem | null
  onClose: () => void
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${
              video.kind === 'short' ? 'max-w-sm aspect-[9/16]' : 'max-w-4xl aspect-video'
            }`}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <FaTimes size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
