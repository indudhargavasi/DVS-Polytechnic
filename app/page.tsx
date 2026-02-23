'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Building2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="College Campus" 
            fill 
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8">
              Building the Future <br />
              <span className="text-indigo-400 italic">One Engineer</span> at a Time
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
              Providing world-class technical education with a focus on practical skills, 
              innovation, and industry readiness since 1983.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions" 
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-600/20"
              >
                Apply for 2026-27 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/departments" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8">
            {[
              { label: 'Years of Excellence', value: '40+' },
              { label: 'Expert Faculty', value: '50+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Active Students', value: '1200+' },
            ].map((stat, i) => (
              <div key={i} className="text-center border-r border-white/10 last:border-0">
                <div className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                A Legacy of Technical <br /> Education & Innovation
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                DVS Polytechnic College has been at the forefront of technical education in Karnataka for over four decades. 
                Our commitment to excellence is reflected in our state-of-the-art labs, industry partnerships, and 
                a curriculum that evolves with global trends.
              </p>
              
              <div className="space-y-4">
                {[
                  'AICTE Approved & DTE Karnataka Affiliated',
                  'Industry-Integrated Learning Modules',
                  'Dedicated Placement & Career Guidance Cell',
                  'Modern Infrastructure & Advanced Laboratories'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="inline-flex items-center gap-2 mt-10 text-indigo-600 font-bold hover:gap-3 transition-all">
                Learn more about our history <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 relative rounded-3xl overflow-hidden">
                  <Image src="https://picsum.photos/400/600?1" alt="Lab" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 bg-indigo-600 rounded-3xl p-8 flex flex-col justify-end text-white">
                  <BookOpen size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Quality Education</h3>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 bg-slate-900 rounded-3xl p-8 flex flex-col justify-end text-white">
                  <Users size={32} className="mb-4" />
                  <h3 className="font-bold text-xl">Expert Mentors</h3>
                </div>
                <div className="h-64 relative rounded-3xl overflow-hidden">
                  <Image src="https://picsum.photos/400/600?2" alt="Campus" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-2/5 relative min-h-[400px]">
              <Image 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Principal Dr. B. R. Patil" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8 text-white">
                <h3 className="text-2xl font-serif font-bold">Dr. B. R. Patil</h3>
                <p className="text-indigo-300 font-medium">Principal, DVS Polytechnic College</p>
              </div>
            </div>
            <div className="w-full lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Principal&apos;s Message</span>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Nurturing Technical Excellence with Ethical Values
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed italic">
                <p>
                  &quot;At DVS Polytechnic College, we believe that education is not just about acquiring knowledge, but about developing the skills and character needed to thrive in a rapidly changing world. Our mission is to provide a supportive and challenging environment where students can explore their potential and become leaders in their fields.&quot;
                </p>
                <p>
                  &quot;We are committed to providing our students with the best possible technical education, supported by state-of-the-art facilities and a dedicated faculty. Our curriculum is designed to be industry-relevant, ensuring that our graduates are well-prepared for the challenges of the professional world.&quot;
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-serif text-2xl">
                  B
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. B. R. Patil</div>
                  <div className="text-sm text-slate-500">M.Tech, Ph.D. in Mechanical Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Our Departments</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our diverse range of engineering diplomas designed to give you a head start in your professional career.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Computer Science', desc: 'Master software development, networking, and AI.', icon: <Building2 /> },
            { title: 'Mechanical Engineering', desc: 'Design and build the machines of tomorrow.', icon: <Building2 /> },
            { title: 'Electronics & Comm.', desc: 'Explore the world of circuits and communication.', icon: <Building2 /> },
            { title: 'Civil Engineering', desc: 'Shape the infrastructure of our cities.', icon: <Building2 /> },
            { title: 'Electrical & Electronics', desc: 'Powering the world through innovation.', icon: <Building2 /> },
            { title: 'Automobile Engineering', desc: 'Drive the future of transportation.', icon: <Building2 /> },
          ].map((dept, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{dept.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{dept.desc}</p>
              <Link href="/departments" className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                View Curriculum <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Engineering Journey?</h2>
            <p className="text-indigo-100 text-lg opacity-80">
              Join thousands of successful alumni who have built their careers with DVS Polytechnic College. 
              Admissions for the academic year 2026-27 are now open.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/admissions" className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl">
              Apply Now
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
