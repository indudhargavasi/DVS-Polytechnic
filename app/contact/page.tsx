import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/1920/400?23" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300">We are here to answer your questions and welcome you to our campus.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-slate-600 text-lg mb-12">
                Whether you are a prospective student, a parent, or an industry partner, 
                we would love to hear from you. Visit us or reach out through any of the channels below.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Our Location</h4>
                    <p className="text-slate-500">DVS Circle, Shivamogga, Karnataka - 577201</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Phone Number</h4>
                    <p className="text-slate-500">+91 8182 278383 / +91 8182 277373</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Email Address</h4>
                    <p className="text-slate-500">info@dvspolytechnic.com / principal@dvspolytechnic.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Office Hours</h4>
                    <p className="text-slate-500">Mon - Fri: 9:00 AM - 5:00 PM<br />Sat: 9:00 AM - 1:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
              <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option>General Inquiry</option>
                    <option>Admission Query</option>
                    <option>Academic Department</option>
                    <option>Placement Cell</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            Interactive Map Integration
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.843652615456!2d75.5683223!3d13.9284444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba93333333333%3A0x1111111111111111!2sDVS%20Polytechnic%20College!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          className="grayscale contrast-125 opacity-80"
        ></iframe>
      </section>
    </div>
  );
}
