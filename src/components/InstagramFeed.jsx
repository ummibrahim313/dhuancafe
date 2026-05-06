import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  // Real cafe-related images from Unsplash
  const images = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1511926856525-e2c1d6e6f6fe?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1559056199-642a9919e6e4?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&auto=format'
  ];

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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">
            FOLLOW OUR JOURNEY
          </h2>
          <a
            href="https://instagram.com/dhuancafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-chai-light text-lg hover:text-chai-main transition-colors duration-300 font-body"
          >
            @dhuancafe
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group overflow-hidden rounded-lg"
            >
              {/* Real Instagram Image */}
              <img 
                src={image} 
                alt={`Dhuan Cafe Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://instagram.com/dhuancafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-heading uppercase"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
