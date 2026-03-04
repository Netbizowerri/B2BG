import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, CheckCircle, X, Copy, Check, Users } from 'lucide-react';
import { sanitizeAmount, sanitizeEmail, sanitizePhone, sanitizeText } from '../utils/security';

interface DonationProps {
  showVolunteer?: boolean;
}

export default function Donation({ showVolunteer = true }: DonationProps) {
  const [donationStatus, setDonationStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [donationError, setDonationError] = useState<string | null>(null);
  const [volunteerError, setVolunteerError] = useState<string | null>(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDonationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDonationError(null);

    const formData = new FormData(e.currentTarget);
    const fullName = sanitizeText(String(formData.get('fullName') || ''), 80);
    const email = sanitizeEmail(String(formData.get('email') || ''));
    const phone = sanitizePhone(String(formData.get('phone') || ''));
    const amount = sanitizeAmount(String(formData.get('amount') || ''));

    if (!fullName || !email || !phone || !amount) {
      setDonationError('Please enter valid details before submitting your pledge.');
      return;
    }

    setDonationStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDonationStatus('success');
    e.currentTarget.reset();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolunteerError(null);

    const formData = new FormData(e.currentTarget);
    const fullName = sanitizeText(String(formData.get('fullName') || ''), 80);
    const email = sanitizeEmail(String(formData.get('email') || ''));
    const phone = sanitizePhone(String(formData.get('phone') || ''));
    const location = sanitizeText(String(formData.get('location') || ''), 80);
    const area = sanitizeText(String(formData.get('area') || ''), 60);
    const message = sanitizeText(String(formData.get('motivation') || ''), 700);

    if (!fullName || !email || !phone || !location || !area || !message) {
      setVolunteerError('Please complete all fields with valid information.');
      return;
    }

    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    e.currentTarget.reset();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="bg-primary py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Heart className="fill-accent" size={20} />
              Support Our Cause
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Partner With Us To Give Succour To Humanity
            </h3>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Your donation helps us provide education, healthcare, and sustainable livelihood support to those who need it most. Every contribution, no matter the size, makes a significant impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  setIsDonationModalOpen(true);
                  setDonationStatus('idle');
                  setDonationError(null);
                }}
                className="btn-primary flex items-center gap-2"
              >
                <Heart size={20} className="fill-white" />
                Support Our Cause
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            {/* Image Collage */}
            <div className="absolute top-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-primary">
              <img 
                src="https://i.ibb.co/jvYZk4fJ/6c137a11-4def-4bf6-b3ac-a479adf1d390.png" 
                alt="Touching Lives 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-primary">
              <img 
                src="https://i.ibb.co/hRSxgfjz/c8039b7b-31bf-45ed-9d75-5f94fc765a99.png" 
                alt="Touching Lives 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/4 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-primary">
              <img 
                src="https://i.ibb.co/5xRfh053/c8989ae9-282f-41a7-8b54-443577263f2f.png" 
                alt="Touching Lives 3" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center z-40 shadow-lg">
              <span className="text-white font-bold text-center leading-tight text-xs uppercase tracking-tighter">
                Touching<br/>Lives
              </span>
            </div>
          </motion.div>
        </div>

        {/* Volunteer Section Integrated */}
        {showVolunteer && (
          <div className="pt-24 border-t border-white/10">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Join the Movement</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Become a Volunteer</h3>
                <p className="text-white/60 mb-8 leading-relaxed max-w-2xl">
                  Use your skills and passion to make a difference in the lives of others. Whether you're an expert in your field or just looking to help, we have a place for you. Join our global network of change-makers today.
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-10">
                  {['Community Outreach', 'Education & Literacy', 'Health Support', 'Climate Action'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex justify-center lg:justify-end"
              >
                <button 
                  onClick={() => {
                    setIsVolunteerModalOpen(true);
                    setStatus('idle');
                    setVolunteerError(null);
                  }}
                  className="group relative inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-tighter text-lg hover:bg-accent hover:text-white transition-all shadow-2xl shadow-black/20"
                >
                  Apply to Volunteer
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Donation Modal */}
      <AnimatePresence>
        {isDonationModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDonationModalOpen(false)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl text-primary max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setIsDonationModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                    <Heart size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Support Our Cause</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Donation Pledge</p>
                  </div>
                </div>

                {donationStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-2">Pledge Received!</h4>
                    <p className="text-gray-500 max-w-md mx-auto">Thank you for your generous pledge. Our team will contact you shortly with further instructions on how to complete your donation.</p>
                    <button
                      onClick={() => setDonationStatus('idle')}
                      className="mt-8 text-accent font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Make another pledge
                    </button>
                  </motion.div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Form Side */}
                    <div>
                      <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                        Your Information
                      </h5>
                      <form onSubmit={handleDonationSubmit} className="space-y-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                          <input
                            required
                            name="fullName"
                            minLength={2}
                            maxLength={80}
                            type="text"
                            placeholder="John Doe"
                            className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                          <input
                            required
                            name="email"
                            maxLength={254}
                            type="email"
                            placeholder="john@example.com"
                            className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                          <input
                            required
                            name="phone"
                            minLength={7}
                            maxLength={24}
                            type="tel"
                            placeholder="+234 ..."
                            className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Proposed Amount (NGN)</label>
                          <input
                            required
                            name="amount"
                            min={1}
                            type="number"
                            placeholder="50,000"
                            className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-bold text-lg"
                          />
                        </div>
                        <button
                          disabled={donationStatus === 'submitting'}
                          type="submit"
                          className="w-full btn-primary py-5 flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-accent/20 mt-4"
                        >
                          {donationStatus === 'submitting' ? 'Submitting...' : (
                            <>
                              Submit Pledge
                              <Send size={20} />
                            </>
                          )}
                        </button>
                      </form>
                      {donationError && (
                        <p className="mt-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg px-4 py-3">
                          {donationError}
                        </p>
                      )}
                    </div>

                    {/* Bank Details Side */}
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                      <h5 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-xs">2</span>
                        Bank Details
                      </h5>
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Bank Name</p>
                          <p className="text-md font-bold">Zenith Bank PLC</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Account Name</p>
                          <p className="text-md font-bold uppercase">Blessed2Bless Global Foundation</p>
                        </div>
                        <div className="relative group p-4 bg-white rounded-xl border border-gray-200">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Account Number</p>
                          <div className="flex items-center justify-between">
                            <p className="text-2xl font-black tracking-wider text-accent">1234567890</p>
                            <button 
                              type="button"
                              onClick={() => copyToClipboard('1234567890')}
                              className="p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                            >
                              {copied ? <Check size={16} /> : <Copy size={16} />}
                            </button>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-xs text-gray-500 leading-relaxed">
                            <span className="font-bold text-primary block mb-1">Note:</span>
                            This is a pledge form. Once submitted, our administrators will reach out to you to confirm and provide any additional support needed for the transfer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Volunteer Modal */}
      <AnimatePresence>
        {isVolunteerModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVolunteerModalOpen(false)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl text-primary max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setIsVolunteerModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                    <Users size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Volunteer Application</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Join Our Team</p>
                  </div>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-2">Application Received!</h4>
                    <p className="text-gray-500">Thank you for your interest in volunteering with B2BG. We will contact you shortly.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-accent font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input
                        required
                        name="fullName"
                        minLength={2}
                        maxLength={80}
                        type="text"
                        placeholder="John Doe"
                        className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                      <input
                        required
                        name="email"
                        maxLength={254}
                        type="email"
                        placeholder="john@example.com"
                        className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input
                        required
                        name="phone"
                        minLength={7}
                        maxLength={24}
                        type="tel"
                        placeholder="+234 ..."
                        className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</label>
                      <input
                        required
                        name="location"
                        minLength={2}
                        maxLength={80}
                        type="text"
                        placeholder="Lagos, Nigeria"
                        className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Area of Interest</label>
                      <select
                        required
                        name="area"
                        className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none"
                      >
                        <option value="">Select an area</option>
                        <option value="education">Education & Literacy</option>
                        <option value="health">Health Outreach</option>
                        <option value="climate">Climate Action</option>
                        <option value="empowerment">Economic Empowerment</option>
                        <option value="admin">Administrative Support</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message / Motivation</label>
                      <textarea
                        name="motivation"
                        required
                        minLength={10}
                        maxLength={700}
                        rows={4}
                        placeholder="Tell us why you want to join B2BG..."
                        className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                      />
                    </div>
                    {volunteerError && (
                      <p className="md:col-span-2 text-sm font-medium text-red-700 bg-red-100 rounded-lg px-4 py-3">
                        {volunteerError}
                      </p>
                    )}
                    <div className="md:col-span-2 mt-4">
                      <button
                        disabled={status === 'submitting'}
                        type="submit"
                        className="w-full btn-primary py-5 flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-accent/20"
                      >
                        {status === 'submitting' ? 'Submitting...' : (
                          <>
                            Submit Application
                            <Send size={20} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
