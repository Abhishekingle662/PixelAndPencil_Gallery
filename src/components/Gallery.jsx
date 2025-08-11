import React, { useMemo, useState } from 'react';
import './Gallery.scss';
import { LazyImage } from './LazyMedia';

const Gallery = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setExpandedIndex(null);
    document.body.style.overflow = '';
  };

  const cdnBase = useMemo(() => process.env.REACT_APP_ASSET_BASE_URL || '', []);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <div className="gallery-card" key={i} onClick={() => handleExpand(i)}>
            <LazyImage
              src={`${cdnBase}${item.src}`}
              alt={item.title || `Artwork ${i + 1}`}
              eager={i < 4}
            />
          </div>
        ))}
      </div>
      {expandedIndex !== null && (
        <div className="gallery-expanded-modal" onClick={handleClose}>
          <div className="gallery-expanded-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-close-btn" onClick={handleClose}>✕</button>
            <img
              src={`${cdnBase}${items[expandedIndex].src}`}
              alt={items[expandedIndex].title || `Artwork ${expandedIndex + 1}`}
              className="gallery-expanded-image"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
