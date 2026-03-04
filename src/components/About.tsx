import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const objectives = [
  'To provide humanitarian assistance to the less privileged.',
  'To empower women and youth through skill acquisition and capacity building.',
  'To promote climate change awareness and environmental sustainability.',
  'To support mechanised farming and food security initiatives.',
  'To provide community health outreach and medical support.',
  'To foster leadership development and national integration.',
  'To align with Sustainable Development Goals (SDGs) for community transformation.',
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: CEO Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://i.ibb.co/35HFcLSg/Untitled-design.jpg"
              alt="B2BG Vision"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-xl text-white hidden md:block">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm uppercase tracking-wider">Years of Impact</p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-accent font-bold uppercase tracking-widest mb-2">About B2BG</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            A Global Vision for Local Empowerment
          </h3>
          
          <div className="space-y-4 text-gray-600 mb-8">
            <p>
              Blessed2Bless Global Empowerment Organisation (B2BG) is a premier non-governmental organization dedicated to uplifting the vulnerable and fostering sustainable growth across Africa.
            </p>
            <p>
              Our mission is to provide succour to humanity through strategic interventions in education, healthcare, economic empowerment, and climate action. We believe in the dignity of every human being and work tirelessly to restore hope where it has been lost.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h4 className="font-bold text-primary mb-1">Our Mission</h4>
              <p className="text-xs text-gray-500">To empower communities through dignity and sustainable development.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-secondary">
              <h4 className="font-bold text-primary mb-1">Our Vision</h4>
              <p className="text-xs text-gray-500">A world where every individual has the opportunity to thrive.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Objectives Section - Redesigned to be visible and nice */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Our Objectives</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Strategic Pillars of Impact</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                <CheckCircle2 size={20} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {obj}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

