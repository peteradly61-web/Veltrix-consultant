'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShowroomGallery from '../../components/ShowroomCard';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ShowroomPage() {
  return (
    <>
      <Navbar onCTAClick={() => window.location.href = '/#lead-form'} />
      
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-1 opacity-5" />
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
              The Digital Showroom
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              Explore our core intelligence products. Each visualization is backed by 
              live econometric models and harmonized trade data from ITC TradeMap.
            </p>
          </header>

          <ShowroomGallery />
          
          <motion.div 
            className="mt-20 glass-strong p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Need a custom analysis?</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Beyond our standard products, we provide bespoke econometric modeling 
              for specific market niches and complex regulatory environments.
            </p>
            <Link href="/#lead-form" className="btn-primary">
              Contact for Custom Inquiry
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
