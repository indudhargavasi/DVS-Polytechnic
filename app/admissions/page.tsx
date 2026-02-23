import React from 'react';
import Image from 'next/image';
import { ClipboardList, FileCheck, Calendar, CreditCard, Info, Download } from 'lucide-react';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/1920/400?15" alt="Banner" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Admissions 2026-27</h1>
          <p className="text-xl text-slate-300">Join a community of innovators and future leaders.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Admission Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Follow these simple steps to secure your seat at DVS Polytechnic College.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { 
                step: '01', 
                title: 'Check Eligibility', 
                desc: 'Candidates must have passed 10th Standard (SSLC) or equivalent with minimum 35% marks.',
                icon: <Info className="text-indigo-600" />
              },
              { 
                step: '02', 
                title: 'Apply Online/Offline', 
                desc: 'Fill out the application form available on our website or visit the campus admission office.',
                icon: <ClipboardList className="text-indigo-600" />
              },
              { 
                step: '03', 
                title: 'Document Verification', 
                desc: 'Submit original documents for verification along with the required admission fee.',
                icon: <FileCheck className="text-indigo-600" />
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all relative group">
                <div className="absolute top-0 right-0 p-6 text-6xl font-serif font-bold text-slate-50 group-hover:text-indigo-50 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <div className="bg-slate-900 rounded-3xl p-12 text-white">
              <h3 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                <FileCheck className="text-indigo-400" />
                Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  'SSLC / 10th Standard Marks Card (Original + 3 Copies)',
                  'Transfer Certificate (TC) from previous school',
                  'Study Certificate (for 7 years in Karnataka)',
                  'Caste & Income Certificate (if applicable)',
                  'Aadhar Card Copy',
                  '6 Recent Passport Size Photographs',
                  'Eligibility Certificate (for Non-Karnataka students)'
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Dates & Fees */}
            <div className="space-y-8">
              <div className="bg-indigo-50 rounded-3xl p-10 border border-indigo-100">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Calendar className="text-indigo-600" />
                  Important Dates
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-indigo-200/50">
                    <span className="text-slate-600">Application Starts</span>
                    <span className="font-bold text-slate-900">May 15, 2026</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-indigo-200/50">
                    <span className="text-slate-600">Last Date to Apply</span>
                    <span className="font-bold text-slate-900">June 30, 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Commencement of Classes</span>
                    <span className="font-bold text-slate-900">August 01, 2026</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <CreditCard className="text-indigo-600" />
                  Fee Structure
                </h3>
                <p className="text-slate-600 mb-6">
                  Our fee structure is as per the norms set by the Government of Karnataka and DTE. 
                  Scholarships are available for meritorious and reserved category students.
                </p>
                <button className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
                  <Download size={20} />
                  Download Detailed Fee Structure (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Need Assistance?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Our admission counselors are here to help you with any queries regarding the courses, 
            eligibility, or the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+918182278383" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg">
              Call: +91 8182 278383
            </a>
            <Link href="/contact" className="bg-white text-indigo-900 border border-indigo-200 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all">
              Visit Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
