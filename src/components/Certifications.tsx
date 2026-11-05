import React from 'react';
import { certifications, educationInfo } from '../data/certifications';
import { Award, GraduationCap, CheckCircle2, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#030712] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>04 // CREDENTIALS &amp; ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Professional Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Formal university engineering coursework paired with industry-standard professional certifications from IBM, Meta, Google, and Cyberiads Labs.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="mb-14 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono">
                <GraduationCap className="w-4 h-4" />
                <span>UNIVERSITY EDUCATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {educationInfo.degree}
              </h3>
              <p className="text-base text-cyan-300 font-medium">
                {educationInfo.institution}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-sans pt-1">
                {educationInfo.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                Core Engineering Foundations
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {educationInfo.coreCoursework.map((course) => (
                  <div key={course} className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Certifications Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Professional Learning &amp; Certificates</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">4 Verified Programs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-slate-900/70 p-6 rounded-xl border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-cyan-400 font-medium">
                        {cert.issuer}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {cert.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/70 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                    {cert.statusBadge}
                  </span>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Verification Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
