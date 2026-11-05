import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertCircle, Layers, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Functional MVP':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80';
      case 'Active Prototype':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-800/80';
      case 'In Development':
        return 'bg-amber-950/80 text-amber-400 border-amber-800/80';
      case 'Completed':
        return 'bg-blue-950/80 text-blue-400 border-blue-800/80';
      case 'Upcoming Concept':
        return 'bg-purple-950/80 text-purple-400 border-purple-800/80';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
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
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#0a0f1d]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-20">
          <div className="flex items-center space-x-3">
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title and summary */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.fullDescription}
            </p>
            <div className="text-xs font-mono text-cyan-400 bg-cyan-950/40 p-2.5 rounded border border-cyan-800/40">
              <span className="font-semibold text-white">System Architecture: </span>
              {project.architectureHighlights}
            </div>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-900 text-cyan-300 text-xs font-mono border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Decisions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural &amp; Engineering Decisions</span>
            </h3>
            <ul className="space-y-2">
              {project.engineeringDecisions.map((decision, index) => (
                <li key={index} className="flex items-start space-x-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-mono font-bold shrink-0 mt-0.5">[{index + 1}]</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Core Implemented Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, index) => (
                <div key={index} className="bg-slate-900/50 p-2.5 rounded border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Features (if any) */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Roadmap &amp; Planned Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.plannedFeatures.map((feat, index) => (
                  <div key={index} className="bg-slate-900/30 p-2.5 rounded border border-slate-800/60 text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-amber-400 font-mono">⏳</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-mono transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono transition-colors"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
