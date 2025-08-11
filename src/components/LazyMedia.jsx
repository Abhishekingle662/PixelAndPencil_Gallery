import React, { useEffect, useRef, useState } from 'react';

// Simple IntersectionObserver hook
function useIntersectionObserver(options) {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { targetRef, isIntersecting };
}

export function LazyImage({
  src,
  alt,
  className,
  sizes = '(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw',
  eager = false,
  onClick,
  style,
}) {
  const { targetRef, isIntersecting } = useIntersectionObserver({ rootMargin: '200px' });
  const [hasLoaded, setHasLoaded] = useState(false);

  const shouldLoad = eager || isIntersecting;

  return (
    <div
      ref={targetRef}
      className={`lazy-media-wrapper ${hasLoaded ? 'loaded' : ''}`}
      style={style}
      onClick={onClick}
    >
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={() => setHasLoaded(true)}
        />
      ) : (
        <div className="lazy-skeleton" />
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
  const { targetRef, isIntersecting } = useIntersectionObserver({ rootMargin: '400px' });
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
          poster={poster}
        >
          {sources.map((s, i) => (
            <source key={i} src={s.src} type={s.type} />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="lazy-skeleton" />
      )}
    </div>
  );
}

export default { LazyImage, LazyVideo };


