import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service | Veltrix Consultant',
  description: 'Legal terms and conditions for using Veltrix Consultant services.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="section-wrapper bg-[var(--bg-primary)]">
        <div className="section-inner max-w-[800px]">
          <div className="mb-16">
            <span className="label-tag mb-4 inline-flex">Legal</span>
            <h1 className="apple-headline mb-4">Terms of Service</h1>
            <p className="apple-subhead">Last Updated: April 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12 text-[var(--text-primary)]">
            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                By accessing the Veltrix Consultant website, requesting an HS Snapshot, or entering the Intel Vault, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">2. Nature of Services and Disclaimer of Advice</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)] mb-4">
                Veltrix Consultant provides data-driven analytical tools, Tariff Impact Simulations, and Market Entry Blueprints based on harmonized UN trade data and causal econometric modeling.
              </p>
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--card-border)]">
                <p className="text-[17px] leading-relaxed text-[var(--text-muted)] italic">
                  <strong className="text-[var(--text-primary)] not-italic block mb-2">Disclaimer:</strong> 
                  All data, reports, and snapshots are provided for informational and strategic planning purposes only. They do not constitute financial, legal, investment, or certified trade compliance advice. Market conditions fluctuate, and Veltrix Consultant assumes no liability for business decisions, financial losses, or supply chain disruptions resulting from the use of our intelligence products.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">3. Intellectual Property and Methodology</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)] mb-6">
                The proprietary methodologies used to generate our reports—including but not limited to our application of causal econometric modeling, data harmonization processes, and the structure of our Market Entry Blueprints—are the exclusive intellectual property of Veltrix Consultant.
              </p>
              <ul className="list-disc pl-6 space-y-4 text-[17px] text-[var(--text-muted)]">
                <li><strong className="text-[var(--text-primary)]">License of Use:</strong> Reports generated for you (such as the 5-page HS Snapshot) are provided under a limited, non-exclusive license for your internal business use.</li>
                <li><strong className="text-[var(--text-primary)]">Restriction:</strong> You may not resell, redistribute, or reverse-engineer our methodologies, Tariff Impact Simulations, or the content within the Intel Vault.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">4. Accuracy of Information</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                While we strive for authoritative analysis using reputable sources (e.g., UN trade data), we do not warrant that the information is entirely error-free or exhaustive. Our preliminary assessments are based on the harmonized data available at the time of the request.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">5. Flexible Access and Subscriptions</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                Access to advanced interactive forecasting dashboards or continuous market updates may be subject to separate Master Service Agreements (MSA) or subscription terms outlined in our "Pricing" structure. We reserve the right to modify access tiers and pricing with prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-[28px] font-bold mb-6 tracking-tight">6. Limitation of Liability</h2>
              <p className="text-[17px] leading-relaxed text-[var(--text-muted)]">
                To the fullest extent permitted by applicable law, Veltrix Consultant shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our platform, methodologies, or data products.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
