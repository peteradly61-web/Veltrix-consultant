'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, ChevronRight } from 'lucide-react';
import TradeMap from './TradeMap';

export default function Hero({ onCTAClick }) {
  return (
    <section className="section-wrapper pt-32 pb-20 overflow-hidden bg-white">
      <div className="section-inner text-center">
        <motion.p 
          className="apple-subhead mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Econometric Analysis for Global Trade
        </motion.p>
        
        <motion.h1 
          className="apple-headline mb-8 text-[#1d1d1f]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Data that answers the <br className="hidden md:block" />
          questions your board <br className="hidden md:block" />
          is actually asking.
        </motion.h1>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button 
            onClick={onCTAClick}
            className="btn-apple-primary"
          >
            Get Free HS Snapshot
          </button>
          <button className="btn-apple-link group text-lg">
            Watch the methodology <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Interactive World Trade Map */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <TradeMap />
        </motion.div>
      </div>
    </section>
  );
}
