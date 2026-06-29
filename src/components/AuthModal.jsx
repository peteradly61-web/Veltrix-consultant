'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Lock, User, Github, Linkedin, ArrowRight, Loader2, Briefcase, MapPin, Building2, CheckCircle2, AlertCircle } from 'lucide-react';

const INDUSTRIES = [
  'Manufacturing',
  'Retail & E-commerce',
  'Technology',
  'Healthcare',
  'Logistics & Supply Chain',
  'Finance',
  'Furniture & Home Decor',
  'Other'
];

import { useAuth } from '../lib/AuthContext';

export default function AuthModal({ onClose }) {
  const { login, signup, resetPassword } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const industry = formData.get('industry');
    const position = formData.get('position');
    const country = formData.get('country');

    try {
      if (isForgotPassword) {
        await resetPassword(email);
        setMessage({ type: 'success', text: 'Reset link sent to your email.' });
      } else if (isLogin) {
        await login(email, password);
        setMessage({ type: 'success', text: 'Successfully logged in.' });
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        await signup(email, password, {
          full_name: name,
          industry,
          position,
          country
        });
        setMessage({ type: 'success', text: 'Verification email sent. Please check your inbox!' });
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    setMessage({ type: '', text: '' });
  };

  const showForgotPassword = () => {
    setIsForgotPassword(true);
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(245,245,247,0.4)] backdrop-blur-xl"
      />

      {/* Modal */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors text-[#1d1d1f]"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10 overflow-y-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-2">
              {isForgotPassword ? 'Reset password.' : isLogin ? 'Welcome back.' : 'Create account.'}
            </h2>
            <p className="text-[#86868b] text-[17px]">
              {isForgotPassword
                ? 'Enter your email to receive a password reset link.'
                : isLogin
                ? 'Sign in to access your intelligence dashboard.'
                : 'Start your journey with Veltrix Consultant.'}
            </p>
          </div>

          {!isForgotPassword && (
            <>
              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-[#f5f5f7] transition-colors font-medium text-[14px]">
                  <Linkedin size={18} className="text-[#0077b5]" />
                  LinkedIn
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-[#f5f5f7] transition-colors font-medium text-[14px]">
                  <Github size={18} />
                  GitHub
                </button>
              </div>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-[12px] uppercase tracking-widest font-bold">        
                  <span className="bg-white px-4 text-[#86868b]">or use email</span>
                </div>
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {message.text && (
              <div className={`p-4 rounded-2xl text-[14px] font-medium flex items-center gap-2 ${
                message.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
              }`}>
                {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                {message.text}
              </div>
            )}

            {!isLogin && !isForgotPassword && (
              <>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]" size={20} />
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 pl-14 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]" size={20} />       
                    <select
                      name="industry"
                      required
                      defaultValue=""
                      className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 pl-14 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none appearance-none"
                    >
                      <option value="" disabled>Select Industry</option>
                      {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                  <div className="relative">
                    <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]" size={20} />       
                    <input
                      name="position"
                      type="text"
                      placeholder="Your Position"
                      required
                      className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 pl-14 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]" size={20} />
                  <input
                    name="country"
                    type="text"
                    placeholder="Country"
                    required
                    className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 pl-14 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                  />
                </div>
              </>
            )}

            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]" size={20} />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 pl-14 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
              />
            </div>

            {!isForgotPassword && (
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]" size={20} />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full bg-[#f5f5f7] border-none rounded-2xl p-5 pl-14 text-[16px] focus:ring-2 ring-[#0071e3] transition-all outline-none"
                />
              </div>
            )}

            {isLogin && !isForgotPassword && (
              <div className="flex justify-end">
                <button
                  onClick={showForgotPassword}
                  type="button"
                  className="text-[14px] text-[#0066cc] hover:underline font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              disabled={isLoading}
              className="w-full bg-[#1d1d1f] text-white py-5 rounded-2xl font-bold text-[17px] mt-4 flex items-center justify-center gap-2 hover:bg-[#424245] transition-all"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {isForgotPassword ? 'Send Reset Link' : isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-8 text-[15px] text-[#86868b]">
            {isForgotPassword ? (
              <button
                onClick={() => setIsForgotPassword(false)}
                className="text-[#0066cc] hover:underline font-semibold"
              >
                Back to sign in
              </button>
            ) : (
              <>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={toggleMode}
                  className="text-[#0066cc] hover:underline font-semibold"
                >
                  {isLogin ? 'Sign up for free' : 'Sign in'}
                </button>
              </>
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
