import React from 'react';
import Image from 'next/image';
import { Camera, Coffee, Dumbbell, Library, Wifi, ShieldCheck } from 'lucide-react';

const gallery = [
  { title: 'Modern Lab', image: 'https://picsum.photos/800/600?16' },
  { title: 'Central Library', image: 'https://picsum.photos/800/600?17' },
  { title: 'Sports Meet', image: 'https://picsum.photos/800/600?18' },
  { title: 'Cultural Fest', image: 'https://picsum.photos/800/600?19' },
  { title: 'Workshop', image: 'https://picsum.photos/800/600?20' },
  { title: 'Campus Greenery', image: 'https://picsum.photos/800/600?21' },
];

export default function CampusLifePage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/1920/400?22" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Campus Life</h1>
          <p className="text-xl text-slate-300">A vibrant environment for holistic growth and development.</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide the best infrastructure to support your academic and personal journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Digital Library', icon: <Library />, desc: 'Access to thousands of e-books, journals, and research papers.' },
              { title: 'Smart Cafeteria', icon: <Coffee />, desc: 'Hygienic and nutritious food options for students and staff.' },
              { title: 'Sports Complex', icon: <Dumbbell />, desc: 'Indoor and outdoor sports facilities for physical well-being.' },
              { title: 'High-Speed Wi-Fi', icon: <Wifi />, desc: 'Seamless connectivity across the entire campus.' },
              { title: '24/7 Security', icon: <ShieldCheck />, desc: 'Safe and secure environment with CCTV surveillance.' },
              { title: 'Student Clubs', icon: <Camera />, desc: 'Diverse clubs for photography, coding, music, and more.' },
            ].map((facility, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{facility.title}</h3>
                <p className="text-slate-500 leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Campus Gallery</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Glimpses of life at DVS Polytechnic College.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <div key={i} className="group relative h-80 rounded-3xl overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Rahul Sharma', 
                dept: 'Computer Science', 
                text: 'The exposure I got at DVS Polytechnic was incredible. The labs are well-equipped and the faculty is always ready to help.' 
              },
              { 
                name: 'Priya K.', 
                dept: 'Electronics & Comm.', 
                text: 'DVS provided me with the perfect platform to build my technical skills. The placement cell is very active and helped me land a great job.' 
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-indigo-50 p-10 rounded-3xl border border-indigo-100 italic text-slate-700 relative">
                <div className="text-6xl text-indigo-200 absolute top-4 left-4 font-serif">&quot;</div>
                <p className="relative z-10 mb-6 text-lg">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 bg-indigo-200 rounded-full"></div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-indigo-600">{testimonial.dept}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
