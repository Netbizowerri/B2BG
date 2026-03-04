import GallerySection from '../components/Gallery';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <>
      <SeoMeta
        title="Gallery | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Browse the B2BG photo gallery featuring programs, events, leadership moments, and impact stories across our outreach activities."
        path="/gallery"
        image="https://i.ibb.co/K1fYWxq/B2BG-7.jpg"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Photo Gallery
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            A visual record of our impact, outreaches, and the lives we've touched.
          </p>
        </div>
        <GallerySection />
      </div>
    </>
  );
}
