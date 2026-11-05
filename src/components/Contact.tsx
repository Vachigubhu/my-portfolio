import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Clearly identified placeholders
  const placeholderEmail = 'trinity.chigubhu@example.com';
  const githubUrl = 'https://github.com/Vachigubhu';
  const linkedinPlaceholderUrl =
    "https://www.linkedin.com/in/trinity-chigubhu-94a2bb2ab/";

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message body is required.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form simulation for portfolio
      setSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(placeholderEmail).catch(() => {
      // fallback
      const el = document.createElement('textarea');
      el.value = placeholderEmail;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050a17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>07 // INQUIRIES &amp; OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Interested in discussing software engineering opportunities, internships, graduate roles, or technical collaborations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Connect Directly
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
                  Open to software engineering roles, full-stack positions, backend challenges, and security research discussions.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 font-mono text-xs">
                {/* Email Item */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Email Address</span>
                      <span className="text-slate-200">{placeholderEmail}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Item */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-400">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">GitHub</span>
                      <span className="text-slate-200 group-hover:text-cyan-300">github.com/Vachigubhu</span>
                    </div>
                  </div>
                  <span className="text-slate-600 group-hover:text-slate-400 text-xs">↗</span>
                </a>

                {/* LinkedIn Placeholder */}
                <a
                  href={linkedinPlaceholderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">LinkedIn Profile</span>
                      <span className="text-slate-200 group-hover:text-cyan-300">linkedin.com/in/trinity-chigubhu</span>
                    </div>
                  </div>
                  <span className="text-slate-600 group-hover:text-slate-400 text-xs">↗</span>
                </a>
              </div>

              {/* Verified Contact Note */}
              <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/60 text-[11px] font-mono text-slate-500 space-y-1">
                <span className="text-cyan-400 font-semibold">// Professional Protocol:</span>
                <p>
                  Active recruiter inquiries receive response within 24-48 business hours. Primary code repositories and commits are maintained on GitHub.
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans mb-6">
                Fill in the details below with your engineering inquiry or role description.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-mono">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                    Thank you for reaching out. Your communication has been recorded and Trinity will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs font-sans placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs font-sans placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                      Subject / Role Category <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity / Collaboration"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs font-sans placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.subject ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, project idea, or role specifications..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs font-sans placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-md shadow-cyan-950/40 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
