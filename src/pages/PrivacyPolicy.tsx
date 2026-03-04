import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <div className="bg-primary py-20 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Privacy Policy
        </motion.h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
          How we handle and protect your personal information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-slate prose-lg">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Blessed2Bless Global Empowerment Organisation ("B2BG", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Fill out a donation pledge form.</li>
            <li>Apply to become a volunteer.</li>
            <li>Contact us via our contact form or email.</li>
            <li>Subscribe to our newsletter.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            This information may include your name, email address, phone number, location, and any other details you choose to provide.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Process and manage your donation pledges.</li>
            <li>Review and respond to volunteer applications.</li>
            <li>Communicate with you regarding our programs, events, and impact.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect the security of any personal information we process. However, please remember that no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to read the privacy policies of any third-party site you visit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="font-bold text-primary">Blessed2Bless Global Foundation</p>
            <p className="text-gray-600">Email: info@b2bg.org</p>
            <p className="text-gray-600">Phone: +234 (0) 800 B2B HELP</p>
          </div>
        </section>
      </div>
    </div>
  );
}
