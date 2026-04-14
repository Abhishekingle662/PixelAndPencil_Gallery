import React, { useState } from 'react';
import { unityProjects } from '../data/portfolio';
import SectionBlock from './SectionBlock';
import { LazyImage } from './LazyMedia';
import './EngineSection.scss';

export default function UnitySection() {
  const [activeEmbed, setActiveEmbed] = useState(null);

  if (!unityProjects.length) return null;

  return (
    <SectionBlock
      id="unity"
      title="Unity Projects"
      description="Interactive games and experiences built with Unity Engine"
      count={unityProjects.length}
      className="unity-section"
    >
      <div className="engine-grid">
        {unityProjects.map((project, i) => (
          <div key={i} className="engine-card">
            {activeEmbed === i ? (
              <div className="engine-card__embed">
                <iframe
                  title={project.title}
                  src={project.embedUrl}
                  allow="autoplay; fullscreen; vr"
                  allowFullScreen
                  loading="lazy"
                  className="engine-iframe"
                />
                <button
                  className="engine-card__close-embed"
                  onClick={() => setActiveEmbed(null)}
                  aria-label="Close embed"
                >
                  ✕ Close
                </button>
              </div>
            ) : (
              <div
                className="engine-card__preview"
                onClick={() => setActiveEmbed(i)}
                role="button"
                tabIndex={0}
                aria-label={`Launch ${project.title}`}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveEmbed(i)}
              >
                <LazyImage
                  src={project.thumbnail}
                  fallback={project.fallbackThumbnail}
                  alt={`${project.title} thumbnail`}
                  eager
                />
                <div className="engine-card__play-overlay" aria-hidden="true">
                  <div className="engine-card__play-icon">▶</div>
                  <span>Launch Game</span>
                </div>
              </div>
            )}

            <div className="engine-card__info">
              <div className="engine-card__engine-badge engine-card__engine-badge--unity">
                Unity
              </div>
              <h3 className="engine-card__title">{project.title}</h3>
              <p className="engine-card__desc">{project.description}</p>
              <div className="engine-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="engine-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
