import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">We'd Love to Hear From You</h3>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-primary mb-1">Our Office</h4>
                <p className="text-gray-500 text-sm leading-relaxed">201, Old Ojo Road, Pako Bus Stop, Agboju, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-primary mb-1">Phone Number</h4>
                <p className="text-gray-500 text-sm">+234 816 747 0537</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-primary mb-1">Email Address</h4>
                <p className="text-gray-500 text-sm break-all md:break-normal">blessed2blessglobalfoundation@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors shrink-0"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Map Iframe */}
          <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-inner border border-gray-100 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.654763116565!2d3.2842!3d6.4384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMTguMiJOIDPCsDE3JzAzLjEiRQ!5e0!3m2!1sen!2sng!4v1646280000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-bg p-6 md:p-12 rounded-3xl w-full"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea
                rows={6}
                placeholder="Your message here..."
                className="p-4 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none w-full"
              />
            </div>
            <button type="submit" className="w-full btn-primary py-4">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>

  );
}
