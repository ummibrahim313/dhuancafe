import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReservationCTA = () => {
  return (
    <section className="py-16 px-4 bg-chai-main">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase">
            RESERVE YOUR TABLE
          </h2>

          {/* Subtext */}
          <p className="text-white/90 text-lg font-body">
            Walk-ins welcome · Reservations recommended on weekends · Call or WhatsApp
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservetable" className="px-8 py-4 bg-white text-chai-dark font-semibold rounded-lg hover:bg-chai-light transition-all duration-300 transform hover:scale-105 font-heading uppercase inline-block text-center">
              Book Now
            </Link>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-chai-dark transition-all duration-300 transform hover:scale-105 font-heading uppercase flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationCTA;
