'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// A curated selection of frames for the gallery
const GOOGLE_IMAGES = [
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFMVamyp7uMtGqnhpryCEAOqhd-JXYFtSFgxSGcumctZt6gw6znuQNLe82BIRr-hoFDMyJEAfHRuGskW--bNwqjGfoYUE1QhGn6K_b-nwZEAgP5fUk7MxpULIM23GVwKbLllVqu8qCUM9dO=w496-h662-p-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFu8Jd3_fA6I3LfbSYkNgP1j_Sh3NSX3nqAwB5jQqy8HPDOfTL3uENfZtfqVxGx837GsabB1O2PuDZOQZVUyXwXB0JSLn_e66kbuEFU43nZ2Vo5siYkXyJDki6PcEr921DOQtKdgw=w496-h662-p-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyTJPhsZr95gYPtGvcOCpsdNKhJEGRY4LQjdDnXqvChieL6jnF9Jjt6uOk-dYBVKNZXngIr9Mkq62iNYeAy69MQm8LI3VTxDCXA9n9smFz2LIjhnjxf2X0YQbBrIBxNVl2LzwTgtNo-oI=w496-h662-p-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGa0LBeoKJSlkBXRuGIu98ZptQKF4s08lH_GPSJTHGLGilRyTVG9wVSrYnKD2wErDHPZUgd6glG5AGj2FOvtYaqgH_OSVPcH3ypyg8nqzOaEtM-d1CA24UILGYzazgOkuZhOW_c-0Rea8Q=w496-h662-p-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGKf4eFYln2TE6q7rJ2OdjLJWDUppzK-ZKczP18uwYGI5egECZST0eznuDKKt2sqBZz5N8wfFpW-zzqOj3UYHzv2kBn_Ern9ksa32OIbKFeHRewForeEZF96fA2BGSUcWne_5baH72b8CqB=w496-h662-p-k-no"
];

export default function GallerySection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="gallery-section">
      <div className="gallery-header" ref={headerRef}>
        <motion.div
          className="section-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          The Space
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Inside HLDR
        </motion.h2>
        <motion.p
          style={{ color: 'var(--text-muted)', fontSize: 14, maxWidth: 480, margin: '16px auto 0', lineHeight: 1.8 }}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Designed for intimacy and grandeur in equal measure, our space is a canvas for unforgettable evenings.
        </motion.p>
        <motion.span
          className="gold-line"
          style={{ display: 'block', marginTop: 24 }}
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      <div className="gallery-masonry">
        {GOOGLE_IMAGES.map((url, i) => (
          <GalleryItem key={i} url={url} index={i} />
        ))}
      </div>
    </section>
  );
}

function GalleryItem({ url, index }: { url: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="gallery-item"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: (index % 3) * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number],
      }}
    >
      <img
        src={url}
        alt={`Restaurant interior ${index + 1}`}
        loading="lazy"
        crossOrigin="anonymous"
      />
    </motion.div>
  );
}
