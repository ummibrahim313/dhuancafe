import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Coffee } from 'lucide-react';
import { menuItems } from '../data/menuItems.js';
import bannermenu from '../assets/images/menu/bannermenu.jpeg';

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [isSticky, setIsSticky] = useState(false);

  const tabs = ['ALL', 'CHAI', 'COFFEE', 'FOOD', 'DESSERTS'];

  // Filter menu items based on active tab
  const filteredItems = activeTab === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  // Category colors - updated to match theme
  const categoryColors = {
    CHAI: '#C17A3A',
    COFFEE: '#C17A3A',
    FOOD: '#C17A3A',
    DESSERTS: '#C17A3A'
  };

  // Handle sticky tabs
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  // Generate WhatsApp message
  const generateWhatsAppMessage = (item) => {
    const message = `Hello Dhuan Cafe! I'd like to order:\n\n${item.name}\nPrice: Rs. ${item.price}\n\nPlease confirm availability.`;
    return `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-chai-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannermenu})` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-chai-dark/80"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white uppercase mb-4"
          >
            OUR MENU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-chai-light text-lg max-w-2xl mx-auto font-body"
          >
            Explore our handcrafted chai, specialty coffee & desi bites
          </motion.p>
        </div>
      </section>

      {/* Sticky Tab Filters */}
      <div className={`sticky top-16 z-40 bg-chai-bg border-b border-chai-light/30 transition-all duration-300 ${
        isSticky ? 'shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-heading uppercase text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-chai-main text-white font-semibold rounded-full'
                    : 'border border-chai-light text-chai-dark hover:bg-chai-light hover:text-chai-dark rounded-full'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.category}-${item.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-chai-card rounded-xl p-6 border border-chai-main/30 transition-all duration-300 hover:shadow-lg hover:border-chai-main"
              >
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className="px-3 py-1 text-xs font-bold text-white rounded-full font-heading uppercase"
                    style={{ backgroundColor: categoryColors[item.category] }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Real Menu Item Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-chai-main/30">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Item Details */}
                <h3 className="font-heading text-lg font-bold text-white uppercase text-center mb-2">
                  {item.name}
                </h3>
                
                <p className="text-white/70 text-sm text-center mb-4 font-body">
                  {item.description}
                </p>

                {/* Price and Order Button */}
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <span className="text-chai-light font-bold text-lg font-heading flex-shrink-0">
                    Rs. {item.price}
                  </span>
                  <a
                    href={generateWhatsAppMessage(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto min-w-[80px] sm:min-w-[120px] px-2 sm:px-3 py-2 sm:py-2 bg-chai-main hover:bg-chai-dark text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 font-heading uppercase flex items-center justify-center gap-1.5 border border-chai-main/30"
                  >
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">Order</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
