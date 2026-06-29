'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const USED_FRAMES = 240;

function padded(n: number) {
  return n.toString().padStart(3, '0');
}

function getFrameSrc(index: number) {
  if (index === 0) return '/newframes/frame_240.png';
  return `/newframes/frame_${padded(index)}.png`;
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

  // Text 1: Starts in the middle, slides elegantly to the Left
  const text1Opacity = useTransform(scrollYProgress, [0, 0.17, 0.2], [1, 1, 0]);
  const text1X = useTransform(scrollYProgress, [0, 0.17, 0.2], [0, 0, -60]);

  // Text 2: Slides in from Right, stops at exact center (0), slides out to Left
  const text2Opacity = useTransform(scrollYProgress, [0.24, 0.27, 0.43, 0.46], [0, 1, 1, 0]);
  const text2X = useTransform(scrollYProgress, [0.24, 0.27, 0.43, 0.46], [60, 0, 0, -60]);

  // Text 3: Slides in from Left, stops at exact center (0), slides out to Right
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.53, 0.68, 0.71], [0, 1, 1, 0]);
  const text3X = useTransform(scrollYProgress, [0.5, 0.53, 0.68, 0.71], [-60, 0, 0, 60]);

  // Text 4: Slides in from Bottom, stops at exact center (0)
  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.78, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.75, 0.78, 1], [60, 0, 0]);

  return (
    <div
      ref={containerRef}
      style={{ height: '500vh', position: 'relative' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Loading bar */}
        {!loaded && (
          <div style={{ position: 'absolute', inset: 0, background: 'var(--color-background)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            <div style={{ fontFamily: 'var(--font-headline-display)', fontSize: 32, letterSpacing: '0.2em', color: 'var(--color-primary)' }}>DELITE</div>
            <div style={{ width: 200, height: 2, background: 'var(--color-outline-variant)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--color-primary)', transform: `scaleX(${loadProgress / 100})`, transformOrigin: 'left', transition: 'transform 0.2s' }} />
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--color-on-surface-variant)', fontWeight: 600 }}>{loadProgress}%</div>
          </div>
        )}

        {/* DOM-based Image sequence */}
        <div 
          className="hero-canvas" 
          style={{ 
            width: '100vw', height: '100vh', 
            position: 'absolute', inset: 0, 
            zIndex: 0, background: 'var(--color-background)'
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
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, transparent 20%, rgba(19, 19, 19, 0.8) 100%)' }} />
        </div>

        {/* Render texts only AFTER loading is complete */}
        {loaded && (
          <>
            {/* Text 2 */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end md:justify-center items-center md:items-end z-10 pb-[15vh] md:pb-0 px-6 md:pr-[10vw] md:w-1/2 md:ml-auto"
              style={{ opacity: text2Opacity, x: text2X, pointerEvents: 'none' }}
            >
              <div className="max-w-xl text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end gap-4 font-sans text-sm tracking-[0.15em] uppercase text-tertiary mb-6">
                  <div className="w-10 h-px bg-tertiary hidden md:block"></div>
                  Artisanal Craft
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] mb-6 text-on-surface">
                  A Dance of <br/><em className="text-primary not-italic">Ingredients</em>
                </h1>
                <p className="font-body text-base md:text-xl text-on-surface-variant max-w-[500px] leading-relaxed mx-auto md:ml-auto md:mr-0">
                  Sourced locally, prepared globally. Every element tells a story.
                </p>
              </div>
            </motion.div>

            {/* Text 3 */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end md:justify-center items-center md:items-start z-10 pb-[15vh] md:pb-0 px-6 md:pl-[10vw] md:w-1/2"
              style={{ opacity: text3Opacity, x: text3X, pointerEvents: 'none' }}
            >
              <div className="max-w-xl text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 font-sans text-sm tracking-[0.15em] uppercase text-tertiary mb-6">
                  The Atmosphere
                  <div className="w-10 h-px bg-tertiary hidden md:block"></div>
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] mb-6 text-on-surface">
                  Designed for <br/><em className="text-primary not-italic">The Senses</em>
                </h1>
                <p className="font-body text-base md:text-xl text-on-surface-variant max-w-[500px] leading-relaxed mx-auto md:ml-0 md:mr-auto">
                  Warmth and vibrancy in every corner, making memories unforgettable.
                </p>
              </div>
            </motion.div>
          </>
        )}

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 text-on-surface-variant">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary"></div>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary">Scroll</span>
        </div>
      </div>
    </div>
  );
}