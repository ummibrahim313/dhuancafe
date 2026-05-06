import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import kashmirichai from '../assets/images/featuredmenu/kashmirichai.jpg';
import coldbrew from '../assets/images/featuredmenu/coldbrew.jpg';
import bunkebab from '../assets/images/featuredmenu/bunkebab.jpg';
import shahiqahwa from '../assets/images/featuredmenu/shahiqahwa.jpg';

const FeaturedMenu = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = ['ALL', 'CHAI', 'COFFEE', 'FOOD'];

  const menuItems = [
    {
      id: 1,
      name: 'Kashmiri Chai',
      price: 'Rs. 250',
      description: 'Our signature pink chai with cardamom & cream',
      rating: 4.8,
      category: 'CHAI',
      image: kashmirichai
    },
    {
      id: 2,
      name: 'Cold Brew',
      price: 'Rs. 350',
      description: '12-hour steeped cold brew, smooth & bold',
      rating: 4.7,
      category: 'COFFEE',
      image: coldbrew
    },
    {
      id: 3,
      name: 'Bun Kebab',
      price: 'Rs. 220',
      description: 'Crispy bun with spiced beef patty & chutney',
      rating: 4.9,
      category: 'FOOD',
      image: bunkebab
    },
    {
      id: 4,
      name: 'Shahi Qahwa',
      price: 'Rs. 300',
      description: 'Royal green tea with saffron & almonds',
      rating: 4.8,
      category: 'CHAI',
      image: shahiqahwa
    }
  ];

  const filteredItems = activeTab === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 px-4 bg-chai-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            WHAT WE BREW
          </h2>
          <p className="text-chai-light text-lg max-w-2xl mx-auto font-body">
            Our most loved drinks & desi bites
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-heading uppercase text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-chai-main text-white font-semibold rounded-full'
                  : 'border border-chai-light text-chai-light hover:bg-chai-light hover:text-chai-dark rounded-full'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(193, 122, 58, 0.3)'
              }}
              className="bg-chai-card rounded-xl border border-chai-main/30 p-6 transition-all duration-300 hover:border-chai-main"
            >
              {/* Real product image */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-chai-main/30">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating badge */}
              <div className="flex items-center justify-center gap-1 mb-3">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-white text-sm font-body">{item.rating}</span>
              </div>

              {/* Product name */}
              <h3 className="font-heading text-lg font-bold text-white uppercase text-center mb-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-chai-light/70 text-sm text-center mb-4 font-body">
                {item.description}
              </p>

              {/* Price only - Order Now button removed */}
              <div className="text-center">
                <span className="text-chai-main font-bold text-lg">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/menu" className="px-8 py-3 border border-chai-light text-chai-light font-semibold rounded-lg hover:bg-chai-light hover:text-chai-dark transition-all duration-300 font-heading uppercase inline-block text-center">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
