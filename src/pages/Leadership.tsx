import LeadershipSection from '../components/Leadership';
import { motion } from 'motion/react';

export default function Leadership() {
  return (
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
  );
}
