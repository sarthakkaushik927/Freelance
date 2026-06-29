'use client';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body">
      <Navbar />
      
      <main>
        <HeroSection />

        {/* Gallery Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-24 px-6 md:px-16 max-w-7xl mx-auto" 
          id="gallery"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="font-sans text-xs text-tertiary uppercase tracking-widest mb-4 block">Visual Journey</span>
            <h2 className="font-display text-4xl md:text-5xl text-primary">The Delite Experience</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto mt-6 text-sm md:text-base">
              Immerse yourself in the captivating atmosphere and stunning presentations that define our establishment. A feast for the eyes before it reaches the palate.
            </p>
          </motion.div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Image 1 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5 inline-block w-full">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                alt="Delite Front" 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFMVamyp7uMtGqnhpryCEAOqhd-JXYFtSFgxSGcumctZt6gw6znuQNLe82BIRr-hoFDMyJEAfHRuGskW--bNwqjGfoYUE1QhGn6K_b-nwZEAgP5fUk7MxpULIM23GVwKbLllVqu8qCUM9dO=w496-h662-p-k-no"
              />
            </motion.div>
            
            {/* Image 2 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5 inline-block w-full">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                alt="Interior" 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFu8Jd3_fA6I3LfbSYkNgP1j_Sh3NSX3nqAwB5jQqy8HPDOfTL3uENfZtfqVxGx837GsabB1O2PuDZOQZVUyXwXB0JSLn_e66kbuEFU43nZ2Vo5siYkXyJDki6PcEr921DOQtKdgw=w496-h662-p-k-no"
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5 inline-block w-full">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                alt="Details" 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFyTJPhsZr95gYPtGvcOCpsdNKhJEGRY4LQjdDnXqvChieL6jnF9Jjt6uOk-dYBVKNZXngIr9Mkq62iNYeAy69MQm8LI3VTxDCXA9n9smFz2LIjhnjxf2X0YQbBrIBxNVl2LzwTgtNo-oI=w496-h662-p-k-no"
              />
            </motion.div>
            
            {/* Image 4 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5 inline-block w-full">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                alt="Setup" 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGa0LBeoKJSlkBXRuGIu98ZptQKF4s08lH_GPSJTHGLGilRyTVG9wVSrYnKD2wErDHPZUgd6glG5AGj2FOvtYaqgH_OSVPcH3ypyg8nqzOaEtM-d1CA24UILGYzazgOkuZhOW_c-0Rea8Q=w496-h662-p-k-no"
              />
            </motion.div>

            {/* Image 5 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5 inline-block w-full">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                alt="Ambiance" 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGKf4eFYln2TE6q7rJ2OdjLJWDUppzK-ZKczP18uwYGI5egECZST0eznuDKKt2sqBZz5N8wfFpW-zzqOj3UYHzv2kBn_Ern9ksa32OIbKFeHRewForeEZF96fA2BGSUcWne_5baH72b8CqB=w496-h662-p-k-no"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* The Culinary Art */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-24 px-6 md:px-16 max-w-7xl mx-auto relative" 
          id="menu"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-24">
            <span className="font-sans text-xs text-tertiary uppercase tracking-widest mb-4 block">Our Signature</span>
            <h2 className="font-display text-4xl md:text-5xl text-primary">The Culinary Art</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Main Dish */}
            <motion.div variants={fadeInUp} className="md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Plated dish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG8v7iQRWqwVdZwBiQuLqUKUUk3beOcaBmdolXa9Ix7mvaS-kVtQdIYtcAuIRU8cEB0Ec5mL8IQHZXwZhRm_LVr1G4RVLLStsexDzEEKQaxUBCpE8t762MMGg6N3IO0ZBejz0Cgu_qUtM_zolOXyDgwVwHOQEzdArwvrDi903sSSUGUHSKoilammo9yOTpYIcxyXKWw6FNxh3TGPegoxeMEiK3VhT9jqil5-3N1mjhZeGqDfj7ASJsQEOo2bQuDiQi8bT-TZImrDsv"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block border border-outline-variant text-on-surface-variant px-2 py-1 font-sans text-[10px] uppercase mb-2">Signature</span>
                    <h3 className="font-display text-3xl text-on-surface mb-2 font-style-italic">Midnight Scallop</h3>
                    <p className="font-body text-base text-on-surface-variant hidden md:block max-w-md">Pan-seared deep sea scallop, activated charcoal puree, electric rose emulsion, micro basil.</p>
                  </div>
                  <span className="font-display text-3xl text-primary">$42</span>
                </div>
              </div>
            </motion.div>
            {/* Side Dish 1 */}
            <motion.div variants={fadeInUp} className="md:col-span-4 relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Dessert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDedbz_Zo5T8CbVZ29XksVz-vZ7w5eoHBfByq6pg_VmH4QQmde_FLOxPfqaFCLFfwuwqzXjlzysFu9OwDw0mfPZwynv5xIfybB3zvex_dMtRNaWGEMI4r08KhneMNm85qByq7fhr3x2C8c7Z-J49nqKxAXQXFc05qR9clqHvpY1HJBSgixfdzwDMX4SdaP8yY9JRoivHFAzocq1lne--O_uJ9aBay_0Sa8Gu31G-Jx6ob7DWfnbYZZ2EgkUmJP2bew0SKsZg3q8F64n"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-display text-2xl text-on-surface mb-1">Ember Sphere</h3>
                <p className="font-body text-sm text-on-surface-variant">Dark cocoa, wild berry core.</p>
              </div>
            </motion.div>
            {/* Side Dish 2 */}
            <motion.div variants={fadeInUp} className="md:col-span-4 relative group overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Cocktail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnfbM2nsQQOmXaQSafleX4KTyb3_wNumwCFDpTRhOjCng14kMtP1u-WovukLFuMyh0VV8VSOZqfumbGmDWpJBUaSvIeb5D79WqaR-OA4keB0NdHc6E-jZe4RtM-AIugu2RFBd_-9HOP6iahYbfWGUFQIEEknInQ6AaA-alJkir2c1D-zd49nVOp-EvjgUuT_Zy6i87qgT3IQuNboX6q-EujW_nfnFH1emUEUZZZTXSjlpF0Hs0XfOx5-_nbe-iNVM5GeGJMMnzre7o"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-display text-2xl text-on-surface mb-1">Velvet Elixir</h3>
                <p className="font-body text-sm text-on-surface-variant">Botanical gin, pomegranate, smoke.</p>
              </div>
            </motion.div>
            {/* Abstract block */}
            <motion.div variants={fadeInUp} className="md:col-span-8 bg-surface-container flex items-center justify-center p-12 rounded-xl border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)]"></div>
              <div className="text-center relative z-10">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-6 block">restaurant</span>
                <h3 className="font-display text-3xl text-primary mb-4">A Symphony of Senses</h3>
                <p className="font-body text-base text-on-surface-variant max-w-md mx-auto">Every dish is meticulously crafted to challenge expectations and delight the palate, utilizing only the most premium, ethically sourced ingredients.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* A Space for Unforgettable Evenings */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-24 relative bg-surface-container-lowest border-y border-white/5" 
          id="story"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="h-[500px] md:h-auto relative">
              <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTzOWgRZesoCxYU7b5Ygs1grQiUcC1JdZGVSD3B5-zlQj7BqPFTDpqD4C_q7M4L8EKMY97lYtAKpcUEcUXo93UOLnAdo4zSbCTa8ZLhbdEmYUhGVKJDz6V7C8VV93Loy1htf5JkpR8zJVMN2KX2OU0m3vQDVlej_wajnqId83tRY0ItrT0ppBbfrFZ1eXSYPQLERC71H6ERy0oA6JvkoyRu10L4kuDxqGxmF5O9QeULx5zgExHKHU4lTb8h_wzH3Xs5GJYGf4bakgR"/>
            </div>
            <div className="flex items-center justify-center p-12 md:p-24 bg-surface-container/80">
              <div className="max-w-lg text-center md:text-left">
                <span className="font-sans text-xs text-tertiary uppercase tracking-widest mb-6 block">The Atmosphere</span>
                <h2 className="font-display text-4xl md:text-5xl text-primary mb-8 leading-tight">Designed for intimacy<br/>and grandeur.</h2>
                <p className="font-body text-lg text-on-surface-variant mb-10">
                  Our space is a canvas for your unforgettable evenings. Combining rich burgundy aesthetics with striking contemporary editorial elements, we provide a setting that is as provocative as our menu. 
                </p>
                <a className="font-display italic text-xl text-on-surface border-b border-tertiary pb-1 hover:text-tertiary transition-colors inline-block" href="#reservations">Experience the ambiance</a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reserve Your Experience */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-32 px-6 md:px-16 max-w-7xl mx-auto" 
          id="reservations"
        >
          <div className="bg-surface/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-16 max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Reserve Your Experience</h2>
              <p className="font-body text-base text-on-surface-variant">Secure your table for an evening of culinary discovery.</p>
            </div>
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input className="block w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary text-on-surface font-body py-2 px-0 focus:ring-0 peer outline-none" id="name" placeholder=" " type="text"/>
                  <label className="absolute left-0 top-2 text-on-surface-variant font-sans text-xs uppercase transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]" htmlFor="name">Full Name</label>
                </div>
                <div className="relative">
                  <input className="block w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary text-on-surface font-body py-2 px-0 focus:ring-0 peer outline-none" id="email" placeholder=" " type="email"/>
                  <label className="absolute left-0 top-2 text-on-surface-variant font-sans text-xs uppercase transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]" htmlFor="email">Email Address</label>
                </div>
                <div className="relative">
                  <input className="block w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary text-on-surface font-body py-2 px-0 focus:ring-0 peer outline-none [color-scheme:dark]" id="date" placeholder=" " type="date"/>
                  <label className="absolute left-0 -top-4 text-[10px] text-on-surface-variant font-sans uppercase" htmlFor="date">Date</label>
                </div>
                <div className="relative">
                  <select className="block w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary text-on-surface font-body py-2 px-0 focus:ring-0 appearance-none outline-none" id="guests">
                    <option className="bg-surface text-on-surface">2 Guests</option>
                    <option className="bg-surface text-on-surface">3 Guests</option>
                    <option className="bg-surface text-on-surface">4 Guests</option>
                    <option className="bg-surface text-on-surface">5+ Guests (Contact Us)</option>
                  </select>
                  <label className="absolute left-0 -top-4 text-[10px] text-on-surface-variant font-sans uppercase" htmlFor="guests">Party Size</label>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 flex justify-center">
                <button className="bg-secondary-container text-on-surface px-12 py-4 font-sans text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all scale-95 active:scale-90 shadow-[0_0_20px_rgba(255,51,102,0.2)] rounded-sm w-full md:w-auto" type="button">
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest text-on-surface w-full py-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16 max-w-7xl mx-auto items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <span className="font-display text-3xl text-primary block mb-2">Delite</span>
            <p className="font-body text-sm text-on-surface-variant max-w-xs mx-auto md:mx-0">
              Family Restaurant &amp; Cafe
            </p>
          </div>
          <div className="flex flex-col space-y-4 font-sans text-xs uppercase tracking-widest mb-8 md:mb-0 items-center md:items-start">
            <a className="text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href="#menu">Menu</a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href="#">Contact</a>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center space-y-4">
            <div className="flex space-x-6">
              <a className="text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100 font-sans text-xs uppercase tracking-widest" href="#">Instagram</a>
              <a className="text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100 font-sans text-xs uppercase tracking-widest" href="#">Facebook</a>
            </div>
            <p className="font-body text-on-surface-variant opacity-50 mt-4 text-xs">
              © 2024 Delite Family Restaurant &amp; Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
