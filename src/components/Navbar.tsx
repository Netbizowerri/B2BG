import { AnimatePresence, motion } from 'motion/react';
import {
  Calendar,
  ChevronRight,
  Heart,
  Home,
  Image,
  Info,
  Mail,
  Menu,
  Target,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Focus Areas', href: '/focus-areas', icon: Target },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Gallery', href: '/gallery', icon: Image },
  { name: 'Leadership', href: '/leadership', icon: Users },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const navTextColor = scrolled || !isHome ? 'text-primary' : 'text-white';
  const navBgColor = scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgColor}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={scrolled || !isHome ? 'https://i.ibb.co/xSn1R5Yy/B2BG.png' : 'https://i.ibb.co/SD27722F/B2BG-2.png'}
            alt="B2BG Logo"
            className="h-[64px] md:h-20 w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-accent hover:scale-[1.03] ${
                location.pathname === link.href ? 'text-accent' : navTextColor
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/donate" className="btn-primary py-2 px-6 text-sm">
            Donate
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={`md:hidden p-2 z-50 relative ${isOpen ? 'text-primary' : navTextColor}`}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white flex flex-col shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
            <div className="p-6 pt-24 flex-grow overflow-y-auto">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="https://i.ibb.co/xSn1R5Yy/B2BG.png"
                  alt="B2BG Logo"
                  className="h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                          location.pathname === link.href ? 'bg-accent/10 text-accent' : 'hover:bg-gray-50 text-primary'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              location.pathname === link.href
                                ? 'bg-accent text-white'
                                : 'bg-gray-100 group-hover:bg-accent group-hover:text-white'
                            }`}
                          >
                            <link.icon size={20} />
                          </div>
                          <span className="font-bold uppercase tracking-widest text-sm">{link.name}</span>
                        </div>
                        <ChevronRight
                          size={18}
                          className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/60 flex flex-col gap-4">
                <Link
                  to="/donate"
                  className="w-full btn-primary py-5 flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
                >
                  <Heart size={20} className="fill-white" />
                  <span className="text-lg font-black uppercase tracking-tighter">Support us now</span>
                </Link>
                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-[0.2em] font-bold">
                  Blessed2Bless Global Foundation
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
