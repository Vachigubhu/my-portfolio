import React from 'react';
import { ArrowRight, Download, Github, Mail, Shield, Cpu, Terminal, Layers } from 'lucide-react';

interface HeroProps {
  onOpenCVModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center bg-[#030712] overflow-hidden bg-tech-grid"
    >
      {/* Radial glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (8 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-mono shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-semibold">CS Engineer</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Aditya University</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Trinity <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Chigubhu</span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-200 tracking-tight leading-snug">
              Engineering Software. Exploring Security. Building Intelligent Systems.
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-sans">
              Computer Science Engineer passionate about full-stack development, cybersecurity, and artificial intelligence. 
              I build practical applications, explore emerging technologies, and turn engineering ideas into working solutions.
            </p>

            {/* Core Capability Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Full-Stack Architecture
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                Defensive Cybersecurity
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                AI &amp; LLM Systems
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                IoT &amp; Telemetry
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-cyan-950/40 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 font-mono text-xs transition-all"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Download CV</span>
              </button>

              <a
                href="https://github.com/Vachigubhu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>@Vachigubhu</span>
              </a>
            </div>
          </div>

          {/* Interactive Technical Terminal Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-md">
              {/* Terminal Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>trinity@engineering-box:~</span>
                </div>
                <div className="text-[10px] text-slate-500">zsh</div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3.5 text-slate-300 leading-relaxed bg-[#050a17]/90">
                <div>
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-cyan-400">systemctl</span> status engineer.service
                </div>
                <div className="pl-3 border-l-2 border-slate-800 space-y-1 text-slate-400 text-[11px]">
                  <p className="text-slate-300">
                    <span className="text-slate-500">Active: </span>
                    <span className="text-emerald-400 font-semibold">active (running)</span> since Aditya University matriculation
                  </p>
                  <p>
                    <span className="text-slate-500">Role: </span>
                    <span className="text-slate-200">Full-Stack Engineer &amp; Systems Builder</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Focus: </span>
                    <span className="text-cyan-300">Backend, Security, IoT Telemetry, AI Models</span>
                  </p>
                </div>

                <div>
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-cyan-400">cat</span> /etc/engineering-principles.conf
                </div>
                <div className="bg-slate-950/80 p-2.5 rounded border border-slate-800/80 text-[11px] space-y-1 font-mono text-slate-300">
                  <p className="text-cyan-400">// Core Engineering Philosophy</p>
                  <p>1. Understand how systems function from the ground up</p>
                  <p>2. Secure by design, defensively engineered</p>
                  <p>3. Solve real-world operational problems with measurable software</p>
                  <p>4. Continuous experimentation with emerging AI and protocols</p>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80">
                  <span>Stack: React • Node • Django • Mongo • MQTT</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
