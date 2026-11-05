import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { 
  Code, Terminal, Layout, Server, Database, Shield, Sparkles, Wrench, CheckCircle, Info 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages': return Code;
      case 'frontend': return Layout;
      case 'backend': return Server;
      case 'databases': return Database;
      case 'cybersecurity': return Shield;
      case 'ai': return Sparkles;
      case 'tools': return Wrench;
      default: return Terminal;
    }
  };

  const getLevelBadge = (level?: string) => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
            Proficient
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            Working Knowledge
          </span>
        );
      case 'Fundamental':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
            Fundamental
          </span>
        );
      default:
        return null;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>02 // TECHNICAL INVENTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Background &amp; Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Structured competency overview grounded in practical coursework, laboratory builds, and verified project implementations. No arbitrary percentage bars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <span>All Domains</span>
            <span className="text-[10px] opacity-70">({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})</span>
          </button>

          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const CategoryIcon = getCategoryIcon(category.id);
            return (
              <div 
                key={category.id} 
                className="bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-800/80 backdrop-blur-sm"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-700/60 flex items-center justify-center text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {category.skills.length} skills listed
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          {getLevelBadge(skill.experienceLevel)}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {skill.context}
                        </p>
                      </div>
                      
                      <div className="pt-3 mt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-cyan-500" />
                          Validated in code
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Rigor Note */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-xl p-4 max-w-2xl mx-auto flex items-start space-x-3 text-xs text-slate-400 font-mono">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Note on Technical Proficiency:</strong> Skills listed are actively applied in academic projects, personal engineering repositories, and laboratory environments. Languages and tools are only described with verified exposure.
          </p>
        </div>

      </div>
    </section>
  );
};
