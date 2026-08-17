import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { CHANNEL_URL } from '../data/videos'

const LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    // Some mobile browsers restore the scroll position asynchronously after a
    // refresh, so the check above can run before that happens. Re-checking on
    // the next frame (and once more shortly after) keeps the navbar in sync
    // with the real scroll position instead of getting stuck transparent.
    const raf = requestAnimationFrame(onScroll)
    const timeout = window.setTimeout(onScroll, 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pageshow', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(timeout)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pageshow', onScroll)
    }
  }, [])

  const dark = scrolled || menuOpen

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        dark ? 'bg-cream/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Planeta Vivo" className="h-12 w-auto" />
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors ${
              dark ? 'text-indigo-dark' : 'text-white'
            }`}
          >
            PLANETA VIVO
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-base font-medium transition-colors hover:text-forest-light ${
                  dark ? 'text-indigo-dark' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-light sm:inline-flex"
          >
            Inscreva-se
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              dark ? 'text-indigo-dark' : 'text-white'
            }`}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-cream/98 backdrop-blur-sm lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-base font-medium text-indigo-dark"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white sm:hidden"
              >
                Inscreva-se
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
