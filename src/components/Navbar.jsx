"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../lib/AuthContext";
import AuthModal from "./AuthModal";

const NAV_LINKS = [
  { label: "Showroom", href: "/showroom" },
  { label: "Methodology", href: "/methodology" },
  { label: "Pricing", href: "/pricing" },
  { label: "Intel Vault", href: "/intel-vault" },
];

export default function Navbar({ onCTAClick }) {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-6 h-12 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <Globe
            className={`transition-colors duration-300 ${scrolled ? "text-[#1d1d1f]" : "text-[#1d1d1f]"}`}
            size={20}
          />
          <span className="text-[14px] font-bold tracking-tight text-[#1d1d1f]">
            Veltrix Consultant
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium text-[#1d1d1f] opacity-70 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 group"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-6 h-6 rounded-full border border-gray-200"
                />
                <span className="text-[12px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                  {user.name.split(" ")[0]}
                </span>
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                      <p className="text-[12px] font-bold text-[#1d1d1f] truncate">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-[#86868b] truncate">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-[12px] text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-lg transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-[12px] text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-lg transition-colors"
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[12px] text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium mt-1"
                    >
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="text-[12px] font-semibold text-[#0066cc] hover:underline transition-all"
            >
              Sign In
            </button>
          )}

          <button
            onClick={onCTAClick}
            className="bg-[#1d1d1f] text-white text-[11px] px-3 py-1 rounded-full font-semibold hover:bg-[#424245] transition-all"
          >
            Get Snapshot
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1d1d1f]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[17px] font-semibold text-[#1d1d1f]"
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <div className="flex items-center gap-4 p-4 bg-[#f5f5f7] rounded-2xl">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border border-gray-200"
                    />
                    <div>
                      <p className="text-[17px] font-bold text-[#1d1d1f]">
                        {user.name}
                      </p>
                      <p className="text-[14px] text-[#86868b]">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full text-[17px] font-semibold text-red-500 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsAuthOpen(true);
                  }}
                  className="w-full text-[17px] font-semibold text-[#0066cc] text-left"
                >
                  Sign In
                </button>
              )}
              <button
                onClick={() => {
                  setOpen(false);
                  onCTAClick();
                }}
                className="w-full bg-[#1d1d1f] text-white py-4 rounded-2xl font-bold"
              >
                Get Snapshot
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
