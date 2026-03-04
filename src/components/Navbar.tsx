import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Target, Calendar, Mail, Heart, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Focus Areas', href: '/focus-areas', icon: Target },
  { name: 'Events', href: '/events', icon: Calendar },
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
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  const navTextColor = scrolled || !isHome ? 'text-primary' : 'text-white';
  const navBgColor = scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgColor}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={scrolled || !isHome ? "https://i.ibb.co/xSn1R5Yy/B2BG.png" : "https://i.ibb.co/SD27722F/B2BG-2.png"} 
            alt="B2BG Logo" 
            className="h-[64px] md:h-20 w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
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

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 z-50 relative ${isOpen ? 'text-primary' : navTextColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Tray */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col"
          >
            <div className="p-6 pt-24 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                        location.pathname === link.href 
                          ? 'bg-accent/10 text-accent' 
                          : 'hover:bg-gray-50 text-primary'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          location.pathname === link.href 
                            ? 'bg-accent text-white' 
                            : 'bg-gray-100 group-hover:bg-accent group-hover:text-white'
                        }`}>
                          <link.icon size={20} />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-sm">{link.name}</span>
                      </div>
                      <ChevronRight size={18} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


