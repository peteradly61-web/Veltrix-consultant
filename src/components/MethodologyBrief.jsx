'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, GitBranch, FileCheck, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    icon: Database,
    iconColor: '#2dd4bf',
    iconRgb: '45,212,191',
    step: '01',
    title: 'Data Extraction',
    description:
      'We pull harmonised trade flow data from ITC TradeMap — the UN-maintained repository covering bilateral trade statistics for 220 countries and 5,300 product categories at the HS 6-digit level.',
  },
  {
    icon: GitBranch,
    iconColor: '#22d3ee',
    iconRgb: '34,211,238',
    step: '02',
    title: 'Econometric Modelling',
    description:
      'We apply panel regression and causal inference methods to isolate signal from noise. Every relationship is tested for statistical significance. Gravity model variants are used for market sizing.',
  },
  {
    icon: FileCheck,
    iconColor: '#fbbf24',
    iconRgb: '251,191,36',
    step: '03',
    title: 'Sensitivity Testing',
    description:
      'All outputs include confidence intervals and scenario ranges. We run Monte Carlo simulations on tariff scenarios and stress-test supply chain models against historical disruption data.',
  },
  {
    icon: ShieldCheck,
    iconColor: '#4ade80',
    iconRgb: '74,222,128',
    step: '04',
    title: 'Reproducible Findings',
    description:
      'No consulting theater. Every analysis is documented with methodology notes and reproducible code. You own the output. We don\'t obscure the process to create dependency.',
  },
];

export default function MethodologyBrief() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="methodology" className="section-wrapper">
      {/* Top divider */}
      <div className="section-divider mb-16" />

      <div className="section-inner">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag mb-4 inline-flex">Methodology</span>
          <h2 className="gradient-text-subtle">
            How the analysis is done.
          </h2>
          <p>
            Four steps. No black boxes. Findings that hold up in a board presentation
            and in a peer review.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-60px' });
            return (
              <motion.div
                key={step.step}
                ref={ref}
                className="glass-card"
                style={{ padding: '1.75rem' }}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${step.iconRgb},0.1)`,
                      border: `1px solid rgba(${step.iconRgb},0.2)`,
                    }}
                  >
                    <step.icon size={17} style={{ color: step.iconColor }} />
                  </div>
                  <span
                    className="text-3xl font-black"
                    style={{ color: `rgba(${step.iconRgb},0.18)`, fontVariantNumeric: 'tabular-nums' }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          className="mt-12 glass text-center"
          style={{ padding: '2rem 3rem', maxWidth: '800px', margin: '3rem auto 0' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-[var(--text-secondary)] italic leading-relaxed">
            "We pull harmonised trade data from ITC TradeMap, apply econometric modelling
            to isolate causal relationships, and translate statistical output into
            operational recommendations. Every analysis includes confidence intervals
            and sensitivity testing.{' '}
            <span className="text-[var(--text-primary)] not-italic font-semibold">
              No consulting theater — just reproducible findings.
            </span>"
          </p>
        </motion.blockquote>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-16" />
    </section>
  );
}
