import React from 'react';
import { X, Printer, FileText, GraduationCap, Award, Shield } from 'lucide-react';
import { educationInfo, certifications } from '../data/certifications';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0a0f1d] border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-slate-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#0a0f1d]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-20">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae Preview • Trinity Chigubhu</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-300 font-sans text-xs sm:text-sm">
          
          {/* Header block */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trinity Chigubhu
            </h2>
            <p className="text-cyan-400 font-mono text-xs font-semibold">
              Computer Science Engineer • Full-Stack Developer • Cybersecurity Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
              <span>GitHub: github.com/Vachigubhu</span>
              <span>•</span>
              <span>Location: Aditya University, India</span>
              <span>•</span>
              <span>Email: trinity.chigubhu@example.com</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Computer Science Engineer passionate about building practical software solutions, understanding how systems work, and exploring the intersection of software engineering, cybersecurity, and artificial intelligence. Long-term objective is to become a highly competent software engineer capable of designing, developing, securing, and scaling real-world technology solutions.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Education
            </h3>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-white text-sm">{educationInfo.degree}</h4>
                <span className="text-[11px] font-mono text-cyan-400">Aditya University, India</span>
              </div>
              <p className="text-xs text-slate-400">{educationInfo.description}</p>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Core coursework: Data Structures, Operating Systems, Computer Architecture, DBMS, Computer Networks.
              </div>
            </div>
          </div>

          {/* Key Technical Skills */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                <span className="text-cyan-400 block font-semibold mb-1">Languages:</span>
                <span className="text-slate-300">Python, JavaScript, TypeScript, Go, C/C++, x86 Assembly</span>
              </div>
              <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                <span className="text-cyan-400 block font-semibold mb-1">Web &amp; Backend:</span>
                <span className="text-slate-300">React, Node.js, Express, Django, Flask, REST APIs, Tailwind</span>
              </div>
              <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                <span className="text-cyan-400 block font-semibold mb-1">Databases &amp; Systems:</span>
                <span className="text-slate-300">MongoDB, PostgreSQL, MySQL, Linux CLI, Bash, VirtualBox</span>
              </div>
              <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800">
                <span className="text-cyan-400 block font-semibold mb-1">Security &amp; AI:</span>
                <span className="text-slate-300">Web App Security, OWASP, LLMs, Prompt Engineering, MQTT</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-cyan-400" />
              Verified Professional Certificates
            </h3>
            <div className="space-y-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-white">{c.title}</h5>
                    <span className="text-[11px] font-mono text-slate-400">{c.issuer}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-400" />
              Selected Engineering Projects
            </h3>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                <h5 className="font-bold text-white">HostelSense (Smart Campus Management &amp; IoT Telemetry)</h5>
                <p className="text-slate-400 text-[11px] mt-0.5">TypeScript, React, Node.js, MongoDB, MQTT, pnpm Monorepo.</p>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                <h5 className="font-bold text-white">TUST (E-Commerce Online Fashion Marketplace)</h5>
                <p className="text-slate-400 text-[11px] mt-0.5">MongoDB, Express.js, React, Node.js (MERN Stack).</p>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                <h5 className="font-bold text-white">Emotion Detection API (IBM Practical AI Engineering)</h5>
                <p className="text-slate-400 text-[11px] mt-0.5">Python, Flask, REST API, NLP Model Integration.</p>
              </div>
            </div>
          </div>

          {/* Close action */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs"
            >
              Done Viewing
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
