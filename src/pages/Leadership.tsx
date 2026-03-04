import LeadershipSection from '../components/Leadership';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function Leadership() {
  return (
    <>
      <SeoMeta
        title="Leadership | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Meet the B2BG leadership team and officers guiding strategy, governance, and delivery of community-focused impact programs."
        path="/leadership"
        image="https://i.ibb.co/tTJxpb1Y/B2BG-14.jpg"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Leadership
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            Meet the dedicated team of visionaries and officers leading the B2BG movement.
          </p>
        </div>
        <LeadershipSection />
      </div>
    </>
  );
}
