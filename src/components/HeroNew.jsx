import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroNew = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background — Coffee Beans */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80&auto=format&fit=crop')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              {/* Main heading — same line */}
              <div className="mb-4 sm:mb-6">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none tracking-tight">
                  <span className="text-white">dhuan </span>
                  <span style={{ color: '#C17A3A' }}>CAFE</span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="font-heading text-base text-white/90 font-semibold tracking-wide">
                Desi meets Different — Islamabad
              </p>

              {/* Description */}
              <p className="font-body text-white/70 max-w-md leading-relaxed text-sm">
                Explore what Dhuan Cafe has to offer — sip handcrafted chai,
                specialty coffee & desi bites. Every order is freshly brewed
                and served with warmth.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/menu"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wide rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 inline-block text-center"
                  style={{ backgroundColor: '#C17A3A' }}
                >
                  Explore Menu
                </Link>
                <Link
                  to="/reservetable"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-heading text-xs sm:text-sm font-bold uppercase tracking-wide rounded-full border-2 text-white transition-all duration-300 hover:scale-105 inline-block text-center"
                  style={{ borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  Reserve a Table
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-6 sm:gap-8 lg:gap-10 pt-4">
                <div className="text-center">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-white">+500</p>
                  <p className="font-body text-xs sm:text-sm text-white/60 uppercase tracking-wide mt-1">Daily Guests</p>
                </div>
                <div className="w-px sm:w-px bg-white/20"></div>
                <div className="text-center">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-white">+25</p>
                  <p className="font-body text-xs sm:text-sm text-white/60 uppercase tracking-wide mt-1">Menu Items</p>
                </div>
                <div className="w-px sm:w-px bg-white/20"></div>
                <div className="text-center">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-white">4.9</p>
                  <p className="font-body text-xs sm:text-sm text-white/60 uppercase tracking-wide mt-1">⭐ Rating</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — Coffee Cup only */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative">

                {/* Circular coffee cup image */}
                <div
                  className="w-80 h-80 rounded-full overflow-hidden border-4 shadow-2xl"
                  style={{ borderColor: '#C17A3A' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80&auto=format&fit=crop"
                    alt="Dhuan Cafe Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating rating card — bottom left */}
                <div className="absolute -bottom-4 -left-16 bg-white rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <div>
                      <p className="font-heading text-sm font-bold" style={{ color: '#3D1F0D' }}>4.9 Rating</p>
                      <p className="font-body text-xs" style={{ color: '#3D1F0D' }}>200+ Reviews</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      

    </section>
  );
};

export default HeroNew;