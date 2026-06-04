import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Veltrix Consultant',
  description: 'How we collect, use, and protect your professional data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="section-wrapper bg-[var(--bg-primary)]">
        <div className="section-inner max-w-[800px]">
          <div className="mb-16">
            <span className="label-tag mb-4 inline-flex">Legal</span>
            <h1 className="apple-headline mb-4">Privacy Policy</h1>
            <p className="apple-subhead">Last Updated: April 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12 text-[var(--text-primary)]">
            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">1. Introduction</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                Veltrix Consultant ("we," "our," or "us") is committed to protecting the privacy and confidentiality of our clients and website visitors. This Privacy Policy outlines how we collect, use, and protect the professional data you provide when accessing our econometric analysis, Intel Vault, or requesting an HS Snapshot.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">2. Information We Collect</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)] mb-4">
                To provide our core intelligence products, we collect professional and business-related information, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[17px] text-[var(--text-muted)]">
                <li><strong className="text-[var(--text-primary)]">Contact Information:</strong> Name, corporate email address, and professional role (e.g., CEO, Procurement Director).</li>
                <li><strong className="text-[var(--text-primary)]">Trade Intelligence Data:</strong> Target HS Codes (6-digit), preferred regions, and specific market queries submitted for analysis.</li>
                <li><strong className="text-[var(--text-primary)]">Usage Data:</strong> Information regarding your interaction with our Global Trade Matrix and methodology pages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">3. How We Use Your Data</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)] mb-4">
                We use the collected information strictly for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[17px] text-[var(--text-muted)]">
                <li>To generate and deliver the requested preliminary opportunity assessments ("HS Snapshots").</li>
                <li>To grant access to and personalize the experience within the "Intel Vault."</li>
                <li>To communicate relevant market updates and deep-dive analyses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">4. Strict Confidentiality & Data Sharing</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)] mb-4">
                We recognize the sensitive nature of global trade decisions. We do not sell, rent, or distribute your proprietary trade interests, HS Code queries, or contact information to third-party data brokers or competitors.
              </p>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                Data processed through our causal econometric models is anonymized and used exclusively to generate your specific reports. Your individual search queries are not aggregated into our public-facing "Active Routes" or "Trade Volume" statistics without explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">5. Data Security</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                We implement industry-standard security protocols to protect your data against unauthorized access, alteration, or disclosure, ensuring your strategic inquiries remain confidential.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">6. Contact Us</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                For inquiries regarding our data handling practices, please contact us via the form on our homepage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
