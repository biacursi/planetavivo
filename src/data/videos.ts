export type VideoKind = 'episode' | 'short'

export interface VideoItem {
  id: string
  title: string
  kind: VideoKind
  views: number
  description: string
}

export const CHANNEL_URL = 'https://www.youtube.com/@projetoplanetavivo'
export const CHANNEL_ID = 'UCJEBtWE6luHxWmNCTbvL5IQ'
export const INSTAGRAM_URL = 'https://www.instagram.com/oficialplanetavivo/'
export const LINKEDIN_URL = 'https://br.linkedin.com/company/projetoplanetavivo'

export const HERO_VIDEO_ID = 'IWWMVXMm7uI'

export const videos: VideoItem[] = [
  {
    id: 'IWWMVXMm7uI',
    title: 'Por Dentro da Fábrica: O Futuro da Economia Circular no Plástico',
    kind: 'episode',
    views: 4185,
    description: 'Tour exclusivo pela Pirenópolis Indústria de Plásticos — inovação, produção e sustentabilidade.',
  },
  {
    id: 'VYn53VMWxGc',
    title: 'Polpel Fibras: a fábrica que recicla liner',
    kind: 'episode',
    views: 211,
    description: 'A única tecnologia da América do Sul capaz de reciclar papel liner, transformando resíduo em celulose.',
  },
  {
    id: 's-l64CUXBaI',
    title: 'Saúde, ESG e Economia Circular com o Grupo Amil',
    kind: 'episode',
    views: 166,
    description: 'Dr. Eduardo Morbin fala sobre ESG, economia circular e saúde como pilares estratégicos.',
  },
  {
    id: 'CBi3DloZOZk',
    title: 'Reciclando tecidos com a Momo Ambiental',
    kind: 'episode',
    views: 14,
    description: 'Como resíduos têxteis ganham nova vida na Momo Ambiental, em São Paulo.',
  },
  {
    id: 'RK5cZdgth-U',
    title: 'Como a sustentabilidade entrou na Motiva',
    kind: 'short',
    views: 631,
    description: 'Sustentabilidade como compromisso contínuo dentro da Concessionária Motiva.',
  },
  {
    id: 'ysQr28l0IUI',
    title: 'Sobre a Pirenópolis Plásticos',
    kind: 'short',
    views: 266,
    description: 'Como a logística reversa transforma plástico descartado em nova matéria-prima.',
  },
  {
    id: 'Co0ypJxxFEg',
    title: 'O segredo tóxico do papel adesivo',
    kind: 'short',
    views: 110,
    description: 'A tecnologia da Polpel Fibras que recupera fibras do papel liner siliconado.',
  },
  {
    id: 'VH6xHWJ8YG4',
    title: 'Campanha Polpel | SOS Figurinhas da Copa',
    kind: 'short',
    views: 131,
    description: 'Arrecadação de liners de figurinhas em prol do GRAACC.',
  },
  {
    id: 'Tc9eqqvgSpQ',
    title: 'Desafios da sustentabilidade na área da saúde',
    kind: 'short',
    views: 13,
    description: 'Planeta Vivo e Grupo Amil discutem ESG no setor hospitalar.',
  },
  {
    id: 'reS0iCGVYDw',
    title: 'Nasce o EcoCine',
    kind: 'short',
    views: 8,
    description: 'Sustentabilidade nas telonas: o primeiro episódio da nova série EcoCine.',
  },
]

export const episodes = videos.filter((v) => v.kind === 'episode')
export const shorts = videos.filter((v) => v.kind === 'short')

export const youtubeThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
export const youtubeWatchUrl = (id: string, kind: VideoKind) =>
  kind === 'short' ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`
