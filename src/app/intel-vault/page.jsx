'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import IntelVault from '../../components/IntelVault';
import { motion } from 'framer-motion';
import { ArrowLeft, Inbox } from 'lucide-react';
import Link from 'next/link';

export default function IntelVaultPage() {
  return (
    <>
      <Navbar onCTAClick={() => window.location.href = '/#lead-form'} />
      
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-2 opacity-5" />
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
              The Intel Vault
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              Real-world case studies and deep-dive market updates. This is where 
              we demonstrate our ability to turn complex trade data into clear 
              strategic advantages.
            </p>
          </header>

          <IntelVault />

          <motion.div 
            className="mt-20 glass p-10 flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(34,211,238,0.1)] flex items-center justify-center">
                <Inbox size={28} className="text-[var(--accent-cyan)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Subscribe to Weekly Intel</h3>
                <p className="text-[var(--text-secondary)]">Get the latest market updates delivered to your inbox.</p>
              </div>
            </div>
            <Link href="/#lead-form" className="btn-primary">
              Sign Up for Updates
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
