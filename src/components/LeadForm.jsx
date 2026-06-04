'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ROLES = [
  'CEO / Managing Director',
  'Procurement Director',
  'International Sales Manager',
  'Supply Chain Lead',
  'Investment Analyst',
  'Other'
];

export default function LeadForm({ formRef }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    role: ROLES[0],
    hsCode: '',
    targetRegion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    try {
      // 1. Get the current authenticated user's session
      const { data: { session } } = await supabase.auth.getSession();
      const currentUserId = session?.user?.id || null;

      // 2. Insert request into the operations table
      const { error: opError } = await supabase
        .from('operations')
        .insert([
          {
            user_id: currentUserId,
            request_type: 'HS Snapshot',
            details: JSON.stringify({
              hsCode: formData.hsCode,
              targetRegion: formData.targetRegion,
              role: formData.role
            }),
            status: 'Pending'
          }
        ]);

      if (opError) {
        console.error('Operations table insert error:', opError.message);
      }

      // 3. Insert lead information into the leads table
      const { error: leadError } = await supabase
        .from('leads')
        .insert([
          {
            user_id: currentUserId,
            name: formData.role, // Using role as contact descriptor
            email: formData.email,
            company_name: formData.targetRegion || 'Not specified',
            lead_status: 'New'
          }
        ]);

      if (leadError) {
        console.error('Leads table insert error:', leadError.message);
      }

      // 4. Trigger the server-side email notifications via Resend
      const res = await fetch('/api/hs_snapshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="lead-form" 
      ref={formRef} 
      className="section-wrapper bg-[#f5f5f7] border-t border-gray-200"
    >
      <div className="section-inner max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Get your free HS Snapshot.</h2>
          <p className="apple-subhead max-w-2xl mx-auto">
            Provide your target HS Code and region. We'll send a 5-page preliminary 
            opportunity assessment within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider ml-1">Company Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 text-[17px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider ml-1">Your Role</label>
                    <select 
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 text-[17px] focus:ring-2 ring-[#0071e3] transition-all outline-none appearance-none"
                    >
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider ml-1">HS Code (6-digit)</label>
                    <input 
                      required
                      name="hsCode"
                      type="text" 
                      value={formData.hsCode}
                      onChange={handleChange}
                      placeholder="e.g. 440711"
                      className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 text-[17px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-wider ml-1">Target Region</label>
                    <input 
                      required
                      name="targetRegion"
                      type="text" 
                      value={formData.targetRegion}
                      onChange={handleChange}
                      placeholder="e.g. European Union, GCC"
                      className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 text-[17px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <p className="text-[14px] font-medium">{error}</p>
                  </div>
                )}

                <div className="pt-4">
                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full btn-apple-primary justify-center h-16 text-lg"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>Generate Snapshot <ChevronRight /></>
                    )}
                  </button>
                  <p className="text-center text-[12px] text-[#86868b] mt-4">
                    Strictly confidential. No spam, only intelligence.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Received.</h3>
                <p className="text-[19px] text-[#86868b] max-w-md mx-auto mb-10">
                  Our team is processing your data. Check your inbox for the preliminary assessment within 24 hours.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="btn-apple-link"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
