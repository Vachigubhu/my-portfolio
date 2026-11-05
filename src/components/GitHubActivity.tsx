import React, { useState, useEffect } from 'react';
import { GitHubRepo } from '../types';
import { Github, Star, GitFork, ExternalLink, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';

export const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback curated repositories for Trinity Chigubhu's profile
  const fallbackRepos: GitHubRepo[] = [
    {
      id: 1,
      name: 'HostelSense',
      description: 'Centralized smart hostel management platform with pnpm monorepo architecture and MQTT telemetry integration.',
      html_url: 'https://github.com/Vachigubhu',
      language: 'TypeScript',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2025-01-15T00:00:00Z',
      topics: ['typescript', 'react', 'mqtt', 'iot', 'campus-management']
    },
    {
      id: 2,
      name: 'TUST',
      description: 'MERN stack online e-commerce marketplace for designer fashion and apparel catalog discovery.',
      html_url: 'https://github.com/Vachigubhu',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2024-11-20T00:00:00Z',
      topics: ['react', 'nodejs', 'mongodb', 'express', 'ecommerce']
    },
    {
      id: 3,
      name: 'UniSphere',
      description: 'University operations management platform combining Python Django architecture with IoT telemetry concepts.',
      html_url: 'https://github.com/Vachigubhu',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2024-10-10T00:00:00Z',
      topics: ['python', 'django', 'iot-telemetry', 'university-management']
    },
    {
      id: 4,
      name: 'Emotion-Detection-API',
      description: 'Flask-based REST microservice analyzing sentiment and multi-class emotion classification from text.',
      html_url: 'https://github.com/Vachigubhu',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2024-09-05T00:00:00Z',
      topics: ['python', 'flask', 'machine-learning', 'nlp']
    }
  ];

  const fetchGitHubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users/Vachigubhu/repos?sort=updated&per_page=6', {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (!response.ok) {
        throw new Error(`GitHub API responded with status ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        // Fallback if user has no public repos yet
        setRepos(fallbackRepos);
      }
    } catch (err: any) {
      // Graceful fallback to verified repositories without fabricating fake stats
      setRepos(fallbackRepos);
      setError('Live GitHub API synchronization offline or rate-limited. Displaying verified local repository index.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  return (
    <section id="github" className="py-24 bg-[#030712] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>06 // OPEN SOURCE &amp; CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub &amp; Code Repositories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Public repositories and software engineering implementations hosted on GitHub at{' '}
            <a 
              href="https://github.com/Vachigubhu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:underline font-mono"
            >
              github.com/Vachigubhu
            </a>.
          </p>
        </div>

        {/* Profile Card Header */}
        <div className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-800 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold text-white">Trinity Chigubhu</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                  @Vachigubhu
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Full-Stack Developer • Backend Engineer • Cybersecurity Enthusiast
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchGitHubRepos}
              disabled={loading}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
              <span>Sync Repos</span>
            </button>
            <a
              href="https://github.com/Vachigubhu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono transition-colors"
            >
              <span>Explore GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Status / Error Banner */}
        {error && (
          <div className="mb-6 p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center space-x-2.5 text-xs font-mono text-slate-400">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div 
              key={repo.name}
              className="bg-slate-900/80 p-5 rounded-xl border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono text-sm">/</span>
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors font-mono">
                      {repo.name}
                    </h4>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {repo.description || 'Software engineering repository focused on systems development and architecture.'}
                </p>

                {repo.topics && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span key={topic} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-400/90 border border-slate-800">
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-4">
                  {repo.language && (
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>{repo.language}</span>
                    </span>
                  )}
                  <span className="flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 text-slate-500" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-500" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>

                <span className="text-[11px] text-slate-500">
                  Public Repo
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
