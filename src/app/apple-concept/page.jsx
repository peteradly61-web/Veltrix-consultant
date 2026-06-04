'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Map, Laptop, Database } from 'lucide-react';
import Link from 'next/link';

export default function AppleConcept() {
  return (
    <div className="bg-[#f5f5f7] text-[#1d1d1f] font-sans min-h-screen selection:bg-[#0071e3] selection:text-white">
      {/* Apple-style Minimal Navbar */}
      <nav className="fixed top-0 w-full h-12 bg-[rgba(245,245,247,0.8)] backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-6">
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <Globe size={18} />
          </Link>
          <div className="flex gap-8 text-[12px] font-medium opacity-80">
            <span className="cursor-pointer hover:text-[#0071e3]">Showroom</span>
            <span className="cursor-pointer hover:text-[#0071e3]">Methodology</span>
            <span className="cursor-pointer hover:text-[#0071e3]">Vault</span>
          </div>
          <button className="bg-[#1d1d1f] text-white text-[11px] px-3 py-1 rounded-full font-semibold hover:bg-[#424245] transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="text-[19px] sm:text-[21px] font-semibold text-[#86868b] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Trade Intelligence. Redefined.
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Data that answers the <br />
            question your board is <br />
            actually asking.
          </motion.h1>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button className="bg-[#0071e3] text-white px-8 py-4 rounded-full text-[17px] font-semibold hover:bg-[#0077ed] transition-colors shadow-sm">
              Request HS Snapshot
            </button>
            <button className="text-[#0066cc] px-8 py-4 text-[17px] font-medium hover:underline flex items-center gap-1 group">
              Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image Mockup (Abstract Bento) */}
        <motion.div
          className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-12 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="md:col-span-8 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col justify-between h-[500px]">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#86868b] mb-2 block">Market Entry</span>
              <h2 className="text-3xl font-bold">The Blueprint.</h2>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full max-w-md h-40 bg-[#f5f5f7] rounded-2xl flex items-center justify-center border border-gray-100">
                <div className="flex gap-2 items-end">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <div key={i} className="w-8 bg-[#0071e3] rounded-t-md" style={{ height: h }} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[#86868b] max-w-sm">
              Pinpointing 3-5 target markets ranked by opportunity score and tariff advantage.
            </p>
          </div>
          <div className="md:col-span-4 bg-[#1d1d1f] rounded-3xl p-10 shadow-xl text-white flex flex-col justify-between h-[500px]">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <ShieldCheck size={24} className="text-[#0071e3]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Certainty.</h2>
              <p className="text-gray-400 leading-relaxed">
                98% accuracy rate using mirror-checked trade flows from the UN database.
              </p>
            </div>
            <Link href="/" className="text-[#0071e3] font-semibold hover:underline flex items-center gap-2">
              Our Methodology <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <FeatureItem
              icon={Database}
              title="ITC TradeMap Data."
              desc="The gold standard of harmonized trade statistics, directly from the source."
            />
            <FeatureItem
              icon={Laptop}
              title="Econometric Modeling."
              desc="Causal inference and panel regression to isolate real market signals."
            />
            <FeatureItem
              icon={TrendingUp}
              title="Predictive Forecasting."
              desc="12-18 month demand trajectories built on ARIMA and VECM models."
            />
          </div>
        </div>
      </section>

      {/* Dark Footer (Apple Style) */}
      <footer className="bg-[#f5f5f7] py-20 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[14px] text-[#86868b] mb-8">
            Built for trade professionals who need certainty, not slides.
          </p>
          <div className="flex justify-center gap-8 text-[12px] font-semibold text-[#1d1d1f] opacity-60">
            <span>Privacy Policy</span>
            <span>LinkedIn</span>
            <span>Contact</span>
          </div>
          <p className="mt-12 text-[11px] text-[#86868b]">
            Copyright © 2026 Veltrix Consultant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="text-center md:text-left">
      <div className="mb-6 flex justify-center md:justify-start">
        <Icon size={32} className="text-[#0071e3]" />
      </div>
      <h3 className="text-[24px] font-bold mb-3">{title}</h3>
      <p className="text-[17px] text-[#86868b] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
