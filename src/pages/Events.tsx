import EventsSection from '../components/Events';
import SeoMeta from '../components/SeoMeta';
import { motion } from 'motion/react';

export default function Events() {
  return (
    <>
      <SeoMeta
        title="Events | Blessed2Bless Global Empowerment Organisation (B2BG)"
        description="Stay updated with B2BG activities, workshops, stakeholder tours, outreach campaigns, and community empowerment events."
        path="/events"
        image="https://i.ibb.co/RGzR9crL/B2BG-10.jpg"
      />
      <div className="pt-20">
        <div className="bg-primary py-20 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Events
          </motion.h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
            Stay updated with our latest activities, workshops, and community outreaches across Nigeria.
          </p>
        </div>
        <EventsSection />
      </div>
    </>
  );
}
