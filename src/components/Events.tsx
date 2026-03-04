import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const events = [
  {
    title: 'Climate Change Awareness',
    desc: 'A community-wide sensitization program on environmental sustainability and climate action.',
    image: 'https://i.ibb.co/K1fYWxq/B2BG-7.jpg',
  },
  {
    title: 'Church & Market Sensitization',
    desc: 'Reaching out to local communities in markets and religious centers to promote empowerment.',
    image: 'https://i.ibb.co/jvjq5DZy/B2BG-8.jpg',
  },
  {
    title: 'Workshops & Seminars',
    desc: 'Capacity building workshops for youth and women on skill acquisition and leadership.',
    image: 'https://i.ibb.co/8nJ2CK0x/B2BG-9.jpg',
  },
  {
    title: 'Touching Lives',
    desc: 'Our flagship humanitarian outreach providing medical support and food security.',
    image: 'https://i.ibb.co/RGzR9crL/B2BG-10.jpg',
  },
  {
    title: 'Stakeholder Tours',
    desc: 'Engaging with local leaders and stakeholders to foster national integration and development.',
    image: 'https://i.ibb.co/nNS2BR3q/B2BG-11.jpg',
  },
  {
    title: 'Awards & Recognitions',
    desc: 'Celebrating the achievements and impact of our volunteers and partners.',
    image: 'https://i.ibb.co/yBMVWM47/B2BG-12.jpg',
  },
  {
    title: 'Management Affairs',
    desc: 'Annual general meeting and strategic planning for the upcoming year.',
    image: 'https://i.ibb.co/CpmzJFzW/B2BG-13.jpg',
  },
];

interface EventsProps {
  limit?: number;
}

export default function Events({ limit }: EventsProps) {
  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <section id="events" className="section-padding bg-neutral-bg">
      <div className="text-center mb-16">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Upcoming Events</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">Join Our Activities</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedEvents.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all flex flex-col h-full interactive-card"
          >
            <div className="h-56 overflow-hidden relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                Event
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {event.title}
              </h4>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                {event.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {limit && (
        <div className="mt-16 text-center">
          <Link to="/events" className="btn-primary">
            View All Events
          </Link>
        </div>
      )}
    </section>
  );
}
