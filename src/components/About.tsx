import { motion } from 'framer-motion'
import Counter from './Counter'
import { revealUp, staggerContainer, viewportOnce } from '../hooks/useScrollReveal'

const STATS = [
  { to: 1998, label: 'Ano de fundação', prefix: '' },
  { to: 27, label: 'Anos de atuação', suffix: '+' },
  { to: 100, label: 'Sem fins lucrativos', suffix: '%' },
]

export default function About() {
  return (
    <section id="sobre" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={revealUp}
            className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.25em] text-forest"
          >
            Sobre nós
          </motion.p>
          <motion.h2 variants={revealUp} className="font-display text-3xl font-bold text-indigo-dark sm:text-4xl">
            Uma ONG que transforma resíduo em valor — e valor em oportunidade
          </motion.h2>
          <motion.p variants={revealUp} className="mt-6 font-body leading-relaxed text-gray-700">
            O <strong>Projeto Planeta Vivo</strong> é uma organização sem fins lucrativos dedicada a disseminar
            consciência sobre o mercado de reciclagem no Brasil. Nosso trabalho é focado em ampliar a
            capacitação, a profissionalização e o desenvolvimento de catadores e outros agentes da cadeia de
            reciclagem.
          </motion.p>
          <motion.p variants={revealUp} className="mt-4 font-body leading-relaxed text-gray-700">
            Buscamos impulsionar o crescimento da sustentabilidade mudando a forma como a sociedade vê os
            resíduos — deixando de tratá-los como lixo para reconhecer seu valor ambiental e econômico. Contamos
            essas histórias, em vídeo, direto de dentro das fábricas e organizações que estão fazendo a diferença.
          </motion.p>

          <motion.div variants={revealUp} className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">📍 Barueri, São Paulo</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">🌱 Economia circular</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">♻️ Reciclagem &amp; ESG</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={revealUp}
              className="rounded-3xl bg-gradient-to-br from-indigo to-indigo-dark p-8 text-center text-white shadow-xl md:text-left"
            >
              <div className="font-display text-4xl font-extrabold text-forest-light sm:text-5xl">
                <Counter to={stat.to} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="mt-2 font-body text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
