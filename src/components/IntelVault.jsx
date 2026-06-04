'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, TrendingUp, ArrowRight, Clock } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'cs-1',
    tag: 'Case Study',
    tagColor: '#2dd4bf',
    title: 'Timber importer avoids $340K in tariff exposure by re-routing through ASEAN',
    excerpt:
      'A European timber importer faced an unexpected 14% tariff surge on direct China-to-EU shipments under new CBR rules. Our audit identified a duty-free corridor via Vietnam, saving $340K annually with a 6-week re-routing window.',
    readTime: '5 min',
    category: 'Tariff Optimisation',
  },
  {
    id: 'cs-2',
    tag: 'Case Study',
    tagColor: '#2dd4bf',
    title: 'Supply chain audit reveals 67% supplier concentration risk for EU auto parts distributor',
    excerpt:
      'A concentration analysis of an EU auto parts distributor\'s semiconductor sourcing showed 67% dependency on two Taiwanese foundries. We modelled a 90-day disruption scenario and mapped 11 alternative qualified suppliers.',
    readTime: '7 min',
    category: 'Resilience Audit',
  },
];

const MARKET_UPDATES = [
  {
    id: 'mu-1',
    tag: 'Market Update',
    tagColor: '#22d3ee',
    title: 'EU Carbon Border Adjustment: Trade flow implications for cement and steel',
    excerpt:
      'The CBAM mechanism creates an effective tariff equivalent of 18–24% for high-carbon imports by 2026. We track weekly flow data showing early rerouting by Turkish and Indian producers.',
    readTime: '4 min',
    category: 'Regulatory Shift',
  },
  {
    id: 'mu-2',
    tag: 'Market Update',
    tagColor: '#22d3ee',
    title: 'U.S.–China Phase Two uncertainty: What the data shows about decoupling in electronics',
    excerpt:
      'ITC data shows a 31% decline in direct US electronics imports from China since Q1 2024, with a corresponding 28% surge through Vietnam and Malaysia — suggesting trans-shipment rather than genuine decoupling.',
    readTime: '6 min',
    category: 'Geopolitical Risk',
  },
];

function VaultCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      id={item.id}
      className="vault-card group"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={{
            color: item.tagColor,
            background: `rgba(${item.tagColor === '#2dd4bf' ? '45,212,191' : '34,211,238'},0.1)`,
            border: `1px solid rgba(${item.tagColor === '#2dd4bf' ? '45,212,191' : '34,211,238'},0.2)`,
          }}
        >
          {item.tag}
        </span>
        <span className="text-xs text-[var(--text-muted)] font-medium">{item.category}</span>
      </div>

      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 leading-snug group-hover:text-[var(--accent-teal)] transition-colors">
        {item.title}
      </h4>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
        {item.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
          <Clock size={11} />
          <span>{item.readTime} read</span>
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold text-[var(--accent-teal)] opacity-0 group-hover:opacity-100 transition-opacity">
          Read more <ArrowRight size={11} />
        </button>
      </div>
    </motion.div>
  );
}

export default function IntelVault() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="intel-vault" className="section-wrapper">
      <div className="section-inner">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag mb-4 inline-flex">The Intel Vault</span>
          <h2 className="gradient-text-subtle">
            Proof of work before you pay for it.
          </h2>
          <p>
            Case studies and market updates written in the same format as our deliverables.
            If you can act on these, you know what you are buying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case Studies column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <BookOpen size={15} className="text-[var(--accent-teal)]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                Case Studies
              </h3>
            </div>
            <div className="space-y-4">
              {CASE_STUDIES.map((item, i) => (
                <VaultCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Market Updates column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp size={15} className="text-[#22d3ee]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                Market Updates
              </h3>
            </div>
            <div className="space-y-4">
              {MARKET_UPDATES.map((item, i) => (
                <VaultCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center text-sm text-[var(--text-muted)] mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          New intelligence published weekly. Updates delivered to subscribers before public release.
        </motion.p>
      </div>
    </section>
  );
}
