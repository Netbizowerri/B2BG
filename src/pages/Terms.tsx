import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-20">
      <div className="bg-primary py-20 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Terms & Conditions
        </motion.h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto px-6">
          The rules and guidelines for using our website and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 prose prose-slate prose-lg">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using the Blessed2Bless Global Empowerment Organisation (B2BG) website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Use of the Website</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Harassing or causing distress or inconvenience to any person.</li>
            <li>Transmitting obscene or offensive content.</li>
            <li>Disrupting the normal flow of dialogue within the website.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of B2BG or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any part of this website without our express written consent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Donation Pledges</h2>
          <p className="text-gray-600 leading-relaxed">
            When you submit a donation pledge through our website, you are expressing a voluntary intent to support our cause. B2BG will contact you to facilitate the completion of your donation. We reserve the right to refuse any donation pledge at our discretion.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            B2BG will not be liable for any damages of any kind arising from the use of this website, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website following any changes signifies your acceptance of the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
