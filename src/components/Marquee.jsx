import React from 'react';
import { Coffee, Heart, Sparkles, Clock, Star } from 'lucide-react';

const Marquee = () => {
  const marqueeContent = [
    { icon: <Coffee className="w-4 h-4" />, text: "HANDCRAFTED WITH LOVE" },
    { icon: <Sparkles className="w-4 h-4" />, text: "BREWED TO PERFECTION" },
    { icon: <Heart className="w-4 h-4" />, text: "DESI MEETS MODERN" },
    { icon: <Clock className="w-4 h-4" />, text: "SERVED WITH WARMTH" },
    { icon: <Star className="w-4 h-4" />, text: "FRESH EVERY DAY" },
  ];

  return (
    <div className="relative w-full bg-chai-main overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex items-center space-x-8">
            {marqueeContent.map((item, index) => (
              <div key={`${repeatIndex}-${index}`} className="flex items-center space-x-3">
                <span className="text-chai-light">{item.icon}</span>
                <span className="text-white font-heading uppercase tracking-widest text-sm font-medium">
                  {item.text}
                </span>
                <span className="text-chai-light text-xs">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-chai-main to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-chai-main to-transparent z-10" />
    </div>
  );
};

export default Marquee;
