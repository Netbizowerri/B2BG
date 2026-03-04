import ProgramsSection from '../components/Programs';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function FocusAreas() {
  return (
    <>
      <SeoMeta
        title="Focus Areas | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Explore B2BG focus areas including capacity development, livelihood support, mechanized farming, health outreach, and climate initiatives."
        path="/focus-areas"
        image="https://i.ibb.co/v6F2F3MS/B2BG.jpg"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Focus Areas
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            Discover our core pillars of intervention designed to empower and transform communities across Nigeria.
          </p>
        </div>
        <ProgramsSection />
      </div>
    </>
  );
}
