import { motion } from 'motion/react';
import { Award, Medal, Trophy } from 'lucide-react';

const recognitions = [
  {
    title: 'Eminent Peace Ambassador and Global Diplomat Membership',
    date: 'February 6, 2021',
    location: 'Ilorin, Kwara State, Nigeria',
    description:
      'In recognition of her positive contributions to societal peace through regular outreaches and vigorous campaigns for peace, community consciousness of safety rules, and maintenance of a crime- and violence-free society, the International Association of World Peace Advocates (United Nations ECOSOC Special Consultative Status since 2019 and signatory to the UN School Commitment to the SDG) granted DCNS. Amb. Dr. Felicia Arigo full membership status as an Eminent Peace Ambassador and Global Diplomat.',
  },
  {
    title: 'Honorary Doctorate (D.Sc) in Leadership and Corporate Governance',
    date: 'June 19, 2021',
    location: 'Lagos Airport Hotel, Nigeria',
    description:
      'Special recognition of Blessed2Bless Global Empowerment Foundation (B2BG) and conferment of an Honorary Doctorate Degree (D.Sc) in Leadership and Corporate Governance by European-American University (EAU) to its International President/CEO, DCNS. Amb. Dr. Felicia Arigo.',
  },
  {
    title: 'Fellowship - Centre for Public Service Productivity and Development',
    date: 'September 13, 2022',
    location: 'Sheraton Hotel, Ikeja, Lagos, Nigeria',
    description:
      'Massive congratulations to our International President, PST. Amb. Dr. Felicia Arigo, who was elected a Fellow of the prestigious Centre for Public Service Productivity and Development in recognition of her professional standing and demonstrated commitment to creating, maintaining, extending, and promoting high global standards in productivity and economic growth.',
  },
  {
    title: 'Conferment of CIMC and CHMC Titles',
    date: 'February 23, 2021',
    location: 'Recognized in over 40 countries',
    description:
      'The International President of Blessed2Bless Global Empowerment Foundation (B2BG), Amb. Felicia Arigo, was conferred with the prestigious titles of CIMC and CHMC by the Institute of Management Consultants, with all rights and privileges and international recognition.',
  },
  {
    title: '2021 African Leadership Award - Beacon of Hope for African Development',
    date: 'September 23, 2021',
    location: 'Nigeria',
    description:
      'Special recognition of Blessed2Bless Global Empowerment Foundation (B2BG) and conferment of the 2021 African Leadership Award as "Beacon of Hope for African Development" to its International President/CEO, DCNS. Amb. Dr. Felicia Arigo.',
  },
  {
    title: 'Recognition in "100 Audacious Nigerian Women"',
    date: 'December 15, 2022',
    location: 'Lagos Chamber of Commerce and Industries (LCC), Ikeja, Lagos',
    description:
      'Massive congratulations to B2BG worldwide, as our International President, PST. Amb. Dr. Felicia Arigo, was recognized and featured in the book "100 Audacious Nigerian Women," with the book launch held at the LCC Conference Hall and copies becoming a staple on shelves of foreign embassies in Nigeria.',
  },
  {
    title: 'International Day of Charity Certificate',
    date: 'September 8, 2021',
    location: 'NAF Headquarters, Kado',
    description:
      'Certificate issued on International Day of Charity on September 8, 2021 at NAF Headquarters, Kado.',
  },
];

const icons = [Trophy, Medal, Award];

export default function Awards() {
  return (
    <section id="awards" className="section-padding bg-gradient-to-b from-white to-neutral-bg">
      <div className="text-center mb-14">
        <h2 className="text-accent font-bold uppercase tracking-widest mb-2">Recognitions</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">Our Journey of Excellence</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recognitions.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group rounded-2xl border border-accent/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg interactive-card"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-primary/5 text-primary px-3 py-1 rounded-full">
                  #{index + 1}
                </span>
              </div>

              <h4 className="text-lg md:text-xl font-bold text-primary mb-3 leading-snug">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {item.date}
                </span>
                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {item.location}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
