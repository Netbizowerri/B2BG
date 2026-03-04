import { motion } from 'motion/react';

const officers = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Officer ${i + 1}`,
  title: 'National Officer',
  image: `https://i.pravatar.cc/300?u=officer${i + 1}`,
}));

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-neutral-bg">
      <div className="text-center mb-16">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Our Leadership</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">The Visionaries Behind B2BG</h3>
      </div>

      {/* CEO Spotlight */}
      <div className="max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
              alt="CEO"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h4 className="text-3xl font-bold text-primary mb-1">Dr. Blessed John Doe</h4>
          <p className="text-accent font-semibold uppercase tracking-widest mb-6">Founder & CEO</p>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <div className="bg-white p-8 rounded-2xl shadow-sm text-gray-600 leading-relaxed italic">
            "Our commitment to humanity is unwavering. We believe that by empowering one individual, we are transforming an entire community. B2BG is more than an organization; it is a movement of hope and restoration for Africa."
          </div>
        </motion.div>
      </div>

      {/* National Officers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {officers.map((officer, i) => (
          <motion.div
            key={officer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 5) * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm group hover:border-accent transition-all"
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img
                src={officer.image}
                alt={officer.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center">
              <h5 className="font-bold text-primary text-sm mb-1">{officer.name}</h5>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest">{officer.title}</p>
              <div className="w-0 h-0.5 bg-accent mx-auto mt-2 group-hover:w-12 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
