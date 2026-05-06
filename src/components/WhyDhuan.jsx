import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Music, Wifi } from 'lucide-react';

const WhyDhuan = () => {
  const features = [
    {
      icon: Coffee,
      title: "HANDCRAFTED DRINKS",
      description: "Every cup brewed fresh to order by our expert baristas"
    },
    {
      icon: Leaf,
      title: "FRESH INGREDIENTS",
      description: "Locally sourced spices and premium imported beans"
    },
    {
      icon: Music,
      title: "LIVE MUSIC FRIDAYS",
      description: "Acoustic sessions every Friday 7pm onwards"
    },
    {
      icon: Wifi,
      title: "FREE WIFI & CHARGING",
      description: "Work, study or relax - we've got you covered"
    }
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
            WHY DHUAN CAFE
          </h2>
        </motion.div>

        {/* Feature Boxes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-chai-card rounded-xl border border-chai-main/30 p-8 transition-all duration-300 hover:border-chai-main hover:shadow-lg"
              >
                {/* SVG Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-chai-main" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-white uppercase mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-chai-light/80 text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDhuan;
