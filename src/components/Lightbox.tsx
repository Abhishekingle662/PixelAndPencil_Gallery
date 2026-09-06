import { useEffect } from 'react'
import type { MediaItem } from '../data/portfolio'
import { asset } from '../data/portfolio'

type Props = {
  items: MediaItem[]
  index: number
  kind?: 'image' | 'video'
  onClose: () => void
  onIndex: (n: number) => void
}

export default function Lightbox({ items, index, kind = 'image', onClose, onIndex }: Props) {
  const item = items[index]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') onIndex((index + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [index, items.length, onClose, onIndex])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lb-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button
        className="lb-nav prev"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation()
          onIndex((index - 1 + items.length) % items.length)
        }}
      >
        ‹
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        {kind === 'video' ? (
          <video src={asset(item.src)} poster={item.poster ? asset(item.poster) : undefined} controls autoPlay />
        ) : (
          <img src={asset(item.src)} alt={item.title} onError={(e) => {
            if (item.fallback) (e.currentTarget as HTMLImageElement).src = asset(item.fallback)
          }} />
        )}
      </div>
      <button
        className="lb-nav next"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation()
          onIndex((index + 1) % items.length)
        }}
      >
        ›
      </button>
      <div className="lb-caption">
        {item.title} · {index + 1} / {items.length}
      </div>
    </div>
  )
}
