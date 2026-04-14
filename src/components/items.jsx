import React, { Suspense, lazy } from 'react';
import './items.scss';
import HeroSection from './HeroSection';
import SectionBlock from './SectionBlock';
import Footer from './Footer';
import { renders, animations, sketches } from '../data/portfolio';

// Code-split heavy grid components — only loaded when their section is visible
const Gallery   = lazy(() => import('./Gallery'));
const VideoGrid = lazy(() => import('./VideoGrid'));
const UnitySection  = lazy(() => import('./UnitySection'));
const UnrealSection = lazy(() => import('./UnrealSection'));

function SectionSkeleton() {
  return (
    <div style={{ padding: '2rem 0', opacity: 0.4, textAlign: 'center', color: 'var(--text-muted)' }}>
      Loading…
    </div>
  );
}

export default function Items() {
  return (
    <div className="App">
      <HeroSection />

      <main>
        <SectionBlock
          id="renders"
          title="Blender 3D Renders"
          description="Photorealistic renders and artistic creations using Blender 3D"
          count={renders.length}
          className="renders-section"
        >
          <Suspense fallback={<SectionSkeleton />}>
            <Gallery items={renders} />
          </Suspense>
        </SectionBlock>

        <SectionBlock
          id="animations"
          title="Blender 3D Animations"
          description="Dynamic animations and simulations showcasing motion graphics"
          count={animations.length}
          className="animations-section"
        >
          <Suspense fallback={<SectionSkeleton />}>
            <VideoGrid items={animations} />
          </Suspense>
        </SectionBlock>

        <SectionBlock
          id="artwork"
          title="Traditional &amp; Digital Artwork"
          description="Hand-drawn sketches, digital paintings, and artistic explorations"
          count={sketches.length}
          className="artwork-section"
        >
          <Suspense fallback={<SectionSkeleton />}>
            <Gallery items={sketches} masonry />
          </Suspense>
        </SectionBlock>

        <Suspense fallback={<SectionSkeleton />}>
          <UnitySection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <UnrealSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
