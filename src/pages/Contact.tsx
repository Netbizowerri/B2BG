import ContactSection from '../components/Contact';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <>
      <SeoMeta
        title="Contact Us | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Contact B2BG to partner, volunteer, or request support. Reach our team for collaboration, inquiries, and community engagement."
        path="/contact"
        image="https://i.ibb.co/xSn1R5Yy/B2BG.png"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Contact Us
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            Have questions or want to partner with us? Reach out today.
          </p>
        </div>
        <ContactSection />
      </div>
    </>
  );
}
