import React from 'react';
import { Coffee, MapPin, Phone, MessageCircle, Instagram, Facebook, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chai-dark">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section - Logo and Tagline */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-chai-light uppercase mb-2">
            DHUAN CAFE
          </h2>
          <p className="text-chai-light/80 font-body text-lg">
            Where Desi Meets Different
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-heading text-lg font-bold text-chai-light uppercase mb-4">About</h3>
            <p className="text-chai-light/70 mb-6 font-body text-sm leading-relaxed">
              Born from a love of desi chai culture and modern coffee artistry, Dhuan Cafe brings Pakistan's rich brewing traditions to contemporary cafe aesthetics.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dhuancafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-chai-card rounded-full flex items-center justify-center text-chai-light hover:text-chai-main transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/dhuancafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-chai-card rounded-full flex items-center justify-center text-chai-light hover:text-chai-main transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@dhuancafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-chai-card rounded-full flex items-center justify-center text-chai-light hover:text-chai-main transition-colors"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-chai-light uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-chai-light/70 hover:text-chai-main transition-colors font-body text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-chai-light/70 hover:text-chai-main transition-colors font-body text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="text-chai-light/70 hover:text-chai-main transition-colors font-body text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-chai-light/70 hover:text-chai-main transition-colors font-body text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-chai-light/70 hover:text-chai-main transition-colors font-body text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Opening Hours */}
          <div>
            <h3 className="font-heading text-lg font-bold text-chai-light uppercase mb-4">Opening Hours</h3>
            <div className="space-y-3">
              <div className="bg-chai-card rounded-lg p-3 border border-chai-main/20">
                <div className="flex justify-between items-center">
                  <span className="text-chai-light font-body text-sm font-medium">Monday - Thursday</span>
                  <span className="text-chai-main font-heading text-sm font-semibold">8:00 AM - 10:00 PM</span>
                </div>
              </div>
              <div className="bg-chai-card rounded-lg p-3 border border-chai-main/20">
                <div className="flex justify-between items-center">
                  <span className="text-chai-light font-body text-sm font-medium">Friday - Sunday</span>
                  <span className="text-chai-main font-heading text-sm font-semibold">8:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-chai-light uppercase mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-chai-main mt-0.5 flex-shrink-0" />
                <span className="text-chai-light/70 font-body text-sm">F-7 Markaz, Islamabad</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-chai-main mt-0.5 flex-shrink-0" />
                <span className="text-chai-light/70 font-body text-sm">051-1234567</span>
              </div>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/92511234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-chai-main hover:bg-chai-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-heading uppercase text-sm border border-chai-main/30"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-chai-main/30 mb-8"></div>

        {/* Bottom Bar */}
        <div className="bg-chai-card rounded-lg py-4 px-6 text-center">
          <p className="text-white font-body text-sm">
            2026 Dhuan Cafe · Crafted with <Coffee className="inline w-4 h-4 text-chai-main mx-1" /> in Islamabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
