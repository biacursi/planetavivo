import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { CHANNEL_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../data/videos'
import { revealUp, staggerContainer, viewportOnce } from '../hooks/useScrollReveal'

const NAV_LINKS = [
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Contato', href: '#contato' },
]

const SOCIALS = [
  { label: 'YouTube', href: CHANNEL_URL, icon: FaYoutube, handle: '@projetoplanetavivo' },
  { label: 'Instagram', href: INSTAGRAM_URL, icon: FaInstagram, handle: '@oficialplanetavivo' },
  { label: 'LinkedIn', href: LINKEDIN_URL, icon: FaLinkedin, handle: 'Projeto Planeta Vivo' },
]

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-forest-dark pt-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-16 pb-16 md:grid-cols-[1.3fr_1fr_1fr]"
        >
          <motion.div variants={revealUp}>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Planeta Vivo" className="h-14 w-auto" />
              <span className="font-display text-xl font-bold">PLANETA VIVO</span>
            </div>
            <p className="mt-6 max-w-sm font-body leading-relaxed text-white/60">
              ONG sem fins lucrativos dedicada a disseminar consciência sobre o mercado de reciclagem no Brasil,
              transformando resíduo em valor desde 1998.
            </p>
            <p className="mt-6 font-body text-sm text-white/40">📍 Barueri, São Paulo — Brasil</p>
          </motion.div>

          <motion.div variants={revealUp}>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navegação
            </h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-block font-body text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-indigo-light transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={revealUp}>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              Redes sociais
            </h3>
            <ul className="mt-6 space-y-4">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-light group-hover:bg-indigo-light group-hover:text-white">
                      <social.icon size={18} />
                    </span>
                    <span className="font-body text-sm text-white/70 transition-colors group-hover:text-white">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="select-none overflow-hidden border-t border-white/10 py-6">
        <div className="whitespace-nowrap text-center font-display font-extrabold leading-none tracking-tight text-white/5 text-[clamp(3.5rem,16vw,13rem)]">
          PLANETA VIVO
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/40 sm:flex-row">
          <p>© 2026 Projeto Planeta Vivo. Todos os direitos reservados.</p>
          <p>
            Feito com ♥ por{' '}
            <a
              href="https://br.linkedin.com/in/bianca-marcelino-cursii?trk=people-guest_people_search-card"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
            >
              Bianca Cursi
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
