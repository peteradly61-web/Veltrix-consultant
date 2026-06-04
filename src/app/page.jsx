'use client';

import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomePreviews from '../components/HomePreviews';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

export default function Home() {
  const leadFormRef = useRef(null);

  const scrollToLeadForm = () => {
    if (leadFormRef.current) {
      const yOffset = -80; // Offset for sticky navbar
      const y = leadFormRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onCTAClick={scrollToLeadForm} />
      
      <main className="flex flex-col min-h-screen">
        <Hero onCTAClick={scrollToLeadForm} />
        
        {/* Subtle gradient divider */}
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]" />
        
        <div className="bg-[var(--bg-secondary)] section-wrapper">
          <div className="section-inner">
            <div className="section-header">
              <span className="label-tag mb-4 inline-flex">Overview</span>
              <h2 className="gradient-text-subtle">
                Actionable data. <br />
                Authoritative analysis.
              </h2>
              <p>
                We've moved our detailed reports and methodologies to dedicated sections. 
                Select a category below to explore our core intelligence products.
              </p>
            </div>
            
            <HomePreviews />
          </div>
        </div>

        {/* Transition back to primary dark bg for the form */}
        <div className="w-full h-32 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]" />
        
        <LeadForm formRef={leadFormRef} />
      </main>

      <Footer />
    </>
  );
}
