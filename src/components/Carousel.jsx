import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Carousel.scss';

const Carousel = ({ items, type, title, showOverlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);

  // Debounced resize handler to prevent ResizeObserver loops
  const handleResize = useCallback(() => {
    // Clear any pending timeouts
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
      // Debounce resize events
    autoPlayRef.current = setTimeout(() => {
      // Force a reflow if needed
      if (carouselRef.current) {
        // Force reflow to prevent ResizeObserver loops
        void carouselRef.current.offsetHeight;
      }
    }, 16); // ~60fps
  }, []);

  // Add resize event listener with error boundary
  useEffect(() => {
    const handleResizeWithErrorBoundary = () => {
      try {
        handleResize();
      } catch (error) {
        console.warn('Resize handler error:', error);
      }
    };

    window.addEventListener('resize', handleResizeWithErrorBoundary, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResizeWithErrorBoundary);
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };  }, [handleResize]);

  // Preload adjacent images for faster navigation
  useEffect(() => {
    if (type === 'images' || type === 'videos') {
      const preloadNext = () => {
        const nextIndex = (currentIndex + 1) % items.length;
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        
        // Preload next and previous items
        [nextIndex, prevIndex].forEach(index => {
          if (type === 'images') {
            const img = new Image();
            img.src = items[index]?.src || items[index];
          }
        });
      };

      // Small delay to not interfere with current item loading
      const timeoutId = setTimeout(preloadNext, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, items, type]);
  // Auto-play functionality with improved cleanup
  useEffect(() => {
    if (!isAutoPlay || items.length <= 1 || isExpanded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isAutoPlay, items.length, isExpanded]);

  // Handle escape key for expanded view
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow || 'unset';
    }

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, [isExpanded]);  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay(!isAutoPlay);
  }, [isAutoPlay]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);  const renderItem = useCallback((item, index) => {
    switch (type) {
      case 'models':
        return (
          <div className="carousel-item model-item" key={index}>
            <div className="sketchfab-embed-wrapper">
              <iframe
                className="modelIframe"
                title={item.title}
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src={item.src}
                loading="lazy"
              />
            </div>
          </div>
        );

      case 'images':
        return (
          <div className="carousel-item image-item" key={index}>
            <div className="image-container" onClick={toggleExpanded}>
              <img 
                src={item.src || item} 
                alt={item.title || `Image ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={index === 0 ? "high" : "auto"}
              />
            </div>
          </div>
        );

      case 'videos':
        return (
          <div className="carousel-item video-item" key={index}>
            <div className="video-container">
              <video 
                controls 
                preload="metadata"
                onClick={toggleExpanded}
              >
                <source src={item.src || item} type="video/mp4" />
                <source src={item.src || item} type="video/webm" />
                <source src={item.src || item} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  }, [type, toggleExpanded]);if (!items || items.length === 0) {
    return <div className="carousel-empty">No items to display</div>;
  }return (
    <>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-header">
          <h2 className="carousel-title">{title}</h2>
          <div className="carousel-controls-top">
            <button 
              className="expand-btn"
              onClick={toggleExpanded}
              title="Expand view"
            >
              🔍
            </button>
            <button 
              className={`auto-play-btn ${isAutoPlay ? 'active' : ''}`}
              onClick={toggleAutoPlay}
            >
              {isAutoPlay ? '⏸️' : '▶️'}
            </button>
            <span className="item-counter">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={goToPrevious}>
            <span>❮</span>
          </button>

          <div className="carousel-track-container">            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {items.map((item, index) => renderItem(item, index))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={goToNext}>
            <span>❯</span>
          </button>
        </div>

        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="carousel-thumbnail-strip">
          {items.map((item, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              {type === 'images' && (
                <img src={item.src || item} alt={`Thumbnail ${index + 1}`} />
              )}
              {type === 'videos' && (
                <div className="video-thumbnail">
                  <video muted>
                    <source src={item.src || item} type="video/mp4" />
                  </video>
                  <div className="play-icon">▶️</div>
                </div>
              )}
              {type === 'models' && (
                <div className="model-thumbnail">
                  <div className="model-icon">🎮</div>
                  <span>{item.title}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expanded View Modal */}
      {isExpanded && (
        <div className="expanded-modal" onClick={(e) => e.target.className === 'expanded-modal' && setIsExpanded(false)}>
          <div className="expanded-content">
            <button className="close-btn" onClick={() => setIsExpanded(false)}>
              ✕
            </button>
            
            <div className="expanded-navigation">
              <button 
                className="expanded-nav-btn prev" 
                onClick={goToPrevious}
                disabled={items.length <= 1}
              >
                ❮
              </button>
              
              <div className="expanded-item">
                {type === 'images' && (
                  <img 
                    src={items[currentIndex]?.src || items[currentIndex]} 
                    alt={items[currentIndex]?.title || `Image ${currentIndex + 1}`}
                    className="expanded-image"
                  />
                )}
                {type === 'videos' && (
                  <video 
                    controls 
                    className="expanded-video"
                    poster={items[currentIndex]?.poster}
                  >
                    <source src={items[currentIndex]?.src || items[currentIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              <button 
                className="expanded-nav-btn next" 
                onClick={goToNext}
                disabled={items.length <= 1}
              >
                ❯
              </button>
            </div>
            
            <div className="expanded-info">
              <span className="expanded-counter">
                {currentIndex + 1} / {items.length}
              </span>
              {showOverlay && items[currentIndex]?.title && (
                <h3 className="expanded-title">{items[currentIndex].title}</h3>
              )}
            </div>
            
            <div className="expanded-thumbnails">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`expanded-thumbnail ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  {type === 'images' && (
                    <img src={item.src || item} alt={`Thumbnail ${index + 1}`} />
                  )}
                  {type === 'videos' && (
                    <div className="video-thumbnail-small">
                      <video muted>
                        <source src={item.src || item} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
