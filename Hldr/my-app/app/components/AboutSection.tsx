'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedSection({ children, delay = 0, direction = 'up' }: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : 0,
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 1, delay, ease },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="about-section">
        {/* Left: Text */}
        <div>
          <AnimatedSection>
            <div className="section-label">Our Story</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title">
              A Legacy Built<br />on <em style={{ fontStyle: 'italic', color: 'var(--gold-light)', fontFamily: 'Cormorant Garamond, serif' }}>Passion</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-body">
              Nestled in the heart of the city, HLDR is not merely a restaurant — it is a philosophy. 
              Born from a deep reverence for artisanal ingredients and the time-honoured traditions of 
              fine dining, every plate tells a story of craftsmanship.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="section-body">
              Our chefs curate seasonal tasting menus that celebrate the provenance of each ingredient, 
              transforming the familiar into the extraordinary through precision and creativity.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <a href="#reservation" className="btn-gold" style={{ marginTop: 32, display: 'inline-flex' }}>
              <span>Our Philosophy</span>
            </a>
          </AnimatedSection>

          <div className="about-stat-grid">
            {[
              { num: '07+', label: 'Years of Excellence' },
              { num: '32', label: 'Signature Dishes' },
              { num: '4.9', label: 'Guest Rating' },
              { num: '12', label: 'Awards Won' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.08}>
                <div className="stat-item">
                  <div className="stat-number">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right: Image stack */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="about-image-stack">
            <div className="img-card img-card-main">
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFu8Jd3_fA6I3LfbSYkNgP1j_Sh3NSX3nqAwB5jQqy8HPDOfTL3uENfZtfqVxGx837GsabB1O2PuDZOQZVUyXwXB0JSLn_e66kbuEFU43nZ2Vo5siYkXyJDki6PcEr921DOQtKdgw=w496-h662-p-k-no" alt="Restaurant interior" crossOrigin="anonymous" />
            </div>
            <div className="img-card img-card-accent" style={{
              position: 'absolute', bottom: '-40px', right: '-40px',
              width: 220, height: 280,
              border: '4px solid var(--bg)',
            }}>
              <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyTJPhsZr95gYPtGvcOCpsdNKhJEGRY4LQjdDnXqvChieL6jnF9Jjt6uOk-dYBVKNZXngIr9Mkq62iNYeAy69MQm8LI3VTxDCXA9n9smFz2LIjhnjxf2X0YQbBrIBxNVl2LzwTgtNo-oI=w496-h662-p-k-no" alt="Dining detail" crossOrigin="anonymous" />
            </div>
            {/* Gold accent line */}
            <div style={{
              position: 'absolute', top: 40, left: -20, width: 2, height: 160,
              background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
            }} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
