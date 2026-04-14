/**
 * Central media data for Pixel & Pencil Gallery.
 * Each entry uses .webp as the primary src with a .png/.jpg fallback.
 * To add new items, append to the relevant array — no component changes needed.
 *
 * Video poster frames for LFS-tracked files must be generated locally:
 *   ffmpeg -i <video.mp4> -ss 00:00:01 -vframes 1 -vf "scale=640:-1" <video-poster.jpg>
 */

export const renders = [
  { src: '/assets/images/island.webp',          fallback: '/assets/images/island.png',          title: 'Island Scene',         tags: ['environment', 'cycles'] },
  { src: '/assets/images/cloth.webp',           fallback: '/assets/images/cloth.png',           title: 'Cloth Simulation',     tags: ['simulation', 'cycles'] },
  { src: '/assets/images/donut.webp',           fallback: '/assets/images/donut.png',           title: 'Donut Render',         tags: ['beginner', 'cycles'] },
  { src: '/assets/images/planet.webp',          fallback: '/assets/images/planet.png',          title: 'Planet Render',        tags: ['environment', 'eevee'] },
  { src: '/assets/images/fire+smoke.webp',      fallback: '/assets/images/fire+smoke.png',      title: 'Fire & Smoke',         tags: ['vfx', 'simulation'] },
  { src: '/assets/images/fluid.webp',           fallback: '/assets/images/fluid.png',           title: 'Fluid Simulation',     tags: ['simulation', 'cycles'] },
  { src: '/assets/images/gradient fire.webp',   fallback: '/assets/images/gradient fire.png',   title: 'Gradient Fire',        tags: ['vfx', 'eevee'] },
  { src: '/assets/images/gradient fire1.webp',  fallback: '/assets/images/gradient fire1.png',  title: 'Gradient Fire II',     tags: ['vfx', 'eevee'] },
  { src: '/assets/images/gradient fire2.webp',  fallback: '/assets/images/gradient fire2.png',  title: 'Gradient Fire III',    tags: ['vfx', 'eevee'] },
  { src: '/assets/images/gradient fire5.webp',  fallback: '/assets/images/gradient fire5.png',  title: 'Gradient Fire IV',     tags: ['vfx', 'eevee'] },
  { src: '/assets/images/mounatin.webp',        fallback: '/assets/images/mounatin.png',        title: 'Mountain Landscape',   tags: ['environment', 'cycles'] },
  { src: '/assets/images/sd.webp',              fallback: '/assets/images/sd.png',              title: 'Scene Design',         tags: ['environment'] },
  { src: '/assets/images/sdfff.webp',           fallback: '/assets/images/sdfff.png',           title: 'Abstract Scene',       tags: ['abstract'] },
  { src: '/assets/images/ff.webp',              fallback: '/assets/images/ff.png',              title: 'Fire Effect',          tags: ['vfx'] },
  { src: '/assets/images/fg.webp',              fallback: '/assets/images/fg.png',              title: 'Gradient Study',       tags: ['abstract'] },
  { src: '/assets/images/dasd.webp',            fallback: '/assets/images/dasd.png',            title: 'Abstract Design',      tags: ['abstract'] },
  { src: '/assets/images/untited.webp',         fallback: '/assets/images/untited.png',         title: 'Untitled Render',      tags: ['experimental'] },
  { src: '/assets/images/untitled.webp',        fallback: '/assets/images/untitled.png',        title: 'Untitled Design',      tags: ['experimental'] },
  { src: '/assets/images/untitlesdfsfd.webp',   fallback: '/assets/images/untitlesdfsfd.png',   title: 'Creative Study',       tags: ['experimental'] },
  { src: '/assets/images/untitlsdfed.webp',     fallback: '/assets/images/untitlsdfed.png',     title: 'Experimental Render',  tags: ['experimental'] },
  { src: '/assets/images/untitvbled.webp',      fallback: '/assets/images/untitvbled.png',      title: 'Artistic Creation',    tags: ['experimental'] },
];

// Video poster paths are pre-generated for local files.
// For LFS-tracked files, run: ffmpeg -i <src> -ss 1 -vframes 1 -vf scale=640:-1 <poster>
export const animations = [
  { src: '/assets/Animation/looping animation.mp4',              poster: null, title: 'Looping Animation',       category: 'motion' },
  { src: '/assets/Animation/fish0001-0080.mp4',                  poster: null, title: 'Fish Animation',          category: 'character' },
  { src: '/assets/Animation/cube/cube.mp4',                      poster: null, title: 'Cube Animation',          category: 'motion' },
  { src: '/assets/Animation/Cloth/Cloth simulation cycles.mp4',  poster: null, title: 'Cloth Simulation Cycles', category: 'simulation' },
  { src: '/assets/Animation/Cloth/Cloth simulation evee.mp4',    poster: null, title: 'Cloth Simulation Eevee',  category: 'simulation' },
  { src: '/assets/Animation/Fire/fire animationnn0001-0150.mp4', poster: null, title: 'Fire Animation',          category: 'vfx' },
  { src: '/assets/Animation/Fire/fire.mp4',                      poster: null, title: 'Fire Effect',             category: 'vfx' },
  { src: '/assets/Animation/Fire/gradient __fire0001-0100.mp4',  poster: null, title: 'Gradient Fire',           category: 'vfx' },
  { src: '/assets/Animation/Fluid/Fluid simulation.mp4',         poster: null, title: 'Fluid Simulation',        category: 'simulation' },
  { src: '/assets/Animation/Fluid/Fluidd0001-0150.mp4',          poster: null, title: 'Advanced Fluid',          category: 'simulation' },
  { src: '/assets/Animation/New Folder/01.mp4',                  poster: null, title: 'New Animation',           category: 'motion' },
  { src: '/assets/Animation/rings.mp4',                          poster: null, title: 'Rings Animation',         category: 'motion' },
  { src: '/assets/Animation/Smoke/fire_smoke2.mp4',              poster: null, title: 'Fire & Smoke',            category: 'vfx' },
  { src: '/assets/Animation/Smoke/smokeFire.mp4',                poster: null, title: 'Smoke Fire',              category: 'vfx' },
  { src: '/assets/Animation/Smoke/0001-0120.mp4',                poster: null, title: 'Smoke Study',             category: 'vfx' },
  // Converted from .mkv — real files available locally
  { src: '/assets/Animation/floating_cube.mp4',  poster: '/assets/Animation/floating_cube-poster.jpg', title: 'Floating Cube', category: 'motion' },
  { src: '/assets/Animation/random.mp4',         poster: '/assets/Animation/random-poster.jpg',        title: 'Random Study',  category: 'experimental' },
];

export const sketches = [
  { src: '/assets/sketches/1.webp',  fallback: '/assets/sketches/1.png',  title: 'Sketch 1' },
  { src: '/assets/sketches/2.webp',  fallback: '/assets/sketches/2.png',  title: 'Sketch 2' },
  { src: '/assets/sketches/3.webp',  fallback: '/assets/sketches/3.jpg',  title: 'Sketch 3' },
  { src: '/assets/sketches/4.webp',  fallback: '/assets/sketches/4.png',  title: 'Sketch 4' },
  { src: '/assets/sketches/5.webp',  fallback: '/assets/sketches/5.png',  title: 'Sketch 5' },
  { src: '/assets/sketches/6.webp',  fallback: '/assets/sketches/6.png',  title: 'Sketch 6' },
  { src: '/assets/sketches/7.webp',  fallback: '/assets/sketches/7.png',  title: 'Sketch 7' },
  { src: '/assets/sketches/8.webp',  fallback: '/assets/sketches/8.png',  title: 'Sketch 8' },
  { src: '/assets/sketches/9.webp',  fallback: '/assets/sketches/9.png',  title: 'Sketch 9' },
  { src: '/assets/sketches/10.webp', fallback: '/assets/sketches/10.png', title: 'Sketch 10' },
  { src: '/assets/sketches/11.webp', fallback: '/assets/sketches/11.png', title: 'Sketch 11' },
  { src: '/assets/sketches/12.webp', fallback: '/assets/sketches/12.png', title: 'Sketch 12' },
  { src: '/assets/sketches/13.webp', fallback: '/assets/sketches/13.jpg', title: 'Sketch 13' },
  { src: '/assets/sketches/14.webp', fallback: '/assets/sketches/14.jpg', title: 'Sketch 14' },
  { src: '/assets/sketches/15.webp', fallback: '/assets/sketches/15.jpg', title: 'Sketch 15' },
  { src: '/assets/sketches/16.webp', fallback: '/assets/sketches/16.png', title: 'Sketch 16' },
  { src: '/assets/sketches/17.webp', fallback: '/assets/sketches/17.jpg', title: 'Sketch 17' },
  { src: '/assets/sketches/18.webp', fallback: '/assets/sketches/18.jpg', title: 'Sketch 18' },
  { src: '/assets/sketches/19.webp', fallback: '/assets/sketches/19.jpg', title: 'Sketch 19' },
  { src: '/assets/sketches/20.webp', fallback: '/assets/sketches/20.jpg', title: 'Sketch 20' },
  { src: '/assets/sketches/21.webp', fallback: '/assets/sketches/21.jpg', title: 'Sketch 21' },
  { src: '/assets/sketches/22.webp', fallback: '/assets/sketches/22.jpg', title: 'Sketch 22' },
  { src: '/assets/sketches/23.webp', fallback: '/assets/sketches/23.jpg', title: 'Sketch 23' },
  { src: '/assets/sketches/24.webp', fallback: '/assets/sketches/24.jpg', title: 'Sketch 24' },
  { src: '/assets/sketches/25.webp', fallback: '/assets/sketches/25.jpg', title: 'Sketch 25' },
  { src: '/assets/sketches/26.webp', fallback: '/assets/sketches/26.jpg', title: 'Sketch 26' },
  { src: '/assets/sketches/27.webp', fallback: '/assets/sketches/27.jpg', title: 'Sketch 27' },
  { src: '/assets/sketches/28.webp', fallback: '/assets/sketches/28.jpg', title: 'Sketch 28' },
  { src: '/assets/sketches/29.webp', fallback: '/assets/sketches/29.jpg', title: 'Sketch 29' },
  { src: '/assets/sketches/30.webp', fallback: '/assets/sketches/30.jpg', title: 'Sketch 30' },
  { src: '/assets/sketches/31.webp', fallback: '/assets/sketches/31.jpg', title: 'Sketch 31' },
  { src: '/assets/sketches/32.webp', fallback: '/assets/sketches/32.jpg', title: 'Sketch 32' },
];

export const unityProjects = [
  {
    title: 'WebGL Interactive Game',
    description: 'Interactive game built with Unity Engine, playable directly in the browser via WebGL.',
    embedUrl: 'https://play.unity.com/webgl/104514da-7c35-4b2a-9d8c-d5b976362369?screenshot=false&embedType=embed',
    thumbnail: '/assets/images/unity.webp',
    fallbackThumbnail: '/assets/images/unity.png',
    tags: ['WebGL', 'C#', 'Unity'],
    status: 'live',
  },
];

export const unrealProjects = [
  {
    title: 'MetaHuman Character',
    description: 'Advanced character creation and animation using Unreal Engine 5 MetaHuman Creator.',
    videoSrc: '/assets/metahuman.mp4',
    // Generate poster locally: ffmpeg -i assets/metahuman.mp4 -ss 1 -vframes 1 -vf scale=640:-1 assets/metahuman-poster.jpg
    poster: null,
    status: 'in-progress',
    progress: 40,
    tags: ['UE5', 'MetaHuman', 'Character Animation'],
  },
];
