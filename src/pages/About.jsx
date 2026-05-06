import team1 from '../assets/images/about/team1.jpeg';
import team2 from '../assets/images/about/team2.jpeg';
import team3 from '../assets/images/about/team3.jpeg';
import space1 from '../assets/images/about/space1.jpeg';
import space2 from '../assets/images/about/space2.jpeg';
import space3 from '../assets/images/about/space3.jpeg';
import space4 from '../assets/images/about/space4.jpeg';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Heart, Award, Camera, ZoomIn } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    {
      year: '2024',
      title: 'The Beginning',
      description: 'Dhuan Cafe was born from a passion to blend traditional Pakistani chai culture with modern coffee craftsmanship.'
    },
    {
      year: '2024',
      title: 'Opening Day',
      description: 'We opened our doors in F-7 Islamabad, bringing a unique "Desi Meets Modern" concept to life.'
    },
    {
      year: '2024',
      title: 'Growing Community',
      description: 'Built a loyal community of chai and coffee lovers who appreciate quality and authenticity.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Khan',
      role: 'Founder & Owner',
      description: 'Passionate about bringing authentic chai culture to the modern generation.',
      image: team1
    },
    {
      name: 'Sara Malik',
      role: 'Head Barista',
      description: 'Expert in both traditional chai brewing and modern coffee techniques.',
      image: team2
    },
    {
      name: 'Bilal Hussain',
      role: 'Executive Chef',
      description: 'Creates perfect desi bites that complement our premium beverages.',
      image: team3
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We stay true to traditional recipes while embracing innovation.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Creating a warm space where culture meets conversation.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Only the finest ingredients and expert craftsmanship in every cup.'
    },
    {
      icon: Coffee,
      title: 'Passion',
      description: 'Driven by love for chai, coffee, and the stories they tell.'
    }
  ];

  // ✅ Fixed: actual imported images instead of numbers
  const galleryImages = [space1, space2, space3, space4];

  return (
    <div className="min-h-screen bg-chai-bg">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=600&fit=crop&auto=format)' }}>
        <div className="absolute inset-0 bg-chai-dark/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-4"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-chai-light text-base sm:text-lg max-w-2xl mx-auto font-body"
          >
            Discover our story, passion for chai, and journey of Dhuan Cafe
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <div className="inline-block mb-4 md:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-chai-main rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <span className="font-heading text-base sm:text-lg font-bold text-white uppercase">{item.year}</span>
                  </div>
                </div>
                <div className="max-w-md mx-auto md:mx-0">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-chai-dark uppercase mb-2">{item.title}</h3>
                  <p className="text-chai-dark/80 font-body leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-chai-dark uppercase mb-4">MEET THE TEAM</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-chai-main/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-chai-dark uppercase mb-2">{member.name}</h3>
                <div className="text-chai-main font-semibold mb-3">{member.role}</div>
                <p className="text-chai-dark/80 font-body">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-chai-dark uppercase mb-4">OUR VALUES</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-chai-main/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-chai-main" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-chai-dark uppercase mb-2">{value.title}</h3>
                  <p className="text-chai-dark/80 font-body text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-20 px-4 bg-chai-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-white uppercase mb-4">OUR SPACE</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-lg overflow-hidden group"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;