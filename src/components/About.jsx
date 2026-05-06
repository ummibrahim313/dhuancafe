import React from 'react';
import { Heart, Award, Users, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Traditional Roots',
      description: 'Honoring centuries-old Pakistani chai traditions with authentic recipes and techniques passed down through generations.'
    },
    {
      icon: Award,
      title: 'Modern Excellence',
      description: 'Combining traditional flavors with contemporary coffee craftsmanship and innovative brewing methods.'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'Creating a warm, welcoming space where culture meets conversation, and every cup tells a story.'
    },
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'Sourcing the finest tea leaves and coffee beans from around the world, ensuring exceptional taste in every sip.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-chai-dark">
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
            <span className="text-gradient">Our Story</span>
          </h2>
          <p className="text-chai-light/80 text-lg max-w-3xl mx-auto font-body">
            Dhuan Cafe was born from a passion to bridge two worlds - the rich, aromatic heritage of Pakistani chai culture 
            and the sophisticated art of modern coffee craftsmanship.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-3xl font-bold text-chai-light mb-6 uppercase">
              Desi Meets Modern
            </h3>
            <div className="space-y-4 text-chai-light/80 leading-relaxed font-body">
              <p>
                In every corner of Pakistan, the aroma of boiling chai fills the air - a tradition that brings families together, 
                sparks conversations, and creates moments of connection. At Dhuan Cafe, we honor this cherished heritage while 
                embracing the global coffee revolution.
              </p>
              <p>
                Our name "Dhuan" (smoke/vapor) represents the mystical steam rising from a freshly brewed cup, carrying with it 
                stories of tradition, innovation, and the perfect blend of cultures. Every sip is a journey through time - from the 
                ancient tea gardens of the Himalayas to modern espresso bars.
              </p>
              <p>
                We believe that great beverages have the power to transcend boundaries, creating moments of pure bliss whether 
                you're savoring a traditional Karak Chai or exploring our innovative fusion creations.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-chai-main/20 to-chai-light/20 rounded-2xl p-8 backdrop-blur-sm border border-chai-main/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-chai-main mb-2">50+</div>
                  <div className="text-chai-light/70 text-sm font-body">Chai Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-chai-light mb-2">25+</div>
                  <div className="text-chai-light/70 text-sm font-body">Coffee Creations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-chai-main mb-2">100%</div>
                  <div className="text-chai-light/70 text-sm font-body">Authentic Recipes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-chai-main mb-2">5★</div>
                  <div className="text-chai-light/70 text-sm font-body">Customer Rating</div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-chai-light/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-chai-main/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
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
                className="bg-chai-card/50 backdrop-blur-sm rounded-xl p-6 text-center card-hover border border-chai-main/20"
              >
                <div className="w-16 h-16 bg-chai-main/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-chai-main" />
                </div>
                <h4 className="font-semibold text-chai-light mb-2 font-heading uppercase">{feature.title}</h4>
                <p className="text-chai-light/70 text-sm leading-relaxed font-body">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
