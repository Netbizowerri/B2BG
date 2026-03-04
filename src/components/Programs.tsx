import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Economic Empowerment',
    desc: 'Financial literacy and micro-grants for small business owners.',
    image: 'https://i.ibb.co/v6F2F3MS/B2BG.jpg',
  },
  {
    title: 'Capacity Development',
    desc: 'Vocational training and skill acquisition workshops for youth.',
    image: 'https://i.ibb.co/2YN5hfCf/B2BG-1.jpg',
  },
  {
    title: 'Livelihood Support',
    desc: 'Providing essential resources to vulnerable families and individuals.',
    image: 'https://i.ibb.co/gF4c7JSg/B2BG-2.jpg',
  },
  {
    title: 'Mechanised Farming',
    desc: 'Modern agricultural tools and training for local farmers.',
    image: 'https://i.ibb.co/Zp0DWw0W/B2BG-3.jpg',
  },
  {
    title: 'Community Health Outreach',
    desc: 'Free medical checkups, drugs, and health sensitization programs.',
    image: 'https://i.ibb.co/V0wKN3gP/B2BG-4.jpg',
  },
  {
    title: 'Climate & Green Initiatives',
    desc: 'Tree planting and environmental awareness campaigns.',
    image: 'https://i.ibb.co/d4NMPbR1/B2BG-5.jpg',
  },
  {
    title: 'SDG-Based Development',
    desc: 'Targeted programs aligned with UN Sustainable Development Goals.',
    image: 'https://i.ibb.co/wFjkGXgT/B2BG-6.jpg',
  },
];

interface ProgramsProps {
  limit?: number;
}

export default function Programs({ limit }: ProgramsProps) {
  const displayedPrograms = limit ? programs.slice(0, limit) : programs;

  return (
    <section id="programs" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Our Foundation</h2>
        <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
          Our Focus Areas
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPrograms.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all interactive-card"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">{program.title}</h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{program.desc}</p>
              <Link
                to="/donate"
                className="inline-block text-accent font-bold uppercase tracking-wider text-xs border-b-2 border-accent pb-1 hover:text-primary hover:border-primary transition-colors interactive-btn"
              >
                Support This Program
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {limit && (
        <div className="mt-16 text-center">
          <Link to="/focus-areas" className="btn-primary">
            View All Programs
          </Link>
        </div>
      )}
    </section>
  );
}
