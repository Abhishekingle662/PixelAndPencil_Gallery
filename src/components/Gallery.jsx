import React, { useState } from 'react';
import './Gallery.scss';

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

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <div className="gallery-card" key={i} onClick={() => handleExpand(i)}>
            <img src={item.src} alt={item.title || `Artwork ${i+1}`} />
          </div>
        ))}
      </div>
      {expandedIndex !== null && (
        <div className="gallery-expanded-modal" onClick={handleClose}>
          <div className="gallery-expanded-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-close-btn" onClick={handleClose}>✕</button>
            <img src={items[expandedIndex].src} alt={items[expandedIndex].title || `Artwork ${expandedIndex+1}`} className="gallery-expanded-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
