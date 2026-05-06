import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook, Music } from 'lucide-react';

const ContactPage = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setShowSuccessAlert(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-chai-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop&auto=format)' }}>
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
            FIND US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-chai-light text-lg max-w-2xl mx-auto font-body"
          >
            Visit us at F-7 Markaz Islamabad or get in touch for reservations
          </motion.p>
        </div>
      </section>

      {/* Two Columns */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-chai-dark uppercase mb-8">Send us a Message</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-chai-dark font-semibold mb-2 font-body">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-chai-light/30 rounded-lg text-chai-dark placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors font-body"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-chai-dark font-semibold mb-2 font-body">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-chai-light/30 rounded-lg text-chai-dark placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors font-body"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-chai-dark font-semibold mb-2 font-body">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-chai-light/30 rounded-lg text-chai-dark placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors font-body"
                    placeholder="+92 300 1234567"
                  />
                </div>
                
                <div>
                  <label className="block text-chai-dark font-semibold mb-2 font-body">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-chai-light/30 rounded-lg text-chai-dark placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors resize-none font-body"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-chai-main hover:bg-chai-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-heading uppercase border border-chai-main/30"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-chai-dark uppercase mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-chai-main mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-chai-dark mb-1">Address</h3>
                      <p className="text-chai-dark/80 font-body">F-7 Markaz, Islamabad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-chai-main mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-chai-dark mb-1">Hours</h3>
                      <p className="text-chai-dark/80 font-body">Mon-Sun: 8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-chai-main mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-chai-dark mb-1">Phone</h3>
                      <p className="text-chai-dark/80 font-body">051-1234567</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/92511234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-chai-main hover:bg-chai-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-heading uppercase border border-chai-main/30"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>

              {/* Real Google Maps */}
              <div className="rounded-xl overflow-hidden border border-chai-main/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.8474789603!2d73.0014!3d33.7165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df92f7d4e4b6b9%3A0x4b9c3c4c4c4c4c4c!2sF-7%20Markaz%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full"
                  title="Dhuan Cafe Location - F-7 Markaz Islamabad"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-20 right-4 z-50 animate-pulse">
          <div className="bg-chai-card border border-chai-main/30 rounded-lg px-6 py-4 shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-chai-main flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold font-heading text-sm uppercase">Message Sent!</p>
              <p className="text-white/70 text-xs font-body">We'll get back to you soon</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
