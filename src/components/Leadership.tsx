import { motion } from 'motion/react';
import { Briefcase, Shield, Scale, UserRound } from 'lucide-react';

const founder = {
  name: 'DCNS. AMB. DR. FELICIA ARIGO',
  title: 'Founder / CEO',
  image: 'https://i.ibb.co/tTJxpb1Y/B2BG-14.jpg',
};

const officers = [
  { id: 2, name: 'ENOCH OISE-OARHE', title: 'VICE PRESIDENT / GENERAL SECRETARY' },
  { id: 3, name: 'GOODNESS FESTUS', title: 'TREASURER' },
  { id: 4, name: 'DCNS. AUGUSTA OBI', title: 'FINANCIAL SECRETARY' },
  { id: 5, name: 'BARR. SAMUEL ETAIFO', title: 'LEGAL ADVISER 1' },
  { id: 6, name: 'FEMI ASEKUN Esq', title: 'LEGAL ADVISER 2' },
  { id: 7, name: 'BARR. ENE IDOKO', title: 'LEGAL ADVISER 3' },
  {
    id: 8,
    name: 'PST. (MRS) MABEL AMOBI',
    title: 'DIRECTOR OF ETHICS & PROTOCOL / CHAIRMAN ADVISORY COMMITTEE / CHRISTIAN PRAYER LEADER',
  },
  { id: 9, name: 'ILIYASU MUSA', title: 'DIRECTOR OF PROJECTS / MUSLIM PRAYER LEADER' },
  {
    id: 10,
    name: 'OGBUABOR JONAS',
    title: 'DIRECTOR OF DISBURSEMENT / MONITORING & IMPLEMENTATION',
  },
  {
    id: 11,
    name: 'PRINCESS BUKKY ABIKE OLUDERU',
    title: 'CHAIRMAN CONFLICT RESOLUTION COMMITTEE',
  },
  { id: 12, name: 'ALH. ABDULMALIK HUSSAIN', title: 'DIRECTOR OF FUNDS MOBILIZATION' },
  { id: 13, name: 'OGUNDIPE OLUWASEUN TEMITAYO', title: 'HEAD OF SECURITY' },
  {
    id: 14,
    name: 'HAJIYA HAULATU MUHAMMAD',
    title: 'DIRECTOR OF GENDER ADVOCACY AND MAINSTREAMING',
  },
  { id: 15, name: 'BLESSING SOLOMON', title: 'DIRECTOR OF WELFARE' },
  {
    id: 16,
    name: 'OSMOND ELIAS CHUKWUDOZIE',
    title: 'DIRECTOR OF TRAINING & ENTREPRENEURSHIP',
  },
  { id: 17, name: 'NWANI CHUKWUNWEOLU', title: 'DIRECTOR OF MEDIA & PUBLICITY' },
  {
    id: 18,
    name: 'HAJIYA FATIMA MUHAMMED',
    title: 'DIRECTOR OF MONITORING AND POLICY COMPLIANCE',
  },
  {
    id: 19,
    name: 'HENRY NWABUDIKE',
    title: 'HEAD OF UTILITY & INFRASTRUCTURE MAINTENANCE',
  },
  { id: 20, name: 'ENGR. DAFE EVUEN', title: 'ASSISTANT DIRECTOR OF PROJECTS' },
];

const officerIcons = [Briefcase, Scale, Shield, UserRound];

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
          className="text-center bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-accent/15"
        >
          <div className="w-60 h-60 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl mb-8">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-2">{founder.name}</h4>
          <p className="text-accent font-semibold uppercase tracking-widest mb-5">{founder.title}</p>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <div className="bg-neutral-bg p-6 rounded-2xl border border-accent/10 text-gray-600 leading-relaxed italic">
            "Leading with compassion, strategy, and integrity to create sustainable impact for communities across Africa."
          </div>
        </motion.div>
      </div>

      {/* Leadership Council Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {officers.map((officer, i) => (
          <motion.div
            key={officer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.06 }}
            whileHover={{ y: -4 }}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group hover:border-accent/40 hover:shadow-lg transition-all interactive-card"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-xs font-bold">
                {officer.id}
              </span>
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                {(() => {
                  const Icon = officerIcons[i % officerIcons.length];
                  return <Icon size={18} />;
                })()}
              </div>
            </div>
            <div>
              <h5 className="font-bold text-primary text-sm md:text-base mb-2 leading-snug">{officer.name}</h5>
              <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-wide leading-relaxed">
                {officer.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
