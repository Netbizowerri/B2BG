import DonationSection from '../components/Donation';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function Donate() {
  return (
    <>
      <SeoMeta
        title="Donate | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Support B2BG programs through donations and volunteer participation to expand education, health, and empowerment initiatives."
        path="/donate"
        image="https://i.ibb.co/RGzR9crL/B2BG-10.jpg"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Support Our Mission
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            Your generosity fuels our impact. Partner with us to give succour to humanity.
          </p>
        </div>
        <DonationSection />
      </div>
    </>
  );
}
