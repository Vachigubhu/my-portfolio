import React from 'react';
import { journeyMilestones } from '../data/journey';
import { Compass, CheckCircle2, Terminal, Shield, Cpu, BookOpen } from 'lucide-react';

export const Journey: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academic': return BookOpen;
      case 'engineering': return Terminal;
      case 'security': return Shield;
      case 'ai': return Cpu;
      default: return Compass;
    }
  };

  return (
    <section id="journey" className="py-24 bg-[#050a17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>05 // ENGINEERING EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Journey &amp; Growth
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A transparent timeline of technical growth—from low-level computer systems to full-stack engineering, cybersecurity certification, and emerging intelligent architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-slate-800 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => {
              const Icon = getTypeIcon(milestone.type);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={milestone.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-2 border-cyan-500/80 flex items-center justify-center text-cyan-400 z-10 shadow-md shadow-cyan-950/50">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800/90 hover:border-slate-700 transition-all space-y-3 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-800/40">
                          {milestone.period}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400">
                          {milestone.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {milestone.description}
                      </p>

                      {/* Skills Acquired */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                        <span className="text-[11px] font-mono text-slate-400">Competencies Built:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.skillsAcquired.map((skill) => (
                            <span 
                              key={skill}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Milestones */}
                      <div className="space-y-1 pt-2">
                        {milestone.keyAchievements.map((achieve, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{achieve}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
