import AboutSection from '../components/About';
import CoreValues from '../components/CoreValues';
import Awards from '../components/Awards';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function About() {
  return (
    <>
      <SeoMeta
        title="About Us | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Learn the B2BG story, mission, vision, values, and recognitions driving our humanitarian and development impact across communities."
        path="/about"
        image="https://i.ibb.co/tTJxpb1Y/B2BG-14.jpg"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About Us
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            Learn about our journey, our mission, and the values that drive our commitment to humanity.
          </p>
        </div>
        <AboutSection imageSrc="https://i.ibb.co/tTJxpb1Y/B2BG-14.jpg" />
        <CoreValues />
        <Awards />
      </div>
    </>
  );
}
