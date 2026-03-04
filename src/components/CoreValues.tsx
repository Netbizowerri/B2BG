import { motion } from 'motion/react';
import { Heart, Scale, UserCheck, Zap, ShieldCheck, Leaf, HandHeart, Users } from 'lucide-react';

const values = [
  { name: 'Compassion', icon: Heart, desc: 'Deep sympathy and concern for the sufferings of others.' },
  { name: 'Equity', icon: Scale, desc: 'Fairness and justice in the way people are treated.' },
  { name: 'Human Dignity', icon: UserCheck, desc: 'Respecting the inherent worth of every individual.' },
  { name: 'Empowerment', icon: Zap, desc: 'Enabling people to take control of their own lives.' },
  { name: 'Integrity', icon: ShieldCheck, desc: 'Honesty and strong moral principles in all actions.' },
  { name: 'Sustainability', icon: Leaf, desc: 'Meeting current needs without compromising the future.' },
  { name: 'Faith-Inspired', icon: HandHeart, desc: 'Driven by values of love, hope, and service.' },
  { name: 'Love', icon: Users, desc: 'Unconditional care for humanity and community.' },
];

export default function CoreValues() {
  return (
    <section className="bg-neutral-bg py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Our Foundation</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Core Values We Stand By</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', borderColor: '#B57A3F' }}
              className="bg-white p-8 rounded-2xl border border-transparent transition-all group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <value.icon className="text-accent group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{value.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
