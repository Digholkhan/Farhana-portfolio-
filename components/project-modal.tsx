'use client';

import { useEffect } from 'react';
import { CaseStudy } from '@/lib/case-studies-data';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl bg-black/60 transition-all duration-300 animate-fade-in"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content liquid-glass max-w-3xl w-full rounded-3xl border border-white/20 p-6 sm:p-10 max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full liquid-glass border border-white/15 text-[#2B2140] hover:text-purple-600 hover:border-purple-400 transition-all"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-purple-100 text-purple-700 border border-purple-200">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted">• {project.year}</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light text-[#2B2140]">{project.title}</h2>
            <p className="text-base text-purple-accent font-serif italic mt-1">{project.subtitle}</p>
          </div>

          <div className="rounded-2xl overflow-hidden h-64 sm:h-80 relative border border-white/10">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050307]/40 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="liquid-glass p-4 rounded-xl border border-white/10 text-center">
                <span className="font-serif italic text-2xl text-purple-accent block mb-1">{m.value}</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-purple-600 mb-2">
                {'// The Challenge & Context'}
              </h4>
              <p className="text-sm text-[#5C5075] font-light leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-purple-600 mb-2">
                {'// The Strategic Solution'}
              </h4>
              <p className="text-sm text-[#5C5075] font-light leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-purple-600 mb-2">
                {'// Core Deliverables'}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-[#5C5075] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-between items-center">
            <span className="text-xs font-mono text-muted">Ready to discuss your project?</span>
            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-white text-[#08040D] hover:bg-[#C4B5FD] transition-all shadow-purple-glow"
            >
              Inquire Now &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
