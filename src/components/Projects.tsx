import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project, ProjectCategoryType } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Filter, Sparkles, Server, Globe, Layers, Shield } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategoryType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterButtons: { id: ProjectCategoryType; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'fullstack', label: 'Full-Stack', icon: Globe },
    { id: 'backend', label: 'Backend & Systems', icon: Server },
    { id: 'iot', label: 'IoT & Smart Campus', icon: Layers },
    { id: 'ai', label: 'AI & Machine Learning', icon: Sparkles },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: Shield },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => {
        if (activeFilter === 'cybersecurity') {
          return p.technologies.some(t => t.toLowerCase().includes('security') || t.toLowerCase().includes('mqtt')) || p.categoryType === 'cybersecurity';
        }
        return p.categoryType === activeFilter;
      });

  return (
    <section id="projects" className="py-24 bg-[#050a17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>03 // FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Production prototypes, campus management systems, and intelligent applications. Clearly distinguishing implemented capabilities from planned roadmaps.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map((btn) => {
            const Icon = btn.icon;
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{btn.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Empty State Guard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm font-mono">
              No projects found in this specific category filter.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 rounded bg-cyan-600 text-white text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
