export const ASSET_BASE =
  (import.meta.env.VITE_ASSET_BASE as string | undefined) ??
  'https://pixel-and-pencil-gallery.vercel.app'

export type MediaItem = {
  src: string
  fallback?: string
  poster?: string | null
  title: string
  tags?: string[]
  category?: string
}

export type EngineProject = {
  title: string
  description: string
  tags: string[]
  status: 'live' | 'in-progress'
  embedUrl?: string
  thumbnail?: string
  fallbackThumbnail?: string
  videoSrc?: string
  poster?: string | null
  progress?: number
}

export const renders: MediaItem[] = [
  { src: '/assets/images/island.webp', fallback: '/assets/images/island.png', title: 'Island Scene', tags: ['environment', 'cycles'] },
  { src: '/assets/images/cloth.webp', fallback: '/assets/images/cloth.png', title: 'Cloth Simulation', tags: ['simulation', 'cycles'] },
  { src: '/assets/images/donut.webp', fallback: '/assets/images/donut.png', title: 'Donut Render', tags: ['beginner', 'cycles'] },
  { src: '/assets/images/planet.webp', fallback: '/assets/images/planet.png', title: 'Planet Render', tags: ['environment', 'eevee'] },
  { src: '/assets/images/fire+smoke.webp', fallback: '/assets/images/fire+smoke.png', title: 'Fire & Smoke', tags: ['vfx', 'simulation'] },
  { src: '/assets/images/fluid.webp', fallback: '/assets/images/fluid.png', title: 'Fluid Simulation', tags: ['simulation', 'cycles'] },
  { src: '/assets/images/gradient fire.webp', fallback: '/assets/images/gradient fire.png', title: 'Gradient Fire', tags: ['vfx', 'eevee'] },
  { src: '/assets/images/gradient fire1.webp', fallback: '/assets/images/gradient fire1.png', title: 'Gradient Fire II', tags: ['vfx', 'eevee'] },
  { src: '/assets/images/gradient fire2.webp', fallback: '/assets/images/gradient fire2.png', title: 'Gradient Fire III', tags: ['vfx', 'eevee'] },
  { src: '/assets/images/gradient fire5.webp', fallback: '/assets/images/gradient fire5.png', title: 'Gradient Fire IV', tags: ['vfx', 'eevee'] },
  { src: '/assets/images/mounatin.webp', fallback: '/assets/images/mounatin.png', title: 'Mountain Landscape', tags: ['environment', 'cycles'] },
  { src: '/assets/images/sd.webp', fallback: '/assets/images/sd.png', title: 'Scene Design', tags: ['environment'] },
  { src: '/assets/images/sdfff.webp', fallback: '/assets/images/sdfff.png', title: 'Abstract Scene', tags: ['abstract'] },
  { src: '/assets/images/ff.webp', fallback: '/assets/images/ff.png', title: 'Fire Effect', tags: ['vfx'] },
  { src: '/assets/images/fg.webp', fallback: '/assets/images/fg.png', title: 'Gradient Study', tags: ['abstract'] },
  { src: '/assets/images/dasd.webp', fallback: '/assets/images/dasd.png', title: 'Abstract Design', tags: ['abstract'] },
  { src: '/assets/images/untited.webp', fallback: '/assets/images/untited.png', title: 'Untitled Render', tags: ['experimental'] },
  { src: '/assets/images/untitled.webp', fallback: '/assets/images/untitled.png', title: 'Untitled Design', tags: ['experimental'] },
  { src: '/assets/images/untitlesdfsfd.webp', fallback: '/assets/images/untitlesdfsfd.png', title: 'Creative Study', tags: ['experimental'] },
  { src: '/assets/images/untitlsdfed.webp', fallback: '/assets/images/untitlsdfed.png', title: 'Experimental Render', tags: ['experimental'] },
  { src: '/assets/images/untitvbled.webp', fallback: '/assets/images/untitvbled.png', title: 'Artistic Creation', tags: ['experimental'] },
]

export const animations: MediaItem[] = [
  { src: '/videos/looping animation.mp4', title: 'Looping Animation', category: 'motion' },
  { src: '/videos/fish0001-0080.mp4', title: 'Fish Animation', category: 'character' },
  { src: '/videos/Cloth simulation evee.mp4', title: 'Cloth Simulation Eevee', category: 'simulation' },
  { src: '/videos/fire animationnn0001-0150.mp4', title: 'Fire Animation', category: 'vfx' },
  { src: '/videos/gradient __fire0001-0100.mp4', title: 'Gradient Fire', category: 'vfx' },
  { src: '/videos/Fluid simulation.mp4', title: 'Fluid Simulation', category: 'simulation' },
  { src: '/videos/rings.mp4', title: 'Rings Animation', category: 'motion' },
  { src: '/videos/0001-0120.mp4', title: 'Smoke Study', category: 'vfx' },
  { src: '/videos/floating_cube.mp4', title: 'Floating Cube', category: 'motion' },
]

export const sketches: MediaItem[] = Array.from({ length: 32 }, (_, i) => {
  const n = i + 1
  const jpg = [3, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
  return {
    src: `/assets/sketches/${n}.webp`,
    fallback: `/assets/sketches/${n}.${jpg.includes(n) ? 'jpg' : 'png'}`,
    title: `Sketch ${n}`,
    tags: ['sketch'],
  }
})

export const unityProjects: EngineProject[] = [
  {
    title: 'WebGL Interactive Game',
    description: 'Interactive game built with Unity, playable in the browser via WebGL.',
    embedUrl: 'https://play.unity.com/webgl/104514da-7c35-4b2a-9d8c-d5b976362369?screenshot=false&embedType=embed',
    thumbnail: '/assets/images/unity.webp',
    fallbackThumbnail: '/assets/images/unity.png',
    tags: ['WebGL', 'C#', 'Unity'],
    status: 'live',
  },
]

export const unrealProjects: EngineProject[] = [
  {
    title: 'MetaHuman Character',
    description: 'Character creation and animation using Unreal Engine 5 MetaHuman Creator.',
    videoSrc: '/assets/metahuman.mp4',
    status: 'in-progress',
    progress: 40,
    tags: ['UE5', 'MetaHuman', 'Character'],
  },
]

export const asset = (path?: string | null) => {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('/videos/')) return encodeURI(path)
  return `${ASSET_BASE}${path}`
}
