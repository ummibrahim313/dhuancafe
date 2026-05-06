import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* WhatsApp Button */}
        <div className="w-14 h-14 bg-chai-main hover:bg-chai-dark rounded-full flex items-center justify-center shadow-lg transition-all duration-300 animate-bounce border-2 border-chai-light/30">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Order via WhatsApp
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
