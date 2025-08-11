import React, { useEffect, useMemo, useState } from 'react';
import './items.scss';
import VideoGrid from './VideoGrid';
import Gallery from './Gallery';

export default function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [artwork, setArtwork] = useState([]);
  const [isImagesOpen, setIsImagesOpen] = useState(true);
  const [isVideosOpen, setIsVideosOpen] = useState(true);
  const [isArtworkOpen, setIsArtworkOpen] = useState(true);  useEffect(() => {
    // Only scroll to top if not a hash navigation or popstate
    if (window.location.hash === '' && window.history.state === null) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    loadImages();
    loadVideos();
    loadArtwork();
  }, []);

  const assetBase = useMemo(() => process.env.REACT_APP_ASSET_BASE_URL || '', []);

  const loadImages = () => {
    console.log('Loading Images...');
    const imageUrls = [
      { src: '/assets/images/island.png', title: 'Island Scene' },
      { src: '/assets/images/cloth.png', title: 'Cloth Simulation' },
      { src: '/assets/images/dasd.png', title: 'Abstract Design' },
      { src: '/assets/images/donut.png', title: 'Donut Render' },
      { src: '/assets/images/ff.png', title: 'Fire Effect' },
      { src: '/assets/images/fg.png', title: 'Gradient Study' },
      { src: '/assets/images/fire+smoke.png', title: 'Fire & Smoke' },
      { src: '/assets/images/fluid.png', title: 'Fluid Simulation' },
      { src: '/assets/images/gradient fire.png', title: 'Gradient Fire' },
      { src: '/assets/images/gradient fire1.png', title: 'Gradient Fire 1' },
      { src: '/assets/images/gradient fire2.png', title: 'Gradient Fire 2' },
      { src: '/assets/images/gradient fire5.png', title: 'Gradient Fire 5' },
      { src: '/assets/images/mounatin.png', title: 'Mountain Landscape' },
      { src: '/assets/images/planet.png', title: 'Planet Render' },
      { src: '/assets/images/sd.png', title: 'Scene Design' },
      { src: '/assets/images/sdfff.png', title: 'Abstract Scene' },
      { src: '/assets/images/untited.png', title: 'Untitled Render' },
      { src: '/assets/images/untitled.png', title: 'Untitled Design' },
      { src: '/assets/images/untitlesdfsfd.png', title: 'Creative Study' },
      { src: '/assets/images/untitlsdfed.png', title: 'Experimental Render' },
      { src: '/assets/images/untitvbled.png', title: 'Artistic Creation' }
    ];
    setImages(imageUrls);
  };

  const loadVideos = () => {
    console.log('Loading Videos...');
    const videoUrls = [
      { src: '/assets/Animation/looping animation.mp4', title: 'Looping Animation' },
      { src: '/assets/Animation/fish0001-0080.mp4', title: 'Fish Animation' },
      { src: '/assets/Animation/cube/cube.mp4', title: 'Cube Animation' },
      { src: '/assets/Animation/Cloth/Cloth simulation cycles.mp4', title: 'Cloth Simulation Cycles' },
      { src: '/assets/Animation/Cloth/Cloth simulation evee.mp4', title: 'Cloth Simulation Eevee' },
      { src: '/assets/Animation/Fire/fire animationnn0001-0150.mp4', title: 'Fire Animation' },
      { src: '/assets/Animation/Fire/fire.mp4', title: 'Fire Effect' },
      { src: '/assets/Animation/Fire/gradient __fire0001-0100.mp4', title: 'Gradient Fire' },
      { src: '/assets/Animation/Fluid/Fluid simulation.mp4', title: 'Fluid Simulation' },
      { src: '/assets/Animation/Fluid/Fluidd0001-0150.mp4', title: 'Advanced Fluid' },
      { src: '/assets/Animation/New Folder/01.mp4', title: 'New Animation' },
      { src: '/assets/Animation/rings.mp4', title: 'Rings Animation' },
      { src: '/assets/Animation/Smoke/fire_smoke2.mp4', title: 'Fire & Smoke 2' },
      { src: '/assets/Animation/Smoke/smokeFire.mp4', title: 'Smoke Fire' },
      { src: '/assets/Animation/Smoke/0001-0120.mp4', title: 'Smoke Study' },
      { src: '/assets/Animation/floating_cube.mkv', title: 'Floating Cube' }
    ];
    setVideos(videoUrls);
  };

  const loadArtwork = () => {
    console.log('Loading Artwork...');
    const artworkUrls = [
      { src: '/assets/sketches/1.png' },
      { src: '/assets/sketches/2.png' },
      { src: '/assets/sketches/3.jpg' }, // Note: both 3.jpg and 3.png exist, using .jpg
      { src: '/assets/sketches/4.png' },
      { src: '/assets/sketches/5.png' },
      { src: '/assets/sketches/6.png' },
      { src: '/assets/sketches/7.png' },
      { src: '/assets/sketches/8.png' },
      { src: '/assets/sketches/9.png' },
      { src: '/assets/sketches/10.png' },
      { src: '/assets/sketches/11.png' },
      { src: '/assets/sketches/12.png' },
      { src: '/assets/sketches/13.jpg' },
      { src: '/assets/sketches/14.jpg' },
      { src: '/assets/sketches/15.jpg' },
      { src: '/assets/sketches/16.png' },
      { src: '/assets/sketches/17.jpg' },
      { src: '/assets/sketches/18.jpg' },
      { src: '/assets/sketches/19.jpg' },
      { src: '/assets/sketches/20.jpg' },
      { src: '/assets/sketches/21.jpg' },
      { src: '/assets/sketches/22.jpg' },
      { src: '/assets/sketches/23.jpg' },
      { src: '/assets/sketches/24.jpg' },
      { src: '/assets/sketches/25.jpg' },
      { src: '/assets/sketches/26.jpg' },
      { src: '/assets/sketches/27.jpg' },
      { src: '/assets/sketches/28.jpg' },
      { src: '/assets/sketches/29.jpg' },
      { src: '/assets/sketches/30.jpg' },
      { src: '/assets/sketches/31.jpg' },
      { src: '/assets/sketches/32.jpg' }
    ];
    setArtwork(artworkUrls);
  };

  const handleImagesButtonClick = () => {
    setIsImagesOpen(!isImagesOpen);
  };
  const handleVideosButtonClick = () => {
    setIsVideosOpen(!isVideosOpen);
  };

  const handleArtworkButtonClick = () => {
    setIsArtworkOpen(!isArtworkOpen);
  };return (
    <div className="App">      {/* Hero Section - Dark Cyber Project Gallery */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="particle-field">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>
          <div className="geometric-shapes">
            <div className="shape hexagon"></div>
            <div className="shape triangle"></div>
            <div className="shape rectangle"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="title-container">
            <h1 className="main-title">
              <span className="title-word project">Pixel & Pencil</span>
              <span className="title-word gallery">GALLERY</span>
            </h1>
            <div className="subtitle">
              <p>Digital Artistry & Creative Innovation</p>
              <div className="tech-indicators">
                <div className="indicator">3D Renders</div>
                <div className="indicator">Animations</div>
                <div className="indicator">Visual Effects</div>
              </div>
            </div>
          </div>
          <div className="cta-container">
            <button className="explore-btn" onClick={() => {
              document.querySelector('.section-divider').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}>
              Explore Portfolio
            </button>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>
      
      {/* Renders Section */}
      <section className="content-section renders-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Blender 3D Renders</h2>
            <p className="section-description">Photorealistic renders and artistic creations using Blender 3D</p>
            <button onClick={handleImagesButtonClick} className="section-toggle">
              {isImagesOpen ? 'Hide Renders' : 'Show Renders'}
            </button>
          </div>
          {isImagesOpen && (
            <div className="gallery-wrapper">
              <Gallery items={images} />
            </div>
          )}
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>
      
      {/* Animations Section */}
      <section className="content-section animations-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Blender 3D Animations</h2>
            <p className="section-description">Dynamic animations and simulations showcasing motion graphics</p>
            <button onClick={handleVideosButtonClick} className="section-toggle">
              {isVideosOpen ? 'Hide Animations' : 'Show Animations'}
            </button>
          </div>
          {isVideosOpen && (
            <div className="video-grid-wrapper">
              <VideoGrid items={videos} />
            </div>
          )}
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>
      
      {/* Artwork Section */}
      <section className="content-section artwork-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Traditional & Digital Artwork</h2>
            <p className="section-description">Hand-drawn sketches, digital paintings, and artistic explorations</p>
            <button onClick={handleArtworkButtonClick} className="section-toggle">
              {isArtworkOpen ? 'Hide Artwork' : 'Show Artwork'}
            </button>
          </div>          {isArtworkOpen && (
            <div className="gallery-wrapper">
              <Gallery items={artwork} />
            </div>
          )}
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>
      
      {/* Unity Project Section
      <section className="content-section unity-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <img 
                className="unity-logo" 
                src='/assets/images/unity.png' 
                alt="Unity Logo" 
              />
              Unity WebGL Project
            </h2>
            <p className="section-description">Interactive game built with Unity Engine</p>
          </div>
          
          <div className="unity-content">
            <div className="iframe-container">
              <iframe
                id='webgl_iframe'
                title='Unity WebGL Project'
                allow="autoplay; fullscreen; vr"
                allowFullScreen=""
                allowVR=""
                mozAllowFullScreen="true"
                src="https://play.unity.com/webgl/104514da-7c35-4b2a-9d8c-d5b976362369?screenshot=false&embedType=embed"
                webkitAllowFullScreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      {/* <div className="section-divider"></div>

      {/* Unreal Engine Section */}
      {/* <section className="content-section unreal-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Unreal Engine MetaHuman</h2>
            <p className="section-description">Advanced character creation using Unreal Engine 5</p>
          </div>
          
          <div className="unreal-content">
            <div className="progress-overlay">
              <div className="range" style={{ '--p': '40' }}>
                <div className="range__label">
                  Creating MetaHuman<br />
                  <span className="status">Work in Progress</span>
                </div>
              </div>
            </div>
            <div className="video-container">
              <video className="video-placeholder" src="/assets/metahuman.mp4" controls poster="/assets/images/metahuman-poster.jpg" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <p>&copy; 2025 Project Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}