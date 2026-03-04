import { motion } from 'motion/react';

const awards = [
  {
    year: '2024',
    title: 'Excellence in Humanitarian Service',
    desc: 'Recognized by the National NGO Council for outstanding impact in rural communities.',
    image: 'https://picsum.photos/seed/award2024/400/300',
  },
  {
    year: '2023',
    title: 'Climate Action Champion',
    desc: 'Awarded for our extensive tree-planting and environmental sensitization campaigns.',
    image: 'https://picsum.photos/seed/award2023/400/300',
  },
  {
    year: '2022',
    title: 'SDG Integration Award',
    desc: 'Honored for aligning community programs with global sustainability goals.',
    image: 'https://picsum.photos/seed/award2022/400/300',
  },
  {
    year: '2021',
    title: 'Community Empowerment Leader',
    desc: 'Recognized for our skill acquisition programs that empowered over 5,000 youth.',
    image: 'https://picsum.photos/seed/award2021/400/300',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section-padding bg-white">
      <div className="text-center mb-16">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Recognitions</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">Our Journey of Excellence</h3>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-accent/20 hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {awards.map((award, i) => (
            <motion.div
              key={award.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className={`flex flex-col ${i % 2 !== 0 ? 'md:items-end md:text-right' : ''}`}>
                  <span className="text-5xl font-bold text-accent/20 mb-2">{award.year}</span>
                  <h4 className="text-2xl font-bold text-primary mb-4">{award.title}</h4>
                  <p className="text-gray-600 leading-relaxed max-w-md">
                    {award.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="relative z-10 hidden md:block">
                <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-md" />
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
