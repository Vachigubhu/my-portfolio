import React from 'react';
import { Terminal, Shield, Cpu, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: 'Full-Stack & Backend Systems',
      description: 'Building end-to-end applications with clean separation of concerns, robust REST APIs, and scalable databases across the MERN and Django ecosystems.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Defensive Engineering',
      description: 'Grounded in network fundamentals, Linux administration, and secure development principles to engineer software that anticipates vulnerabilities.',
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      icon: Cpu,
      title: 'AI, LLMs & Intelligent Workflows',
      description: 'Exploring how Large Language Models and agentic AI architectures can automate domain operations, from sentiment extraction to agricultural advisory.',
      color: 'text-violet-400',
      border: 'border-violet-500/30'
    },
    {
      icon: Layers,
      title: 'IoT & Telemetry Integration',
      description: 'Bridging physical sensor telemetry (MQTT, connected device state) with operational campus management platforms like HostelSense and UniSphere.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#050a17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>01 // BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Trinity Chigubhu
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A software engineer focused on practical systems, defensive engineering, and real-world technology solutions.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Academic Grounding &amp; Learning by Building
              </h3>
              <p>
                I am a <strong className="text-white font-medium">Computer Science Engineer</strong> at <span className="text-cyan-300">Aditya University, India</span>. My journey into computing began with a simple curiosity: understanding how digital systems work beneath the surface—from processor registers and memory structures to high-concurrency cloud backends.
              </p>
              <p>
                My engineering approach is fundamentally hands-on. Rather than only absorbing theoretical concepts, I validate understanding by building working applications: whether that means architecting an e-commerce platform (<strong className="text-slate-200">TUST</strong>), orchestrating MQTT telemetry for university residences (<strong className="text-slate-200">HostelSense</strong>), or developing REST APIs powered by machine learning models.
              </p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                Security &amp; Long-Term Vision
              </h3>
              <p>
                Modern software engineering cannot treat security as an afterthought. Through formal training with the <span className="text-slate-200 font-medium">Google Cybersecurity Professional Certificate</span> and practical Linux systems work, I have cultivated a defensive mindset—prioritizing input validation, safe authentication flows, and network hygiene across everything I build.
              </p>
              <p>
                My long-term objective is to grow into a highly capable software engineer who designs, develops, secures, and scales real-world technology infrastructure. I am eager to contribute to collaborative engineering teams, solve algorithmic challenges, and engineer software that creates tangible value.
              </p>
            </div>

            {/* Quick Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="flex items-start space-x-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Aditya University B.Tech CS</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Multi-stack proficiency (Python &amp; JS/TS)</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Defensive security &amp; Linux administration</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Committed to clean, maintainable code</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="bg-slate-900/80 p-5 rounded-xl border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-lg bg-slate-950 border ${pillar.border} flex items-center justify-center ${pillar.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white text-sm sm:text-base tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-slate-800/50 flex items-center text-[11px] font-mono text-slate-500">
                    <span>Engineering Focus</span>
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
