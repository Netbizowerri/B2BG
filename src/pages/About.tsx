import AboutSection from '../components/About';
import CoreValues from '../components/CoreValues';
import Awards from '../components/Awards';
import { motion } from 'motion/react';

export default function About() {
  return (
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
      <AboutSection />
      <CoreValues />
      <Awards />
    </div>
  );
}

