'use client';

import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Globe, 
  Mail, 
  Building2, 
  Briefcase,
  Save,
  Loader2,
  CheckCircle2,
  Smartphone,
  Eye,
  Languages,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { id: 'profile', label: 'Public Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'privacy', label: 'Privacy & Safety', icon: Shield },
  { id: 'region', label: 'Language & Region', icon: Globe },
];

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);

  if (loading) return null;
  if (!user) {
    if (typeof window !== 'undefined') window.location.href = '/';
    return null;
  }

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-6 mb-10">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-full border-4 border-[#f5f5f7]"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">{user.name}</h3>
                  <p className="text-[#86868b]">{user.role || 'Member'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue={user.name}
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={user.email}
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Industry</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Manufacturing"
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Position</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Procurement Director"
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-8">Security & Password</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none" />
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-emerald-600" size={20} />
                    <div>
                      <p className="text-[14px] font-bold text-emerald-700">Two-Factor Authentication</p>
                      <p className="text-[12px] text-emerald-600">Currently enabled via SMS.</p>
                    </div>
                  </div>
                  <button className="text-[12px] font-bold text-emerald-700 hover:underline">Manage</button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'notifications':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-8">Email Notifications</h3>
              <div className="space-y-6">
                {[
                  { label: 'Intelligence Alerts', desc: 'New econometric data updates for your target HS codes.' },
                  { label: 'Weekly Trade Matrix', desc: 'A summary of global trade movements and causal shifts.' },
                  { label: 'Account Security', desc: 'Alerts regarding logins and sensitive changes.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-[15px] font-bold text-[#1d1d1f]">{item.label}</p>
                      <p className="text-[13px] text-[#86868b]">{item.desc}</p>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0071e3]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 'privacy':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-8">Privacy & Data Handling</h3>
              <div className="space-y-6">
                <div className="p-6 bg-[#f5f5f7] rounded-2xl">
                  <div className="flex items-center gap-3 mb-4 text-[#0071e3]">
                    <Eye size={20} />
                    <h4 className="font-bold">Anonymized Search Mode</h4>
                  </div>
                  <p className="text-[14px] text-[#86868b] mb-4">
                    When enabled, your HS Code queries are not recorded in your personal history 
                    and are excluded from our aggregate trade volume metrics.
                  </p>
                  <button className="text-[14px] font-bold text-[#0071e3] hover:underline">Enable Stealth Mode</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-[15px] font-bold text-[#1d1d1f]">Public Profile Visibility</p>
                    <p className="text-[13px] text-[#86868b]">Allow other verified members to see your corporate role.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0071e3]"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'region':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-8">Language & Region</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Interface Language</label>
                  <div className="relative">
                    <Languages className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 pl-12 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none appearance-none">
                      <option>English (United States)</option>
                      <option>German (Deutsch)</option>
                      <option>French (Français)</option>
                      <option>Mandarin (中文)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider ml-1">Time Zone</label>
                  <div className="relative">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full bg-[#f5f5f7] border-none rounded-2xl p-4 pl-12 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none appearance-none">
                      <option>(GMT-08:00) Pacific Time</option>
                      <option>(GMT+00:00) London</option>
                      <option>(GMT+01:00) Paris</option>
                      <option>(GMT+08:00) Singapore</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <main className="section-wrapper bg-[#f5f5f7] min-h-screen pt-24">
        <div className="section-inner max-w-4xl">
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#1d1d1f]">Account Settings</h1>
            <p className="text-[#86868b] mt-1 text-[17px]">Manage your profile and security preferences.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar Navigation */}
            <div className="space-y-2">
              {TABS.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                    activeTab === item.id 
                    ? 'bg-white text-[#0066cc] shadow-sm' 
                    : 'text-[#86868b] hover:bg-gray-200 hover:text-[#1d1d1f]'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="md:col-span-2 space-y-8 pb-24">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-12">
                <button className="px-8 py-3 rounded-full font-bold text-[#1d1d1f] hover:bg-gray-200 transition-all">
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-[#1d1d1f] text-white px-10 py-3 rounded-full font-bold hover:bg-[#424245] transition-all flex items-center gap-2 min-w-[140px] justify-center"
                >
                  {isSaving ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <><Save size={18} /> Save Changes</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
