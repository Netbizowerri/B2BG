import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/xSn1R5Yy/B2BG.png" 
                alt="B2BG Logo" 
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering lives, restoring hope, and transforming communities through sustainable development and humanitarian service across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/focus-areas" className="hover:text-accent transition-colors">Focus Areas</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">Our Events</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/leadership" className="hover:text-accent transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Support Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/donate" className="hover:text-accent transition-colors">Donate & Volunteer</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Partner With Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for the latest impact stories.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="min-w-0 flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="shrink-0 bg-accent p-2 rounded-lg hover:bg-opacity-90 transition-all">
                <Heart size={18} className="fill-white" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© {currentYear} B2BG Global Empowerment Organisation. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
