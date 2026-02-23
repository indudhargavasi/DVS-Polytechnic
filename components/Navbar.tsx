'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Departments', href: '/departments' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname ? pathname === '/' : false;
  const shouldBeTransparent = isHomePage && !scrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent 
          ? 'bg-transparent py-4' 
          : 'bg-white/95 backdrop-blur-md shadow-md py-2'
      }`}
    >
      {/* Top Bar - Only on Desktop and when not scrolled on Home OR always on subpages if we want, but let's keep it simple */}
      {isHomePage && !scrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs font-medium tracking-wider uppercase text-white/80">
            <div className="flex gap-6">
              <span className="flex items-center gap-1"><Phone size={12} /> +91 8182 278383</span>
              <span className="flex items-center gap-1"><Mail size={12} /> info@dvspolytechnic.com</span>
            </div>
            <div>
              <span>AICTE Approved | DTE Karnataka</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-900 p-2 rounded-lg group-hover:bg-indigo-800 transition-colors">
            <GraduationCap className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl leading-tight ${shouldBeTransparent ? 'text-white' : 'text-indigo-900'}`}>
              DVS
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${shouldBeTransparent ? 'text-white/70' : 'text-slate-500'}`}>
              Polytechnic College
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                pathname === link.href 
                  ? 'text-indigo-600' 
                  : shouldBeTransparent ? 'text-white' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/admissions" 
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-md ${shouldBeTransparent ? 'text-white' : 'text-slate-900'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium p-2 rounded-lg ${
                    pathname === link.href ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/admissions" 
                className="bg-indigo-600 text-white text-center py-3 rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
