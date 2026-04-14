import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Gallery.scss';
import { LazyImage } from './LazyMedia';

const Gallery = ({ items, masonry = false }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = useCallback((index) => {
    setExpandedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setExpandedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const handlePrev = useCallback(() => {
    setExpandedIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setExpandedIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (expandedIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expandedIndex, handleClose, handlePrev, handleNext]);

  const cdnBase = useMemo(() => process.env.REACT_APP_ASSET_BASE_URL || '', []);

  return (
    <>
      <div className={`gallery-grid${masonry ? ' gallery-grid--masonry' : ''}`}>
        {items.map((item, i) => (
          <div
            className="gallery-card"
            key={i}
            onClick={() => handleExpand(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title || `image ${i + 1}`}`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleExpand(i)}
            data-title={item.title || ''}
          >
            <LazyImage
              src={`${cdnBase}${item.src}`}
              fallback={item.fallback ? `${cdnBase}${item.fallback}` : undefined}
              alt={item.title || `Artwork ${i + 1}`}
              eager={i < 4}
            />
            {item.title && <div className="gallery-card__title">{item.title}</div>}
          </div>
        ))}
      </div>

      {expandedIndex !== null && (
        <div
          className="gallery-expanded-modal"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={items[expandedIndex]?.title || 'Image viewer'}
        >
          <div
            className="gallery-expanded-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-close-btn"
              onClick={handleClose}
              aria-label="Close image viewer"
            >
              ✕
            </button>

            <button
              className="gallery-nav-btn gallery-nav-btn--prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              ❮
            </button>

            <LazyImage
              src={`${cdnBase}${items[expandedIndex].src}`}
              fallback={items[expandedIndex].fallback ? `${cdnBase}${items[expandedIndex].fallback}` : undefined}
              alt={items[expandedIndex].title || `Artwork ${expandedIndex + 1}`}
              className="gallery-expanded-image"
              eager
            />

            <button
              className="gallery-nav-btn gallery-nav-btn--next"
              onClick={handleNext}
              aria-label="Next image"
            >
              ❯
            </button>

            {items[expandedIndex].title && (
              <div className="gallery-expanded-title">{items[expandedIndex].title}</div>
            )}
            <div className="gallery-expanded-counter">
              {expandedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
