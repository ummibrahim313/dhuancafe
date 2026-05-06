import React, { useState } from 'react';
import { Coffee, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('chai');

  const categories = [
    { id: 'chai', name: 'Traditional Chai', icon: Coffee },
    { id: 'coffee', name: 'Modern Coffee', icon: Coffee },
    { id: 'specials', name: 'House Specials', icon: Star },
  ];

  const menuItems = {
    chai: [
      {
        name: 'Karak Chai',
        description: 'Strong, spiced tea with cardamom and ginger',
        price: '₹120',
        rating: 4.8,
        time: '5 min',
        popular: true
      },
      {
        name: 'Masala Chai',
        description: 'Aromatic blend with cinnamon, cloves, and nutmeg',
        price: '₹140',
        rating: 4.9,
        time: '6 min',
        popular: true
      },
      {
        name: 'Kashmiri Kahwa',
        description: 'Green tea with saffron, almonds, and cardamom',
        price: '₹180',
        rating: 4.7,
        time: '8 min',
        popular: false
      },
      {
        name: 'Doodh Patti',
        description: 'Pure milk tea with premium tea leaves',
        price: '₹100',
        rating: 4.6,
        time: '4 min',
        popular: false
      },
    ],
    coffee: [
      {
        name: 'Espresso',
        description: 'Rich, bold shot of premium Arabica',
        price: '₹150',
        rating: 4.8,
        time: '3 min',
        popular: false
      },
      {
        name: 'Cappuccino',
        description: 'Perfect balance of espresso and steamed milk',
        price: '₹200',
        rating: 4.9,
        time: '5 min',
        popular: true
      },
      {
        name: 'Cardamom Latte',
        description: 'Modern twist with traditional cardamom infusion',
        price: '₹220',
        rating: 4.8,
        time: '6 min',
        popular: true
      },
      {
        name: 'Cold Brew',
        description: '24-hour steeped smooth coffee experience',
        price: '₹180',
        rating: 4.7,
        time: '2 min',
        popular: false
      },
    ],
    specials: [
      {
        name: 'Chai-cino',
        description: 'Fusion of traditional chai and cappuccino',
        price: '₹240',
        rating: 4.9,
        time: '7 min',
        popular: true
      },
      {
        name: 'Saffron Mocha',
        description: 'Luxurious chocolate coffee with saffron hints',
        price: '₱280',
        rating: 4.8,
        time: '8 min',
        popular: true
      },
      {
        name: 'Rose Latte',
        description: 'Delicate rose syrup with smooth espresso',
        price: '₹260',
        rating: 4.7,
        time: '6 min',
        popular: false
      },
      {
        name: 'Pakistani Coffee',
        description: 'Sweet, creamy coffee with condensed milk',
        price: '₹200',
        rating: 4.8,
        time: '5 min',
        popular: false
      },
    ],
  };

  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-chai-bg to-chai-light/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 uppercase">
            <span className="text-gradient">Our Menu</span>
          </h2>
          <p className="text-chai-dark/80 text-lg max-w-2xl mx-auto font-body">
            From traditional Pakistani chai to contemporary coffee creations
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-heading uppercase text-sm ${
                  activeCategory === category.id
                    ? 'bg-chai-main text-chai-dark font-semibold'
                    : 'bg-chai-card/50 text-chai-dark hover:bg-chai-card/70'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-chai-card rounded-xl p-6 border border-chai-main/20 card-hover relative overflow-hidden"
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-3 right-3 bg-chai-light text-chai-dark text-xs font-bold px-2 py-1 rounded-full font-heading uppercase">
                  POPULAR
                </div>
              )}

              <h3 className="font-heading text-xl font-semibold text-chai-dark mb-2 uppercase">
                {item.name}
              </h3>
              <p className="text-chai-dark/70 text-sm mb-4 line-clamp-2 font-body">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-chai-main font-bold text-lg">{item.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-chai-light fill-current" />
                  <span className="text-chai-dark/80 text-sm font-body">{item.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-chai-dark/60 text-sm font-body">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
              </div>

              <button className="w-full mt-4 py-2 bg-chai-main/20 text-chai-main rounded-lg hover:bg-chai-main hover:text-chai-dark transition-all duration-300 font-medium font-heading uppercase text-sm">
                Order Now
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-chai-dark/80 mb-6 font-body">Want to see our full menu with snacks and desserts?</p>
          <button className="px-8 py-3 bg-chai-main text-chai-dark font-semibold rounded-lg hover:bg-chai-light transition-all duration-300 transform hover:scale-105 font-heading uppercase">
            View Complete Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
