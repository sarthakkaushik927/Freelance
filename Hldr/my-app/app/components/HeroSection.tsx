'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const TOTAL_FRAMES = 271;
const FRAME_STEP = 2; 
const USED_FRAMES = Math.ceil(TOTAL_FRAMES / FRAME_STEP);

function padded(n: number) {
  return n.toString().padStart(3, '0');
}

function getFrameSrc(index: number) {
  const frameNum = index * FRAME_STEP;
  if (frameNum === 0) return '/frames/ezgif-frame-000.png';
  return `/frames/ezgif-frame-${padded(frameNum)}.jpg`;
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Create refs to store our DOM elements and track the previous frame
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const prevFrame = useRef(0);

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, USED_FRAMES - 1]);

  // 2. Update the DOM directly. This bypasses React's render cycle 
  // and makes the scroll animation buttery smooth.
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.max(0, Math.min(Math.round(latest), USED_FRAMES - 1));
    
    if (currentFrame !== prevFrame.current) {
      // Hide the previous frame
      if (imagesRef.current[prevFrame.current]) {
        imagesRef.current[prevFrame.current]!.style.opacity = '0';
      }
      // Show the new frame
      if (imagesRef.current[currentFrame]) {
        imagesRef.current[currentFrame]!.style.opacity = '1';
      }
      
      prevFrame.current = currentFrame;
    }
  });

  useEffect(() => {
    let loadedCount = 0;
    const preload = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / USED_FRAMES) * 100));
      if (loadedCount >= USED_FRAMES) setLoaded(true);
    };

    for (let i = 0; i < USED_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = preload;
      img.onerror = preload;
    }
  }, []);

 // Text 1: Starts in the middle, slides completely out to the Left
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const text1X = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, 0, "-100vw"]);

  // Text 2: Slides in from far Right, stops at exact center (0), slides out to far Left
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const text2X = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], ["100vw", 0, 0, "-100vw"]);

  // Text 3: Slides in from far Left, stops at exact center (0), slides out to far Right
  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const text3X = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], ["-100vw", 0, 0, "100vw"]);

  // Text 4: Slides in from far Bottom, stops at exact center (0)
  const text4Opacity = useTransform(scrollYProgress, [0.7, 0.75, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.7, 0.75, 1], ["100vh", 0, 0]);

  return (
    <div
      ref={containerRef}
      style={{ height: '500vh', position: 'relative' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Loading bar */}
        {!loaded && (
          <div style={{ position: 'absolute', inset: 0, background: '#050505', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            <div style={{ fontFamily: 'Cinzel, serif', fontSize: 28, letterSpacing: '0.3em', color: '#d4af37' }}>HLDR</div>
            <div style={{ width: 200, height: 2, background: 'rgba(212,175,55,0.2)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: '#d4af37', transform: `scaleX(${loadProgress / 100})`, transformOrigin: 'left', transition: 'transform 0.2s' }} />
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', color: '#666', fontWeight: 600 }}>{loadProgress}%</div>
          </div>
        )}

        {/* DOM-based Image sequence */}
        <div 
          className="hero-canvas" 
          style={{ 
            width: '100vw', height: '100vh', 
            position: 'absolute', inset: 0, 
            zIndex: 0, background: '#000'
          }}
        >
          {Array.from({ length: USED_FRAMES }).map((_, i) => (
            <img
              key={i}
              ref={(el) => { imagesRef.current[i] = el; }} // 3. Attach element to our ref array
              src={getFrameSrc(i)}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: i === 0 ? 1 : 0, // 4. Only the first frame is visible initially
                willChange: 'opacity',
              }}
            />
          ))}
          {/* Subtle vignette overlay so text is readable */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.7) 100%)' }} />
        </div>

        {/* Text 1 */}
        <motion.div
          className="hero-content absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{ opacity: text1Opacity, x: text1X, pointerEvents: loaded ? 'auto' : 'none' }}
        >
          <div className="hero-eyebrow">Est. 2019 · Fine Dining</div>
          <h1 className="hero-title">Where Flavour <br/>Finds its <em>Soul</em></h1>
          <p className="hero-subtitle">An intimate experience of contemporary cuisine rooted in heritage.</p>
        </motion.div>

        {/* Text 2 */}
        <motion.div
          className="hero-content absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{ opacity: text2Opacity, x: text2X, pointerEvents: 'none' }}
        >
          <div className="hero-eyebrow">Artisanal Craft</div>
          <h1 className="hero-title">A Dance of <br/><em>Ingredients</em></h1>
          <p className="hero-subtitle">Sourced locally, prepared globally. Every element tells a story.</p>
        </motion.div>

        {/* Text 3 */}
        <motion.div
          className="hero-content absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{ opacity: text3Opacity, x: text3X, pointerEvents: 'none' }}
        >
          <div className="hero-eyebrow">The Atmosphere</div>
          <h1 className="hero-title">Designed for <br/><em>The Senses</em></h1>
          <p className="hero-subtitle">Warmth and vibrancy in every corner, making memories unforgettable.</p>
        </motion.div>

        {/* Text 4 */}
        <motion.div
          className="hero-content absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{ opacity: text4Opacity, y: text4Y, pointerEvents: loaded ? 'auto' : 'none' }}
        >
          <div className="hero-eyebrow">Experience HLDR</div>
          <h1 className="hero-title">Reserve Your <br/><em>Evening</em></h1>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <a href="#reservation" className="btn-gold" style={{ pointerEvents: 'auto' }}>
              <span>Reserve a Table</span>
            </a>
            <a href="#menu" className="btn-gold" style={{ borderColor: 'rgba(212,175,55,0.35)', color: 'var(--cream-dim)', pointerEvents: 'auto' }}>
              <span>View Menu</span>
            </a>
          </div>
        </motion.div>

        <div className="hero-scroll-hint z-10">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </div>
  );
}