'use client';

import { Globe, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#f5f5f7] border-t border-gray-200 py-20 px-6">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="text-[#1d1d1f]" size={20} />
              <span className="text-[17px] font-bold tracking-tight">Veltrix Consultant</span>
            </div>
            <p className="text-[14px] text-[#86868b] leading-relaxed">
              Empowering global trade decisions with authoritative econometric 
              analysis and harmonized data.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#1d1d1f]">Intelligence</h4>
              <ul className="space-y-2 text-[14px] text-[#86868b]">
                <li><Link href="/showroom" className="hover:text-[#1d1d1f] hover:underline">Showroom</Link></li>
                <li><Link href="/methodology" className="hover:text-[#1d1d1f] hover:underline">Methodology</Link></li>
                <li><Link href="/intel-vault" className="hover:text-[#1d1d1f] hover:underline">Intel Vault</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#1d1d1f]">Company</h4>
              <ul className="space-y-2 text-[14px] text-[#86868b]">
                <li><Link href="/pricing" className="hover:text-[#1d1d1f] hover:underline">Pricing</Link></li>
                <li><Link href="/#lead-form" className="hover:text-[#1d1d1f] hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#1d1d1f]">Legal</h4>
              <ul className="space-y-2 text-[14px] text-[#86868b]">
                <li><Link href="/privacy" className="hover:text-[#1d1d1f] hover:underline">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-[#1d1d1f] hover:underline">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-[#86868b]">
            Copyright © 2026 Veltrix Consultant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/veltrix-consultancy/" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:veltrixconsultant@gmail.com" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
