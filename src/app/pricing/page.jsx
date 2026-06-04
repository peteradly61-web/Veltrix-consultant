'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const PRICING_TIERS = [
  {
    name: 'The Market Snapshot',
    subtitle: 'Entry-Level Insight',
    price: '$150 – $300',
    description: 'A static, well-designed PDF report identifying top export destinations and current tariff rates.',
    pitch: 'A low-risk assessment to see if exporting your product is currently viable.',
    features: [
      'Top 3 export destinations by HS Code',
      'Current tariff rates & trade barriers',
      'Basic overview of competing countries',
      '10–15 page PDF report',
    ],
    cta: 'Order Snapshot',
    recommended: false,
  },
  {
    name: 'Strategic Intelligence',
    subtitle: 'The Core Offer',
    price: '$800 – $1,500',
    description: 'A deep-dive analysis including competitor behavior, logistical feasibility, and regulatory roadmaps.',
    pitch: 'Everything you need to build a business case for a specific market entry.',
    features: [
      'Everything in Tier 1',
      'Competitor volume & pricing trends',
      'In-depth regulatory & SPS/TBT analysis',
      'Logistics & supply chain cost estimates',
      '30+ page Strategic Roadmap',
    ],
    cta: 'Get Strategic',
    recommended: true,
  },
  {
    name: 'Quantitative Forecasting',
    subtitle: 'The Enterprise Edge',
    price: '$3,000+',
    description: 'Advanced econometric modeling with interactive dashboards and monthly updates.',
    pitch: 'Continuous intelligence for companies managing multi-million dollar trade volumes.',
    features: [
      'Everything in Tier 2',
      'Custom Interactive Dashboard',
      'Econometric 12-month demand forecasting',
      'Quarterly Board-level presentations',
      'Direct Analyst access (Slack/Phone)',
    ],
    cta: 'Contact for Enterprise',
    recommended: false,
  }
];

export default function PricingPage() {
  return (
    <>
      <Navbar onCTAClick={() => window.location.href = '/#lead-form'} />
      
      <main className="min-h-screen pt-32 pb-20 bg-white">
        <div className="section-inner">
          <header className="text-center mb-24">
            <motion.h1 
              className="text-5xl sm:text-7xl font-bold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Strategic Investment.
            </motion.h1>
            <motion.p 
              className="apple-subhead max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Choosing the right level of intelligence allows you to balance 
              risk and ROI while establishing a foundation for global growth.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.name}
                className={`bento-card flex flex-col ${
                  tier.recommended ? 'border-[#0071e3] ring-1 ring-[#0071e3]' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {tier.recommended && (
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0071e3] mb-4 block">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-[14px] text-[#86868b] font-medium">{tier.subtitle}</p>
                </div>
                
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-[14px] text-[#86868b]">USD</span>
                </div>

                <p className="text-[17px] text-[#1d1d1f] mb-8 leading-relaxed">
                  {tier.description}
                </p>

                <div className="flex-grow space-y-4 mb-12">
                  {tier.features.map(f => (
                    <div key={f} className="flex gap-3 text-[14px] text-[#1d1d1f]">
                      <Check size={18} className="text-[#0071e3] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <button className={`w-full py-4 rounded-full font-bold transition-all ${
                    tier.recommended 
                      ? 'bg-[#0071e3] text-white hover:bg-[#0077ed]' 
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}>
                    {tier.cta}
                  </button>
                  <p className="text-center text-[12px] font-medium italic text-[#86868b]">
                    "{tier.pitch}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#86868b] mb-4 font-medium">Not sure which tier is right for your board?</p>
            <Link href="/#lead-form" className="btn-apple-link text-xl">
              Book a Strategy Consultation <ChevronRight />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
