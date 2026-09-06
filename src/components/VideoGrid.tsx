import { useState } from 'react'
import type { MediaItem } from '../data/portfolio'
import { asset } from '../data/portfolio'
import Lightbox from './Lightbox'

export default function VideoGrid({ items }: { items: MediaItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <div className="grid">
        {items.map((item, i) => (
          <article
            key={item.src}
            className="card"
            onClick={() => setOpen(i)}
            role="button"
            tabIndex={0}
          >
            <video
              src={asset(item.src)}
              poster={item.poster ? asset(item.poster) : undefined}
              muted
              playsInline
              preload="none"
              onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
              onMouseLeave={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            />
            <div className="card-meta">
              <span>{item.title}</span>
              {item.category && <em className="tag">{item.category}</em>}
            </div>
          </article>
        ))}
      </div>
      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          kind="video"
          onClose={() => setOpen(null)}
          onIndex={setOpen}
        />
      )}
    </>
  )
}
