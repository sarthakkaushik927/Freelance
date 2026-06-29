'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav" 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/60 backdrop-blur-3xl shadow-lg border-b border-white/10 py-2' : 'bg-transparent py-4'}`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 max-w-7xl mx-auto">
        <a className="font-display text-2xl md:text-4xl text-primary tracking-tighter" href="#">
          Delite
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a className="text-on-surface-variant font-sans text-xs uppercase tracking-widest hover:text-primary transition-colors hover:bg-white/5 px-4 py-2 rounded-lg duration-300" href="#menu">Menu</a>
          <a className="text-on-surface-variant font-sans text-xs uppercase tracking-widest hover:text-primary transition-colors hover:bg-white/5 px-4 py-2 rounded-lg duration-300" href="#gallery">Gallery</a>
          <a className="text-on-surface-variant font-sans text-xs uppercase tracking-widest hover:text-primary transition-colors hover:bg-white/5 px-4 py-2 rounded-lg duration-300" href="#story">Our Story</a>
          <a className="text-on-surface-variant font-sans text-xs uppercase tracking-widest hover:text-primary transition-colors hover:bg-white/5 px-4 py-2 rounded-lg duration-300" href="#reservations">Reservations</a>
        </div>

        <a className="hidden md:flex bg-secondary-container text-on-surface px-8 py-3 font-sans text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(255,51,102,0.3)] rounded-sm" href="#reservations">
          Book Now
        </a>

        <button className="md:hidden text-primary p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
