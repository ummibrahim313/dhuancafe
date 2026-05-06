import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

// Drinks images (from menu folder)
import kashmirichai from '../assets/images/menu/kashmirichai.jpg';
import cappucino from '../assets/images/menu/cappucino.jpeg';
import expresso from '../assets/images/menu/expresso.jpeg';
import coldbrew from '../assets/images/menu/coldbrew.jpg';
import shahiqahwa from '../assets/images/menu/shahiqahwa.jpg';

// Food images (from menu folder)
import bunkebab from '../assets/images/menu/bunkebab.jpg';
import clubsandwich from '../assets/images/menu/clubsandwich.jpeg';
import aalooparatha from '../assets/images/menu/aalooparatha.jpeg';
import cheesenaan from '../assets/images/menu/cheesenaan.jpeg';

// Ambiance images (from about folder)
import space1 from '../assets/images/about/space1.jpeg';
import space2 from '../assets/images/about/space2.jpeg';
import space3 from '../assets/images/about/space3.jpeg';
import space4 from '../assets/images/about/space4.jpeg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'DRINKS', 'FOOD', 'AMBIANCE'];

  const galleryImages = [
    {
      id: 1,
      category: 'DRINKS',
      aspectRatio: 'aspect-square',
      title: 'Kashmiri Chai',
      image: kashmirichai
    },
    {
      id: 2,
      category: 'FOOD',
      aspectRatio: 'aspect-video',
      title: 'Bun Kebab',
      image: bunkebab
    },
    {
      id: 3,
      category: 'AMBIANCE',
      aspectRatio: 'aspect-[4/3]',
      title: 'Cafe Interior',
      image: space1
    },
    {
      id: 4,
      category: 'DRINKS',
      aspectRatio: 'aspect-[3/4]',
      title: 'Cold Brew Coffee',
      image: coldbrew
    },
    {
      id: 5,
      category: 'FOOD',
      aspectRatio: 'aspect-square',
      title: 'Club Sandwich',
      image: clubsandwich
    },
    {
      id: 6,
      category: 'AMBIANCE',
      aspectRatio: 'aspect-video',
      title: 'Cafe Seating',
      image: space2
    },
    {
      id: 7,
      category: 'DRINKS',
      aspectRatio: 'aspect-[4/3]',
      title: 'Cappuccino',
      image: cappucino
    },
    {
      id: 8,
      category: 'FOOD',
      aspectRatio: 'aspect-[3/4]',
      title: 'Aloo Paratha',
      image: aalooparatha
    },
    {
      id: 9,
      category: 'AMBIANCE',
      aspectRatio: 'aspect-square',
      title: 'Cafe Exterior',
      image: space3
    },
    {
      id: 10,
      category: 'DRINKS',
      aspectRatio: 'aspect-video',
      title: 'Shahi Qahwa',
      image: shahiqahwa
    },
    {
      id: 11,
      category: 'FOOD',
      aspectRatio: 'aspect-[3/4]',
      title: 'Cheese Naan',
      image: cheesenaan
    },
    {
      id: 12,
      category: 'AMBIANCE',
      aspectRatio: 'aspect-square',
      title: 'Coffee Art',
      image: space4
    }
  ];

  const filteredImages = activeFilter === 'ALL'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-chai-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${space1})` }}>
        <div className="absolute inset-0 bg-chai-dark/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white uppercase mb-4"
          >
            OUR GALLERY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-chai-light text-lg max-w-2xl mx-auto font-body"
          >
            Experience the ambiance, flavors, and moments at Dhuan Cafe
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-chai-bg border-b border-chai-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 font-heading uppercase text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-chai-main text-white font-semibold rounded-full'
                    : 'border border-chai-light text-chai-dark hover:bg-chai-light hover:text-chai-dark rounded-full'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl"
              >
                <div className={image.aspectRatio}>
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-chai-main text-white text-xs font-bold rounded-full font-heading uppercase">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;