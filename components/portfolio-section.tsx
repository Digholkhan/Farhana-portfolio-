'use client';

import { useState } from 'react';
import { caseStudiesData, CaseStudy } from '@/lib/case-studies-data';
import ProjectModal from './project-modal';

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  cover_image_url?: string;
  slug?: string;
  published_at?: string;
}

interface PortfolioSectionProps {
  dynamicPosts?: Post[];
}

export default function PortfolioSection({ dynamicPosts = [] }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<'all' | 'strategy' | 'copy' | 'campaign'>('all');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const projects = Object.values(caseStudiesData);
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.filterCategory === filter);

  return (
    <>
      <section id="portfolio" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-3">
              {'// 02 — Selected Case Studies'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#ffff]">
              Narratives Crafted for <br className="hidden sm:inline" />
              <span className="font-serif italic text-purple-accent">Category Preeminence.</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 liquid-glass p-1.5 rounded-full border border-white/10" id="portfolio-filters">
            {[
              { label: 'All', value: 'all' },
              { label: 'Strategy', value: 'strategy' },
              { label: 'Copywriting', value: 'copy' },
              { label: 'Campaigns', value: 'campaign' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as typeof filter)}
                className={`filter-btn px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === tab.value
                    ? 'active text-purple-700 bg-purple-100 font-semibold border border-purple-300'
                    : 'text-[#5C5075] hover:text-purple-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="portfolio-card group relative liquid-glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-[#0D0715]">
                {/* Image with Purple Cinematic Overlay */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="portfolio-overlay absolute inset-0 bg-[#4C1D95]/0 group-hover:bg-[#4C1D95]/25 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full liquid-glass border border-purple-300/40 text-xs font-mono tracking-wider text-[#7C3AED] shadow-purple-glow font-semibold">
                    VIEW PROJECT &rarr;
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/60 backdrop-blur-md text-purple-200 border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-muted font-mono mb-2">
                  <span>{project.tagline}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-sans font-medium text-[#2B2140] group-hover:text-purple-700 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-[#5C5075] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Supabase Posts if available */}
        {dynamicPosts && dynamicPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-purple-100">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-600 block mb-4">
              {'// Editorial Articles & Updates'}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dynamicPosts.map((post) => (
                <div key={post.id} className="liquid-glass rounded-2xl p-5 border border-purple-100">
                  {post.cover_image_url && (
                    <img
                      src={post.cover_image_url}
                      alt={post.title}
                      className="w-full h-44 object-cover rounded-xl mb-4"
                    />
                  )}
                  <div className="text-[11px] font-mono text-purple-600 mb-1">
                    {post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Published'}
                  </div>
                  <h4 className="text-lg font-sans font-medium text-[#2B2140] mb-2">{post.title}</h4>
                  <p className="text-xs text-[#5C5075] line-clamp-3">{post.excerpt || post.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <div className="section-divider" />
    </>
  );
}
