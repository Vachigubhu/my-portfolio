import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Journey', href: '#journey' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Engineering Tag */}
          <a 
            href="#hero" 
            className="group flex items-center space-x-2.5 font-mono text-sm tracking-tight text-slate-200 hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                Trinity Chigubhu
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                CS Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span className="text-cyan-500/70 mr-1">#</span>
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: GitHub & Status */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs font-mono bg-emerald-950/30 text-emerald-400 border border-emerald-800/40 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Opportunities</span>
            </div>
            <a
              href="https://github.com/Vachigubhu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="https://github.com/Vachigubhu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#030712]/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          <div className="pb-2 border-b border-slate-800/80 mb-2 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Navigation</span>
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80"
            >
              <span>{link.name}</span>
              <span className="text-slate-600 text-xs">→</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 flex items-center justify-center space-x-2 py-2 px-4 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-medium"
            >
              <span>Get in Touch</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
