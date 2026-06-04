'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Map, Zap, BookOpen, BarChart3, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/* ── Apple Teaser Card ── */
function TeaserCard({ title, description, href, icon: Icon, delay }) {
  return (
    <motion.div
      className="bento-card flex flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center mb-8">
        <Icon size={24} className="text-[#1d1d1f]" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <Link 
        href={href} 
        className="btn-apple-link group"
      >
        Learn more <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

export default function HomePreviews() {
  return (
    <div className="space-y-8 py-12">
      {/* Showroom & Methodology Teaser Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TeaserCard 
          title="The Showroom"
          description="View our core intelligence products, including Market Entry Blueprints and Tariff Impact Simulations."
          href="/showroom"
          icon={Map}
          delay={0.1}
        />
        <TeaserCard 
          title="Our Methodology"
          description="Learn how we apply causal econometric modeling and UN trade data to deliver reproducible findings."
          href="/methodology"
          icon={Zap}
          delay={0.2}
        />
      </div>

      {/* Full Width Pricing Teaser (Apple Style) */}
      <motion.div 
        className="bento-card bg-[#fafafa] flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-[var(--accent-blue)]" size={24} />
            <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Flexible Access</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Strategic Investment.</h2>
          <p className="text-[19px] text-[var(--text-secondary)] leading-relaxed">
            From static snapshots for small manufacturers to interactive forecasting 
            dashboards for large enterprises.
          </p>
        </div>
        <Link href="/pricing" className="btn-apple-primary whitespace-nowrap h-14 px-10">
          View Pricing <ChevronRight size={20} />
        </Link>
      </motion.div>

      {/* Intel Vault Teaser */}
      <div className="text-center max-w-2xl mx-auto pt-20 pb-10">
        <h2 className="text-5xl font-bold mb-6 tracking-tight">The Intel Vault.</h2>
        <p className="text-[21px] text-[var(--text-secondary)] leading-relaxed mb-10">
          Real-world case studies and deep-dive market updates for global trade professionals.
        </p>
        <Link href="/intel-vault" className="btn-apple-link text-xl">
          Enter the Vault <ChevronRight size={24} />
        </Link>
      </div>
    </div>
  );
}
