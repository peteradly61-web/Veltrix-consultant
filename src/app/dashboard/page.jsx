'use client';

import { useAuth } from '../../lib/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowUpRight, 
  CreditCard, 
  Activity,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const TRANSACTIONS = [
  { id: 'TX-9901', product: 'HS Snapshot (HS 440711)', date: 'Apr 24, 2026', amount: '$0.00', status: 'Completed', rating: 5 },
  { id: 'TX-9845', product: 'Market Entry Blueprint', date: 'Apr 20, 2026', amount: '$499.00', status: 'Delivered', rating: 4 },
  { id: 'TX-9721', product: 'Tariff Impact Simulation', date: 'Apr 12, 2026', amount: '$299.00', status: 'Processing', rating: null },
];

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) {
    if (typeof window !== 'undefined') window.location.href = '/';
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="section-wrapper bg-[#f5f5f7] min-h-screen pt-24">
        <div className="section-inner max-w-5xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#1d1d1f]">Intelligence Dashboard</h1>
              <p className="text-[#86868b] mt-1 text-[17px]">Manage your trade requests and active analyses.</p>
            </div>
            <button className="btn-apple-primary">
              New Request <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Active Requests', value: '1', icon: Activity, color: 'text-blue-500' },
              { label: 'Total Analyses', value: '12', icon: FileText, color: 'text-purple-500' },
              { label: 'Credits Remaining', value: '450', icon: CreditCard, color: 'text-emerald-500' },
              { label: 'Avg. Rating', value: '4.8', icon: Star, color: 'text-amber-500' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm"
              >
                <div className={`p-3 rounded-2xl bg-[#f5f5f7] w-fit mb-4 ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <p className="text-[14px] font-semibold text-[#86868b] uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold text-[#1d1d1f] mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Transactions Section */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden mb-12">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#1d1d1f]">Recent Intelligence Requests</h2>
              <button className="text-[14px] text-[#0066cc] font-semibold hover:underline">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f5f5f7] text-[12px] font-bold uppercase tracking-widest text-[#86868b]">
                    <th className="px-8 py-4">Product / Analysis</th>
                    <th className="px-8 py-4">Request ID</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Rating</th>
                    <th className="px-8 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {TRANSACTIONS.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#fcfcfd] transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#f5f5f7] rounded-xl text-[#1d1d1f]">
                            <FileText size={18} />
                          </div>
                          <span className="font-semibold text-[#1d1d1f] text-[15px]">{tx.product}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-[14px] text-[#86868b] font-mono">{tx.id}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${
                          tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                          tx.status === 'Delivered' ? 'bg-blue-50 text-blue-600' :
                          'bg-amber-50 text-amber-600'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        {tx.rating ? (
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill={i < tx.rating ? "currentColor" : "none"} />
                            ))}
                          </div>
                        ) : (
                          <span className="text-[12px] text-[#86868b] italic">Pending</span>
                        )}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] text-[#86868b]">{tx.date}</span>
                          <ChevronRight size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            <div className="bg-[#1d1d1f] p-10 rounded-[32px] text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Access</h3>
                <p className="text-gray-400 text-[17px] leading-relaxed mb-8">
                  Unlock the full power of our causal econometric models with real-time 
                  forecasting and priority support.
                </p>
              </div>
              <Link href="/pricing" className="bg-white text-black px-6 py-3 rounded-full font-bold text-[15px] w-fit hover:bg-gray-200 transition-all">
                Upgrade Now
              </Link>
            </div>
            
            <div className="bg-white p-10 rounded-[32px] border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Support Center</h3>
                <p className="text-[#86868b] text-[17px] leading-relaxed mb-8">
                  Have questions about your report or need a deep-dive analysis? 
                  Our analysts are ready to help.
                </p>
              </div>
              <button className="btn-apple-link">
                Open Support Ticket <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
