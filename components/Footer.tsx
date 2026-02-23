import React from 'react';
import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <span className="font-serif font-bold text-2xl text-white">DVS Polytechnic</span>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering students with technical excellence and ethical values since 1983. 
            A premier institution for diploma education in Shivamogga, Karnataka.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Institution</Link></li>
            <li><Link href="/departments" className="hover:text-white transition-colors">Academic Departments</Link></li>
            <li><Link href="/admissions" className="hover:text-white transition-colors">Admission Process</Link></li>
            <li><Link href="/campus-life" className="hover:text-white transition-colors">Campus Facilities</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Departments</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/departments#cs" className="hover:text-white transition-colors">Computer Science</Link></li>
            <li><Link href="/departments#ec" className="hover:text-white transition-colors">Electronics & Comm.</Link></li>
            <li><Link href="/departments#me" className="hover:text-white transition-colors">Mechanical Engineering</Link></li>
            <li><Link href="/departments#ce" className="hover:text-white transition-colors">Civil Engineering</Link></li>
            <li><Link href="/departments#ee" className="hover:text-white transition-colors">Electrical & Electronics</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-indigo-400 shrink-0" size={18} />
              <span>DVS Circle, Shivamogga, Karnataka - 577201</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-indigo-400 shrink-0" size={18} />
              <span>+91 8182 278383</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-indigo-400 shrink-0" size={18} />
              <span>info@dvspolytechnic.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} DVS Polytechnic College. All rights reserved. | Designed for Excellence</p>
      </div>
    </footer>
  );
}
