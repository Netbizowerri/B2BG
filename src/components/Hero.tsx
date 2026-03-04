import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://i.ibb.co/PzJ8y0ct/B2BG-5.jpg',
    title: 'Empowering Lives. Restoring Hope.',
    subtitle: 'Transforming Communities.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1920',
    title: 'Climate Awareness & Action',
    subtitle: 'Protecting our planet for future generations.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1920',
    title: 'Sustainable Development',
    subtitle: 'Building a better Africa through people-centered initiatives.',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <motion.img
          src={slides[0].image}
          alt="Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-12 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-5xl leading-tight"
        >
          Empowering Lives. <br />
          <span className="text-accent">Restoring Hope.</span> <br />
          Transforming Communities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl"
        >
          Africa’s people-centered humanitarian organization committed to dignity, empowerment and sustainable development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/donate" className="btn-primary flex items-center justify-center gap-2">
            Support us
          </Link>
          <Link to="/about" className="btn-outline flex items-center justify-center gap-2">
            About us
          </Link>
        </motion.div>
      </div>


      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
