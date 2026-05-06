import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-chai-main text-white text-center py-2 px-4 md:px-0 text-xs md:text-sm font-body">
        Now Open in F-7 Islamabad · Mon–Sun 8am–11pm · Free WiFi Available
      </div>
      
      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 bg-chai-dark ${
        scrolled ? 'shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Left */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="font-heading text-lg md:text-2xl font-bold text-chai-light uppercase">DHUAN</span>
                <span className="text-chai-light mx-1">·</span>
                <span className="font-heading text-base md:text-lg font-semibold text-chai-light uppercase">CAFE</span>
              </Link>
            </div>

            {/* Nav Links Center */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-chai-light transition-colors duration-200 text-sm font-medium font-heading uppercase ${
                    location.pathname === item.href ? 'text-chai-light' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              
              <Link to="/reservetable" className="px-4 py-2 border border-chai-light text-chai-light font-semibold rounded-lg hover:bg-chai-main hover:text-white transition-all duration-300 font-heading uppercase text-sm">
                Reserve A Table
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-chai-light transition-colors"
              >
                {isOpen ? <X className="h-6 w-6 text-chai-light" /> : <Menu className="h-6 w-6 text-chai-light" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Drawer */}
        {isOpen && (
          <>
            <div className="md:hidden fixed inset-0 bg-chai-dark z-50 flex flex-col">
            <div className="flex justify-between items-center p-4">
              <Link to="/" className="flex items-center">
                <span className="font-heading text-lg md:text-2xl font-bold text-chai-light uppercase">DHUAN</span>
                <span className="text-chai-light mx-1">·</span>
                <span className="font-heading text-base md:text-lg font-semibold text-chai-light uppercase">CAFE</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-chai-light transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="space-y-6 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg sm:text-xl font-heading uppercase transition-colors duration-200 tracking-wide ${
                      location.pathname === item.href ? 'text-chai-light' : 'text-white hover:text-chai-light'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-6">
                  <Link to="/reservetable" className="inline-block px-6 py-3 border border-chai-light text-chai-light font-semibold rounded-lg hover:bg-chai-main hover:text-white transition-all duration-300 font-heading uppercase text-sm" onClick={() => setIsOpen(false)}>
                    Reserve A Table
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
