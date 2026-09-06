import GalleryGrid from './components/GalleryGrid'
import VideoGrid from './components/VideoGrid'
import { animations, asset, renders, sketches, unityProjects, unrealProjects } from './data/portfolio'

const NAV = [
  ['#renders', '3D Renders'],
  ['#animations', 'Animations'],
  ['#artwork', 'Artwork'],
  ['#unity', 'Unity'],
  ['#unreal', 'Unreal'],
] as const

export default function App() {
  const unity = unityProjects[0]
  const unreal = unrealProjects[0]

  return (
    <div className="app">
      <header className="nav">
        <a className="brand" href="#top">
          <b>P&P</b>
          <span>Gallery</span>
        </a>
        <nav className="nav-links">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="kicker">Digital artistry</div>
          <h1>
            Pixel & Pencil
            <em>GALLERY</em>
          </h1>
          <p className="sub">Blender · Sketch · Unity · Unreal</p>
          <div className="chips">
            {NAV.map(([href, label]) => (
              <a key={href} className="chip" href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="cta" href="#renders">
            Explore portfolio
          </a>
        </div>
      </section>

      <section className="section" id="renders">
        <div className="section-head">
          <div>
            <h2>Blender 3D renders</h2>
            <p>Environments, simulations, and lighting studies in Cycles and Eevee.</p>
          </div>
          <div className="count">{renders.length} works</div>
        </div>
        <GalleryGrid items={renders} filterable />
      </section>

      <section className="section" id="animations">
        <div className="section-head">
          <div>
            <h2>Motion & simulation</h2>
            <p>Hover a card to preview. Open for full playback.</p>
          </div>
          <div className="count">{animations.length} clips</div>
        </div>
        <VideoGrid items={animations} />
      </section>

      <section className="section" id="artwork">
        <div className="section-head">
          <div>
            <h2>Pencil & digital sketches</h2>
            <p>Figure studies and portraits — masonry layout so the paper grain stays visible.</p>
          </div>
          <div className="count">{sketches.length} pages</div>
        </div>
        <GalleryGrid items={sketches} masonry />
      </section>

      <section className="section" id="unity">
        <div className="section-head">
          <div>
            <h2>Unity</h2>
            <p>{unity.description}</p>
          </div>
          <div className="count">{unity.status}</div>
        </div>
        <div className="engine">
          <iframe title={unity.title} src={unity.embedUrl} loading="lazy" allowFullScreen />
          <div>
            <h3>{unity.title}</h3>
            <p>{unity.tags.join(' · ')}</p>
            <span className="status">Playable in browser</span>
            {unity.thumbnail && (
              <img
                src={asset(unity.thumbnail)}
                alt=""
                style={{ marginTop: '1rem', borderRadius: 12 }}
                onError={(e) => {
                  if (unity.fallbackThumbnail) e.currentTarget.src = asset(unity.fallbackThumbnail)
                }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="section" id="unreal">
        <div className="section-head">
          <div>
            <h2>Unreal Engine</h2>
            <p>{unreal.description}</p>
          </div>
          <div className="count">{unreal.status}</div>
        </div>
        <div className="engine">
          {unreal.videoSrc ? (
            <video src={asset(unreal.videoSrc)} controls preload="metadata" />
          ) : null}
          <div>
            <h3>{unreal.title}</h3>
            <p>{unreal.tags.join(' · ')}</p>
            <span className="status">In progress · {unreal.progress}%</span>
            <div className="bar" aria-hidden>
              <i />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Pixel & Pencil Gallery · Abhishek Ingle</div>
        <div>
          <a href="https://github.com/Abhishekingle662" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.abhishekingle.us" target="_blank" rel="noreferrer">
            Site
          </a>
          <a href="https://www.linkedin.com/in/abhishek-ingle" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}
