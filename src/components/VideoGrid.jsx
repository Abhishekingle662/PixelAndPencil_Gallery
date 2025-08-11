import React, { useMemo, useState, useCallback } from 'react';
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

  if (!items || items.length === 0) {
    return <div className="video-grid-empty">No videos to display</div>;
  }

  return (
    <>
      <div className="video-grid">
        {items.map((item, index) => (
          <div className="video-card" key={index} onClick={() => openModal(index)}>
            <div className="video-aspect">
              <LazyVideo
                sources={[{ src: `${cdnBase}${item.src || item}`, type: 'video/mp4' }]}
                preload="metadata"
              />
              <div className="video-overlay">
                <button className="video-play-btn" aria-label="Play video">▶</button>
                {item.title && <div className="video-title">{item.title}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {expandedIndex !== null && (
        <div className="video-modal" onClick={(e) => e.target.classList.contains('video-modal') && closeModal()}>
          <div className="video-modal-content">
            <button className="video-modal-close" onClick={closeModal} aria-label="Close">✕</button>
            <video
              className="video-modal-player"
              controls
              autoPlay
            >
              <source src={`${cdnBase}${items[expandedIndex]?.src || items[expandedIndex]}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {items[expandedIndex]?.title && (
              <div className="video-modal-title">{items[expandedIndex].title}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGrid;


