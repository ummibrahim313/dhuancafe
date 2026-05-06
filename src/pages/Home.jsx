import React from 'react';
import HeroNew from '../components/HeroNew';
import Marquee from '../components/Marquee';
import FeaturedMenu from '../components/FeaturedMenu';
import OurStory from '../components/OurStory';
import WhyDhuan from '../components/WhyDhuan';
import ChaiCustomizer from '../components/ChaiCustomizer';
import Testimonials from '../components/Testimonials';
import ReservationCTA from '../components/ReservationCTA';
import InstagramFeed from '../components/InstagramFeed';
import FAQ from '../components/FAQ';
import Menu from '../components/Menu';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <HeroNew />
      <Marquee />
      <FeaturedMenu />
      <OurStory />
      <WhyDhuan />
      <ChaiCustomizer />
      <Testimonials />
      <ReservationCTA />
      <FAQ />
      
    </div>
  );
};

export default Home;
