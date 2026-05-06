import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmed K.",
      quote: "Best Kashmiri chai in Islamabad. Dhuan feels like home, but cooler!",
      rating: 5
    },
    {
      name: "Sara M.",
      quote: "The ambiance is unreal. Desi vibes with a modern twist - absolutely love it.",
      rating: 5
    },
    {
      name: "Bilal R.",
      quote: "Cold brew + bun kebab is the combo I never knew I needed. 10/10!",
      rating: 5
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            WHAT OUR GUESTS SAY
          </h2>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-chai-bg rounded-xl p-8 border border-chai-main/30 transition-all duration-300 hover:shadow-lg hover:border-chai-main"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-chai-dark/80 italic text-lg mb-6 font-body leading-relaxed">
                "{review.quote}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading text-chai-dark font-semibold">
                    {review.name}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-chai-main" />
                    <span className="text-chai-dark/60 text-sm font-body">Verified Guest</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
