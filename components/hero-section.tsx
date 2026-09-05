'use client';

import { useState, useEffect } from 'react';

const words = [
  'Content Writer',
  'Content Planner',
  'Brand Maker',
  'Digital Marketer',
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 120);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 80);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {}, 220);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Hero Radial Violet Halo */}
      <div className="hero-radial-halo" aria-hidden="true" />

      {/* Live Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-purple-500/30 text-xs font-mono text-purple-600 mb-8 animate-fade-in shadow-purple-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Available for Select Client Engagements Q3/Q4</span>
      </div>

      {/* Main Headline with Editorial Accent */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className='hero-headline-glass'>
        <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light tracking-tight text-white leading-[1.08]">
          Words that <br className="hidden sm:inline" />
          <span className="font-serif italic text-purple-accent relative inline-block">
            build brands.
            <span className="hero-text-shimmer" aria-hidden="true" />
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          I am a{' '}
          <span id="typing-text" className="typing-text philosophy-highlight  font-medium">
            {displayText}
          </span>
          <span className="typing-cursor" aria-hidden="true">
            |
          </span>
        </p>
        </div>
        <p className="mt-4 text-base sm:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          I shape high-conviction narrative architectures, brand positioning, and editorial strategies that transform emerging concepts into category-defining market leaders.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 z-10">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-white !text-[#2B2140] hover:bg-[#C4B5FD] transition-all duration-300 shadow-purple-glow hover:shadow-purple-glow-lg flex items-center justify-center gap-2 group"
        >
          <span className='!text-[#2B2140]'>Start a Project</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#portfolio"
          className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase liquid-glass text-[#2B2140] hover:text-purple-600 border border-white/15 hover:border-purple-400/40 transition-all duration-300 flex items-center justify-center gap-2 group shadow-purple-glass"
        >
          <span>Explore Selected Work</span>
          <svg
            className="w-4 h-4 text-purple-600 transform group-hover:translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Floating Glass Tags */}
      <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
        {[
          'Content Strategy',
          'Brand Storytelling',
          'Digital Marketing',
          'Creative Direction',
          'Editorial Copywriting',
        ].map((tag) => (
          <div
            key={tag}
            className="floating-tag liquid-glass px-4 py-2 rounded-full border border-white/10 text-xs text-[#5C5075] flex items-center gap-2 cursor-default transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-purple-glow-sm" />
            <span className="font-medium">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
