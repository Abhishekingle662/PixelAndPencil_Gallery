import React from 'react';
import './HeroSection.scss';

const INDICATORS = ['3D Renders', 'Animations', 'Sketches', 'Unity', 'Unreal Engine'];

export default function HeroSection() {
  const scrollToContent = () => {
    document.getElementById('renders')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Portfolio hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid-overlay" />
        <div className="hero__particles">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className={`hero__particle hero__particle--${n}`} />
          ))}
        </div>
        <div className="hero__shapes">
          <div className="hero__shape hero__shape--hex" />
          <div className="hero__shape hero__shape--tri" />
          <div className="hero__shape hero__shape--rect" />
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__title-wrap">
          <h1 className="hero__title">
            <span className="hero__title-pixel">Pixel &amp; Pencil</span>
            <span className="hero__title-gallery">GALLERY</span>
          </h1>
          <p className="hero__subtitle">Digital Artistry &amp; Creative Innovation</p>
          <div className="hero__indicators" role="list" aria-label="Portfolio categories">
            {INDICATORS.map((label) => (
              <span key={label} className="hero__indicator" role="listitem">
                {label}
              </span>
            ))}
          </div>
        </div>

        <button className="hero__cta" onClick={scrollToContent} aria-label="Scroll to portfolio">
          Explore Portfolio
        </button>

        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
