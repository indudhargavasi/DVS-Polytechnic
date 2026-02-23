import React from 'react';
import Image from 'next/image';
import { Cpu, Settings, Zap, HardHat, Car, Laptop, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const departments = [
  {
    id: 'cs',
    title: 'Computer Science & Engineering',
    icon: <Laptop size={32} />,
    image: 'https://picsum.photos/800/600?8',
    description: 'Focuses on software development, computer networks, database management, and emerging technologies like AI and Cloud Computing.',
    intake: 60,
    labs: ['Programming Lab', 'Networking Lab', 'Database Lab', 'Project Lab'],
  },
  {
    id: 'ec',
    title: 'Electronics & Communication',
    icon: <Cpu size={32} />,
    image: 'https://picsum.photos/800/600?9',
    description: 'Deals with electronic devices, communication systems, microprocessors, and embedded systems.',
    intake: 60,
    labs: ['Analog Electronics Lab', 'Digital Electronics Lab', 'Communication Lab', 'Microprocessor Lab'],
  },
  {
    id: 'me',
    title: 'Mechanical Engineering',
    icon: <Settings size={32} />,
    image: 'https://picsum.photos/800/600?10',
    description: 'Covers machine design, manufacturing processes, thermodynamics, and CAD/CAM technologies.',
    intake: 60,
    labs: ['Machine Shop', 'Thermal Engineering Lab', 'Hydraulics Lab', 'CAD/CAM Lab'],
  },
  {
    id: 'ce',
    title: 'Civil Engineering',
    icon: <HardHat size={32} />,
    image: 'https://picsum.photos/800/600?11',
    description: 'Focuses on construction, structural design, surveying, and environmental engineering.',
    intake: 60,
    labs: ['Surveying Lab', 'Material Testing Lab', 'Geotechnical Lab', 'Environmental Lab'],
  },
  {
    id: 'ee',
    title: 'Electrical & Electronics',
    icon: <Zap size={32} />,
    image: 'https://picsum.photos/800/600?12',
    description: 'Covers electrical machines, power systems, control systems, and renewable energy sources.',
    intake: 60,
    labs: ['Electrical Machines Lab', 'Power Electronics Lab', 'Control Systems Lab', 'Measurements Lab'],
  },
  {
    id: 'ae',
    title: 'Automobile Engineering',
    icon: <Car size={32} />,
    image: 'https://picsum.photos/800/600?13',
    description: 'Deals with vehicle design, engine systems, chassis construction, and automotive electronics.',
    intake: 40,
    labs: ['Engine Lab', 'Chassis Lab', 'Auto Electrical Lab', 'Service Station'],
  },
];

export default function DepartmentsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/1920/400?14" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Academic Departments</h1>
          <p className="text-xl text-slate-300">Specialized diploma courses designed for industry excellence.</p>
        </div>
      </section>

      {/* Departments List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {departments.map((dept, i) => (
            <div 
              key={dept.id} 
              id={dept.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group">
                  <Image 
                    src={dept.image} 
                    alt={dept.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                    <div className="text-indigo-600">{dept.icon}</div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">{dept.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {dept.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Annual Intake</div>
                    <div className="text-2xl font-bold text-indigo-600">{dept.intake} Seats</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</div>
                    <div className="text-2xl font-bold text-indigo-600">3 Years</div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ArrowRight size={18} className="text-indigo-600" />
                    Key Laboratories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.labs.map((lab, j) => (
                      <span key={j} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-600">
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/admissions" 
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
                >
                  Apply for this Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Facilities */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-16">Common Academic Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Central Library', desc: 'Over 20,000 volumes and digital resources.' },
              { title: 'Language Lab', desc: 'Improving communication and soft skills.' },
              { title: 'Seminar Hall', desc: 'Fully equipped for workshops and guest lectures.' },
              { title: 'Computer Center', desc: 'High-speed internet and latest software.' },
            ].map((facility, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-slate-400 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
