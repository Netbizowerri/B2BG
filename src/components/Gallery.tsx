import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const categories = [
  'All',
  'Climate Change Awareness',
  'Church & Market Sensitization',
  'Workshops & Seminars',
  'Touching Lives',
  'Stakeholder Tours',
  'Awards & Recognitions',
  'Management Affairs',
];

const images = [
  { id: 1, category: 'Climate Change Awareness', url: 'https://picsum.photos/seed/climate1/800/600' },
  { id: 2, category: 'Touching Lives', url: 'https://picsum.photos/seed/lives1/600/800' },
  { id: 3, category: 'Workshops & Seminars', url: 'https://picsum.photos/seed/workshop1/800/800' },
  { id: 4, category: 'Church & Market Sensitization', url: 'https://picsum.photos/seed/market1/800/600' },
  { id: 5, category: 'Stakeholder Tours', url: 'https://picsum.photos/seed/tour1/600/800' },
  { id: 6, category: 'Awards & Recognitions', url: 'https://picsum.photos/seed/award1/800/600' },
  { id: 7, category: 'Management Affairs', url: 'https://picsum.photos/seed/mgmt1/800/800' },
  { id: 8, category: 'Touching Lives', url: 'https://picsum.photos/seed/lives2/800/600' },
  { id: 9, category: 'Climate Change Awareness', url: 'https://picsum.photos/seed/climate2/600/800' },
  { id: 10, category: 'Workshops & Seminars', url: 'https://picsum.photos/seed/workshop2/800/600' },
  // Add more to reach 30+ in a real scenario
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="text-center mb-12">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Our Impact in Pictures</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">Gallery of Transformation</h3>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 text-sm font-medium transition-all relative ${
              activeTab === cat ? 'text-accent' : 'text-gray-500 hover:text-primary'
            }`}
          >
            {cat}
            {activeTab === cat && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
              />
            )}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(img.url)}
            >
              <img
                src={img.url}
                alt={img.category}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest bg-accent/80 px-3 py-1 rounded">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
