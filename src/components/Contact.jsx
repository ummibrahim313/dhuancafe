import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Coffee Street', 'Downtown Karachi, Pakistan', 'Near Empress Market']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92 21 1234567', '+92 300 1234567']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@dhuancafe.com', 'reservations@dhuancafe.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Thu: 8:00 AM - 11:00 PM', 'Fri-Sun: 8:00 AM - 1:00 AM']
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-chai-dark to-chai-card">
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
            <span className="text-gradient">Visit Us</span>
          </h2>
          <p className="text-chai-light/80 text-lg max-w-2xl mx-auto font-body">
            Experience the perfect blend of tradition and innovation at our cozy cafe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-chai-light mb-6 uppercase">Get in Touch</h3>
            
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-chai-main/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-chai-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chai-light mb-1 font-heading uppercase">{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-chai-light/70 text-sm font-body">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h4 className="font-semibold text-chai-light mb-4 font-heading uppercase">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 bg-chai-card/50 border border-chai-main/20 rounded-lg text-chai-light/70 hover:text-chai-main hover:border-chai-main transition-all duration-300 font-heading uppercase text-sm"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-chai-card/50 backdrop-blur-sm rounded-2xl p-8 border border-chai-main/20">
              <h3 className="font-heading text-2xl font-bold text-chai-light mb-6 uppercase">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-chai-card/50 border border-chai-main/20 rounded-lg text-chai-light placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors font-body"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-chai-card/50 border border-chai-main/20 rounded-lg text-chai-light placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors font-body"
                  />
                </div>
                
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 bg-chai-card/50 border border-chai-main/20 rounded-lg text-chai-light placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors font-body"
                />
                
                <select className="w-full px-4 py-3 bg-chai-card/50 border border-chai-main/20 rounded-lg text-chai-light focus:outline-none focus:border-chai-main transition-colors font-body">
                  <option value="" className="bg-chai-card">Select Inquiry Type</option>
                  <option value="reservation" className="bg-chai-card">Table Reservation</option>
                  <option value="catering" className="bg-chai-card">Catering Order</option>
                  <option value="feedback" className="bg-chai-card">Feedback</option>
                  <option value="general" className="bg-chai-card">General Inquiry</option>
                </select>
                
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-chai-card/50 border border-chai-main/20 rounded-lg text-chai-light placeholder-chai-light/50 focus:outline-none focus:border-chai-main transition-colors resize-none font-body"
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-chai-main text-chai-dark font-semibold rounded-lg hover:bg-chai-light transition-all duration-300 flex items-center justify-center gap-2 font-heading uppercase"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-chai-card/50 backdrop-blur-sm rounded-2xl p-8 border border-chai-main/20 text-center">
            <MapPin className="w-12 h-12 text-chai-main mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-chai-light mb-2 uppercase">Find Us Easily</h3>
            <p className="text-chai-light/70 mb-6 font-body">
              Located in the heart of Karachi's bustling downtown area
            </p>
            <button className="px-6 py-2 bg-chai-main text-chai-dark font-semibold rounded-lg hover:bg-chai-light transition-all duration-300 font-heading uppercase">
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
