import { useMemo, useState } from 'react'
import type { MediaItem } from '../data/portfolio'
import { asset } from '../data/portfolio'
import Lightbox from './Lightbox'

type Props = {
  items: MediaItem[]
  masonry?: boolean
  filterable?: boolean
}

export default function GalleryGrid({ items, masonry, filterable }: Props) {
  const tags = useMemo(() => {
    const set = new Set<string>()
    items.forEach((i) => i.tags?.forEach((t) => set.add(t)))
    return ['all', ...Array.from(set)]
  }, [items])

  const [tag, setTag] = useState('all')
  const [open, setOpen] = useState<number | null>(null)

  const visible = tag === 'all' ? items : items.filter((i) => i.tags?.includes(tag))

  return (
    <>
      {filterable && tags.length > 2 && (
        <div className="filters" role="tablist">
          {tags.map((t) => (
            <button
              key={t}
              className={`filter${tag === t ? ' active' : ''}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className={masonry ? 'masonry' : 'grid'}>
        {visible.map((item, i) => (
          <article
            key={`${item.src}-${i}`}
            className="card"
            onClick={() => setOpen(i)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(i)}
            role="button"
            tabIndex={0}
          >
            <img
              src={asset(item.src)}
              alt={item.title}
              loading={i < 6 ? 'eager' : 'lazy'}
              decoding="async"
              onError={(e) => {
                if (item.fallback) e.currentTarget.src = asset(item.fallback)
              }}
            />
            <div className="card-meta">
              <span>{item.title}</span>
              {item.tags?.[0] && <em className="tag">{item.tags[0]}</em>}
            </div>
          </article>
        ))}
      </div>
      {open !== null && (
        <Lightbox items={visible} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      )}
    </>
  )
}
