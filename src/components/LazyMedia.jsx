import React, { useEffect, useRef, useState } from 'react';

// Stable option objects — defined outside components to prevent
// useEffect re-runs caused by new object references on every render.
const IMAGE_IO_OPTIONS = { rootMargin: '200px' };
const VIDEO_IO_OPTIONS = { rootMargin: '400px' };

function useIntersectionObserver(options) {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { targetRef, isIntersecting };
}

export function LazyImage({
  src,
  fallback,
  alt,
  className,
  sizes = '(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw',
  eager = false,
  onClick,
  style,
}) {
  const { targetRef, isIntersecting } = useIntersectionObserver(IMAGE_IO_OPTIONS);
  const [hasLoaded, setHasLoaded] = useState(false);

  const shouldLoad = eager || isIntersecting;
  const webpSrc = src.endsWith('.webp') ? src : src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const fallbackSrc = fallback || src;

  return (
    <div
      ref={targetRef}
      className={`lazy-media-wrapper ${hasLoaded ? 'loaded' : ''}`}
      style={style}
      onClick={onClick}
    >
      {shouldLoad ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={fallbackSrc}
            alt={alt}
            className={className}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
            onLoad={() => setHasLoaded(true)}
          />
        </picture>
      ) : (
        <div className="lazy-skeleton" aria-hidden="true" />
      )}
    </div>
  );
}

export function LazyVideo({
  sources = [],
  poster,
  className,
  controls = true,
  preload = 'none',
  onClick,
  style,
}) {
  const { targetRef, isIntersecting } = useIntersectionObserver(VIDEO_IO_OPTIONS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (isIntersecting) setHydrated(true);
  }, [isIntersecting]);

  return (
    <div ref={targetRef} className="lazy-media-wrapper" style={style} onClick={onClick}>
      {hydrated ? (
        <video
          className={className}
          controls={controls}
          preload={preload}
          poster={poster || undefined}
        >
          {sources.map((s, i) => (
            <source key={i} src={s.src} type={s.type} />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="lazy-skeleton"
          aria-hidden="true"
          style={
            poster
              ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : undefined
          }
        />
      )}
    </div>
  );
}

const LazyMedia = { LazyImage, LazyVideo };
export default LazyMedia;
