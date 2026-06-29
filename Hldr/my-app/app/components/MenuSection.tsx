'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MENU_ITEMS = [
  {
    tag: 'Signature · Starter',
    title: 'Seared Foie Gras',
    desc: 'Brioche toast, fig compote, micro herbs, balsamic reduction',
    price: '₹2,800',
    imgUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFMVamyp7uMtGqnhpryCEAOqhd-JXYFtSFgxSGcumctZt6gw6znuQNLe82BIRr-hoFDMyJEAfHRuGskW--bNwqjGfoYUE1QhGn6K_b-nwZEAgP5fUk7MxpULIM23GVwKbLllVqu8qCUM9dO=w496-h662-p-k-no',
  },
  {
    tag: 'Chef\'s Special · Main',
    title: 'Wagyu Striploin',
    desc: '200g A5 wagyu, truffle jus, roasted bone marrow, seasonal greens',
    price: '₹6,400',
    imgUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFu8Jd3_fA6I3LfbSYkNgP1j_Sh3NSX3nqAwB5jQqy8HPDOfTL3uENfZtfqVxGx837GsabB1O2PuDZOQZVUyXwXB0JSLn_e66kbuEFU43nZ2Vo5siYkXyJDki6PcEr921DOQtKdgw=w496-h662-p-k-no',
  },
  {
    tag: 'Vegetarian · Main',
    title: 'Wild Mushroom Risotto',
    desc: 'Porcini cream, crispy sage, aged parmesan, truffle oil',
    price: '₹1,900',
    imgUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyTJPhsZr95gYPtGvcOCpsdNKhJEGRY4LQjdDnXqvChieL6jnF9Jjt6uOk-dYBVKNZXngIr9Mkq62iNYeAy69MQm8LI3VTxDCXA9n9smFz2LIjhnjxf2X0YQbBrIBxNVl2LzwTgtNo-oI=w496-h662-p-k-no',
  },
  {
    tag: 'Dessert · Signature',
    title: 'Dark Chocolate Sphere',
    desc: 'Warm chocolate lava, gold leaf, passion fruit coulis',
    price: '₹1,200',
    imgUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGa0LBeoKJSlkBXRuGIu98ZptQKF4s08lH_GPSJTHGLGilRyTVG9wVSrYnKD2wErDHPZUgd6glG5AGj2FOvtYaqgH_OSVPcH3ypyg8nqzOaEtM-d1CA24UILGYzazgOkuZhOW_c-0Rea8Q=w496-h662-p-k-no',
  },
  {
    tag: 'Cocktail · Craft',
    title: 'Amber Reverie',
    desc: 'Single malt Scotch, honey syrup, smoked rosemary, orange bitters',
    price: '₹950',
    imgUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGKf4eFYln2TE6q7rJ2OdjLJWDUppzK-ZKczP18uwYGI5egECZST0eznuDKKt2sqBZz5N8wfFpW-zzqOj3UYHzv2kBn_Ern9ksa32OIbKFeHRewForeEZF96fA2BGSUcWne_5baH72b8CqB=w496-h662-p-k-no',
  },
  {
    tag: 'Seasonal · Starter',
    title: 'Burrata & Heirloom',
    desc: 'Heirloom tomatoes, basil oil, aged balsamic, Maldon sea salt',
    price: '₹1,600',
    imgUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFMVamyp7uMtGqnhpryCEAOqhd-JXYFtSFgxSGcumctZt6gw6znuQNLe82BIRr-hoFDMyJEAfHRuGskW--bNwqjGfoYUE1QhGn6K_b-nwZEAgP5fUk7MxpULIM23GVwKbLllVqu8qCUM9dO=w496-h662-p-k-no',
  },
];

function MenuCard({ item, index }: { item: typeof MENU_ITEMS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="menu-card"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
    >
      <img
        src={item.imgUrl}
        alt={item.title}
        loading="lazy"
        crossOrigin="anonymous"
      />
      <div className="menu-card-overlay">
        <div className="menu-card-tag">{item.tag}</div>
        <div className="menu-card-title">{item.title}</div>
        <div className="menu-card-desc">{item.desc}</div>
        <div className="menu-card-price">{item.price}</div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="menu" className="menu-section grain">
      <div className="menu-header" ref={headerRef}>
        <motion.div
          className="section-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Curated Selection
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          The Menu
        </motion.h2>
        <motion.span
          className="gold-line"
          style={{ display: 'block', marginTop: 20 }}
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      <div className="menu-grid">
        {MENU_ITEMS.map((item, i) => (
          <MenuCard key={i} item={item} index={i} />
        ))}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: 24 }}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a href="#reservation" className="btn-gold">
          <span>Full Menu & Wine List</span>
        </a>
      </motion.div>
    </section>
  );
}
