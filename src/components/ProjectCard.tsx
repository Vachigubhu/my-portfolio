import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, Layers, Cpu, Server, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Functional MVP':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60';
      case 'Active Prototype':
        return 'bg-cyan-950/60 text-cyan-400 border-cyan-800/60';
      case 'In Development':
        return 'bg-amber-950/60 text-amber-400 border-amber-800/60';
      case 'Completed':
        return 'bg-blue-950/60 text-blue-400 border-blue-800/60';
      case 'Upcoming Concept':
        return 'bg-purple-950/60 text-purple-400 border-purple-800/60';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  const getCategoryIcon = (categoryType: string) => {
    switch (categoryType) {
      case 'iot': return Layers;
      case 'ai': return Cpu;
      case 'backend': return Server;
      default: return Globe;
    }
  };

  const CategoryIcon = getCategoryIcon(project.categoryType);

  return (
    <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group overflow-hidden shadow-lg hover:shadow-cyan-950/20">
      
      {/* Top Banner & Category */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getStatusBadge(project.status)}`}>
            {project.status}
          </span>
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <CategoryIcon className="w-3 h-3 text-cyan-400" />
            <span className="truncate max-w-[150px]">{project.category.split('/')[0]}</span>
          </span>
        </div>

        {/* Project Title */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
            {project.name}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed font-sans">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 text-slate-500 text-[10px] font-mono">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5 duration-200"
        >
          <span>Architecture &amp; Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.name}`}
              className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.name}`}
              className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
