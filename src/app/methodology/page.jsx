'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MethodologyBrief from '../../components/MethodologyBrief';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Search, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <>
      <Navbar onCTAClick={() => window.location.href = '/#lead-form'} />
      
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-3 opacity-5" />
        </div>
        <div className="grid-overlay opacity-20" aria-hidden="true" />

        <div className="section-inner px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-teal)] transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <header className="mb-16">
            <h1 className="text-4xl sm:text-6xl font-black gradient-text mb-6">
              Our Methodology
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              We combine scientific rigor with business-focused outcomes. Our process 
              ensures that every insight is reproducible, defensible, and actionable.
            </p>
          </header>

          <MethodologyBrief />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-[var(--accent-teal)]" />
                <h3 className="text-xl font-bold">Rigorous Data Sourcing</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                By leveraging ITC TradeMap's direct access to UN Comtrade statistics, 
                we eliminate the noise of secondary data providers. We work with 
                raw, mirror-checked trade flows to ensure 98%+ data accuracy.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-[var(--accent-cyan)]" />
                <h3 className="text-xl font-bold">Causal Econometrics</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We don't just show correlations. Using panel data regression and 
                difference-in-differences (DiD) models, we isolate the true impact 
                of tariff changes or regulatory shifts on trade volumes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
