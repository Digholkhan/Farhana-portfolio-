'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'services', 'portfolio', 'philosophy', 'process', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#portfolio', id: 'portfolio' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Praise', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-5 ${
        scrolled ? 'bg-[#050307]/80 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <a href="#hero" className="group flex items-center gap-3 no-underline">
          <div className="relative w-9 h-9 rounded-full flex items-center justify-center liquid-glass border border-white/15 group-hover:border-purple-400/50 transition-all duration-300 shadow-purple-sm">
            <span className="font-serif italic font-bold text-lg text-purple-400 group-hover:text-[#7C3AED] transition-colors">
              FA
            </span>
            <div className="absolute -inset-0.5 rounded-full bg-purple-500/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider uppercase text-[#2B2140] group-hover:text-purple-600 transition-colors">
              Farhana Asha
            </span>
            <span className="text-[10px] tracking-widest text-muted uppercase font-mono">
              Content & Brand Story
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 liquid-glass px-5 py-2 rounded-full border border-white/10 shadow-purple-glass"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link px-4 py-1.5 text-xs uppercase tracking-widest font-medium transition-colors relative ${
                  isActive ? 'active text-purple-600 font-semibold' : 'text-[#5C5075] hover:text-purple-600'
                }`}
              >
                <span>{item.label}</span>
                <span className="nav-underline" />
              </a>
            );
          })}
          <Link
            href="/admin"
            className="nav-link px-4 py-1.5 text-xs uppercase tracking-widest font-medium text-purple-600 hover:text-purple-800 transition-colors relative"
          >
            <span>Admin</span>
            <span className="nav-underline" />
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-[#08040D] hover:bg-[#C4B5FD] transition-all duration-300 shadow-purple-glow hover:shadow-purple-glow-lg group"
          >
            <span>Let&apos;s Talk</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden liquid-glass p-2.5 rounded-full text-[#2B2140] hover:text-purple-600 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg id="menu-icon-close" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg id="menu-icon-open" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-6 pt-4 pb-6 mt-3 max-w-md mx-4 sm:mx-auto liquid-glass rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in"
        >
          <div className="flex flex-col gap-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-purple-600 py-2 border-b border-white/5"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-[#2B2140] hover:text-purple-600 py-2 border-b border-white/5"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-[#2B2140] hover:text-purple-600 py-2 border-b border-white/5"
            >
              Selected Work
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-[#2B2140] hover:text-purple-600 py-2 border-b border-white/5"
            >
              Philosophy
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-[#2B2140] hover:text-purple-600 py-2 border-b border-white/5"
            >
              Process
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-[#2B2140] hover:text-purple-600 py-2 border-b border-white/5"
            >
              Client Praise
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-sm uppercase tracking-wider font-medium text-purple-600 hover:text-purple-800 py-2 border-b border-white/5"
            >
              Admin Panel
            </Link>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link mt-2 text-center text-xs uppercase tracking-wider font-bold py-3 rounded-xl bg-purple-500 text-white shadow-purple-glow"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
