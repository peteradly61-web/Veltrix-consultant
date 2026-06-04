'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const TIERS = [
  {
    id: 'tier-1',
    name: 'The Market Snapshot',
    price: '$150 – $300',
    description: 'A static, well-designed PDF report (10–15 pages) identifying top destinations and basic competition.',
    features: [
      'Top 3 Export Destinations',
      'Current Tariff Rates',
      'Basic Country Overview',
      'Static PDF Deliverable',
    ],
    pitch: 'A low-risk assessment to see if exporting your product is currently viable.',
    icon: Shield,
    color: 'rgba(45, 212, 191, 1)',
    bg: 'rgba(45, 212, 191, 0.1)',
  },
  {
    id: 'tier-2',
    name: 'The Strategic Intelligence Report',
    price: '$500 – $900',
    description: 'A deep-dive analysis including unit-value pricing, growth trends, and non-tariff barrier evaluation.',
    features: [
      'Everything in Tier 1',
      'Unit-Value Pricing Analysis',
      'Historical Growth Trends',
      'Non-Tariff Barrier Audit',
    ],
    pitch: 'Everything you need to price your product competitively and select a high-yield market.',
    icon: Zap,
    color: 'rgba(34, 211, 238, 1)',
    bg: 'rgba(34, 211, 238, 0.1)',
    recommended: true,
  },
  {
    id: 'tier-3',
    name: 'The Quantitative Dashboard & Forecasting',
    price: '$1,200 – $2,500+',
    description: 'Fully interactive Power BI dashboard with econometric forecasting for demand and price fluctuations.',
    features: [
      'Interactive Power BI Hub',
      'ARIMA / VECM Forecasting',
      '12–18 Month Projections',
      'Optional Monthly Retainer',
    ],
    pitch: 'A predictive, interactive intelligence hub for real-time supply chain and export decisions.',
    icon: BarChart3,
    color: 'rgba(251, 191, 36, 1)',
    bg: 'rgba(251, 191, 36, 0.1)',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-wrapper bg-[var(--bg-primary)]">
      <div className="section-inner">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag mb-4 inline-flex">Pricing</span>
          <h2 className="gradient-text-subtle">
            Flexible intelligence for<br className="hidden sm:block" />
            every stage of growth.
          </h2>
          <p>
            Choose a level of risk and investment that aligns with your strategy. 
            All reports are built on ITC TradeMap data with econometric precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={`glass-card relative flex flex-col p-8 ${
                tier.recommended ? 'border-[rgba(34,211,238,0.4)] shadow-glow-cyan scale-105 z-10' : ''
              }`}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-cyan text-[#030711] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: tier.bg }}>
                  <tier.icon size={24} style={{ color: tier.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                    Tier {i + 1}
                  </h3>
                  <p className="text-xl font-black text-[var(--text-primary)]">
                    {tier.name}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-black gradient-text">{tier.price}</span>
                <span className="text-xs text-[var(--text-muted)] ml-2">USD</span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 h-12">
                {tier.description}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 bg-[rgba(74,222,128,0.1)] rounded-full p-0.5">
                      <Check size={12} className="text-[var(--accent-green)]" />
                    </div>
                    <span className="text-sm text-[var(--text-primary)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8 p-4 rounded-xl bg-[rgba(26,38,71,0.4)] border border-[rgba(26,38,71,0.6)]">
                <p className="text-xs italic text-[var(--text-secondary)]">
                  "{tier.pitch}"
                </p>
              </div>

              <Link href="/pricing" className={`btn-primary w-full justify-center group ${!tier.recommended ? 'bg-none bg-[rgba(26,38,71,0.6)] hover:bg-[rgba(26,38,71,0.9)] text-white' : ''}`}>
                View Details
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link href="/pricing" className="text-sm font-semibold text-[var(--accent-teal)] hover:underline flex items-center justify-center gap-2">
            Switch to the full pricing page
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
