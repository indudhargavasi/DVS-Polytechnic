import React from 'react';
import Image from 'next/image';
import { Target, Eye, History, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/1920/400?3" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Our Institution</h1>
          <p className="text-xl text-slate-300">A legacy of excellence in technical education since 1983.</p>
        </div>
      </section>

      {/* History & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/800/1000?4" alt="College Building" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="flex items-center gap-3 text-indigo-600 font-bold mb-4">
                <History size={24} />
                <span className="uppercase tracking-widest text-sm">Our History</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Four Decades of Empowering Minds</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                DVS Polytechnic College was established in 1983 under the aegis of the Desheeya Vidya Shala (DVS) Samithi. 
                What started as a modest initiative to provide technical education to the youth of Shivamogga has now 
                grown into one of the most respected polytechnic colleges in the state.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Over the years, we have consistently upgraded our infrastructure, adopted modern teaching methodologies, 
                and fostered strong industry connections to ensure our students are not just graduates, but skilled 
                professionals ready for the global market.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-12 rounded-3xl border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide high-quality technical education that combines theoretical knowledge with practical skills, 
                fostering innovation, ethical values, and professional excellence in our students to meet the 
                challenges of the ever-evolving industrial landscape.
              </p>
            </div>
            <div className="bg-slate-900 p-12 rounded-3xl text-white">
              <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed opacity-80">
                To be a premier center of excellence in technical education, recognized for producing competent 
                and socially responsible engineers who contribute significantly to the technological and 
                economic development of the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Guided by visionaries and experienced academicians dedicated to student success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. K. G. Somashekar', role: 'Chairman, DVS Samithi', image: 'https://picsum.photos/400/500?5' },
              { name: 'Prof. M. S. Venkatesh', role: 'Secretary, DVS Samithi', image: 'https://picsum.photos/400/500?6' },
              { name: 'Poornima', role: 'Principal, DVS Polytechnic', image: 'https://picsum.photos/400/500?7' },
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="h-80 relative">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h4>
                  <p className="text-indigo-600 font-medium text-sm">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-amber-500" size={48} />
            <h2 className="font-serif text-4xl font-bold text-slate-900">Accreditations & Approvals</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center">
              <div className="h-20 w-40 bg-slate-200 rounded-xl mb-2 flex items-center justify-center font-bold text-slate-400">AICTE</div>
              <span className="text-xs font-bold uppercase tracking-widest">Approved</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-40 bg-slate-200 rounded-xl mb-2 flex items-center justify-center font-bold text-slate-400">DTE</div>
              <span className="text-xs font-bold uppercase tracking-widest">Affiliated</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-20 w-40 bg-slate-200 rounded-xl mb-2 flex items-center justify-center font-bold text-slate-400">ISO 9001</div>
              <span className="text-xs font-bold uppercase tracking-widest">Certified</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
