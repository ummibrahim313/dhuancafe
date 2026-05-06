import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import mainhome from '../assets/images/ourstory/mainhome.jpg';

const OurStory = () => {
  return (
    <section className="py-20 px-4 bg-chai-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Small tag */}
            <div>
              <span className="text-chai-main text-sm font-heading uppercase tracking-widest">
                OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-chai-dark leading-tight">
              A BLEND OF TRADITION & TASTE
            </h2>

            {/* Body text */}
            <p className="text-chai-dark/80 text-lg leading-relaxed font-body max-w-lg">
              Born from a love of desi chai culture and modern coffee artistry, Dhuan Cafe is where Pakistan's rich brewing traditions meet contemporary café aesthetics. Every cup tells a story of heritage, crafted for the modern soul.
            </p>

            {/* Two stat boxes */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-chai-dark text-white px-6 py-4 rounded-lg">
                <div className="font-heading text-2xl font-bold uppercase">500+</div>
                <div className="text-sm font-body">Daily Guests</div>
              </div>
              <div className="bg-chai-dark text-white px-6 py-4 rounded-lg">
                <div className="font-heading text-2xl font-bold uppercase">25+</div>
                <div className="text-sm font-body">Menu Items</div>
              </div>
            </div>

                      </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Large placeholder image */}
            <div className="aspect-square rounded-2xl overflow-hidden">
  <img
    src={mainhome}
    alt="Our Story"
    className="w-full h-full object-cover"
  />
</div>

            {/* Small overlapping card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 right-6 bg-white rounded-lg px-4 py-3 shadow-lg"
            >
              <div className="text-chai-dark">
                <div className="font-heading text-sm font-semibold uppercase">Since 2024</div>
                <div className="text-chai-dark/70 text-sm font-body">F-7 Islamabad</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
