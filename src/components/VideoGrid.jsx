import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './VideoGrid.scss';
import { LazyVideo } from './LazyMedia';

const VideoGrid = ({ items = [] }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cdnBase = useMemo(() => process.env.REACT_APP_ASSET_BASE_URL || '', []);

  const openModal = useCallback((index) => {
    setExpandedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setExpandedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const handlePrev = useCallback(() => {
    setExpandedIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setExpandedIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (expandedIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expandedIndex, closeModal, handlePrev, handleNext]);

  if (!items.length) {
    return <div className="video-grid-empty">No videos to display</div>;
  }

  return (
    <>
      <div className="video-grid">
        {items.map((item, index) => (
          <div
            className="video-card"
            key={index}
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            aria-label={`Play ${item.title || `video ${index + 1}`}`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(index)}
          >
            <div className="video-aspect">
              <LazyVideo
                sources={[{ src: `${cdnBase}${item.src || item}`, type: 'video/mp4' }]}
                poster={item.poster ? `${cdnBase}${item.poster}` : undefined}
                preload="metadata"
              />
              <div className="video-overlay" aria-hidden="true">
                <div className="video-play-btn">▶</div>
                {item.title && <div className="video-title">{item.title}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {expandedIndex !== null && (
        <div
          className="video-modal"
          onClick={(e) => e.target.classList.contains('video-modal') && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label={items[expandedIndex]?.title || 'Video player'}
        >
          <div className="video-modal-content">
            <button
              className="video-modal-close"
              onClick={closeModal}
              aria-label="Close video player"
            >
              ✕
            </button>

            <button
              className="video-modal-nav video-modal-nav--prev"
              onClick={handlePrev}
              aria-label="Previous video"
            >
              ❮
            </button>

            <video
              className="video-modal-player"
              controls
              autoPlay
              key={expandedIndex}
              poster={items[expandedIndex]?.poster ? `${cdnBase}${items[expandedIndex].poster}` : undefined}
            >
              <source
                src={`${cdnBase}${items[expandedIndex]?.src || items[expandedIndex]}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <button
              className="video-modal-nav video-modal-nav--next"
              onClick={handleNext}
              aria-label="Next video"
            >
              ❯
            </button>

            {items[expandedIndex]?.title && (
              <div className="video-modal-title">{items[expandedIndex].title}</div>
            )}
            <div className="video-modal-counter">
              {expandedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGrid;
