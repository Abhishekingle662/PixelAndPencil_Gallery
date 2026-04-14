import React from 'react';
import { unrealProjects } from '../data/portfolio';
import SectionBlock from './SectionBlock';
import './EngineSection.scss';

export default function UnrealSection() {
  if (!unrealProjects.length) return null;

  return (
    <SectionBlock
      id="unreal"
      title="Unreal Engine Projects"
      description="Real-time environments and characters built with Unreal Engine 5"
      count={unrealProjects.length}
      className="unreal-section"
    >
      <div className="engine-grid">
        {unrealProjects.map((project, i) => (
          <div key={i} className={`engine-card ${project.status === 'in-progress' ? 'engine-card--wip' : ''}`}>
            {project.status === 'in-progress' && (
              <div className="engine-card__wip-banner" aria-label={`Work in progress — ${project.progress}% complete`}>
                <span className="engine-card__wip-label">Work in Progress</span>
                <div className="engine-card__progress-bar" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="engine-card__progress-fill"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="engine-card__progress-pct">{project.progress}%</span>
              </div>
            )}

            <div className="engine-card__video-wrap">
              <video
                src={project.videoSrc}
                poster={project.poster || undefined}
                controls
                preload="metadata"
                className="engine-card__video"
                aria-label={project.title}
              />
            </div>

            <div className="engine-card__info">
              <div className="engine-card__engine-badge engine-card__engine-badge--unreal">
                Unreal Engine 5
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
