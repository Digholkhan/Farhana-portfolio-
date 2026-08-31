'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
        const totalDist = rect.height;
        const currentDist = windowHeight * 0.7 - rect.top;
        const pct = Math.min(100, Math.max(0, (currentDist / totalDist) * 100));
        setProgressHeight(pct);

        if (pct >= 75) setActiveStep(4);
        else if (pct >= 50) setActiveStep(3);
        else if (pct >= 25) setActiveStep(2);
        else setActiveStep(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section ref={sectionRef} id="process" className="py-28 px-6 sm:px-8 max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-3">
            {'// 04 — Methodology'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#fff]">
            A Rigorous Path from <br />
            <span className="font-serif italic text-purple-accent">Abstract Concept to Market Resonance.</span>
          </h2>
        </div>

        {/* Process Interactive Stepper */}
        <div className="relative timeline-container">
          {/* Animated Central Purple Line */}
          <div className="timeline-track hidden md:block" id="timeline-track">
            <div
              className="timeline-progress"
              id="timeline-progress"
              style={{ height: `${progressHeight}%` }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Step 01 */}
            <div className={`timeline-step grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${activeStep >= 1 ? 'active' : ''}`} data-step="1">
              <div className="md:text-right pr-0 md:pr-12">
                <span className="step-badge inline-block font-mono text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 mb-3 shadow-purple-sm">
                  Stage 01
                </span>
                <h3 className="text-2xl font-sans font-medium !text-[#ffff] mb-2">
                  Immersion &amp; Thesis Excavation
                </h3>
                <p className="text-sm !text-[#ffff] leading-relaxed">
                  Deconstructing your founders&apos; core convictions, market friction points, customer psychology, and competitive white space to find your untouchable narrative edge.
                </p>
              </div>
              <div className="pl-0 md:pl-12">
                <div className="liquid-glass p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 block mb-2 font-medium">
                    Key Deliverable
                  </span>
                  <p className="text-xs text-[#2B2140] font-mono font-medium">
                    Brand Thesis Document &amp; Positioning Matrix
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className={`timeline-step grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${activeStep >= 2 ? 'active' : ''}`} data-step="2">
              <div className="order-2 md:order-1 md:text-right pr-0 md:pr-12">
                <div className="liquid-glass p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 block mb-2 font-medium">
                    Key Deliverable
                  </span>
                  <p className="text-xs !text-[#FFF] font-mono font-medium">
                    Tone-of-Voice Archetype &amp; Editorial Bible
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 pl-0 md:pl-12">
                <span className="step-badge inline-block font-mono text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 mb-3 shadow-purple-sm">
                  Stage 02
                </span>
                <h3 className="text-2xl font-sans font-medium text-[#fff] mb-2">
                  Narrative Architecture
                </h3>
                <p className="text-sm text-[#fff] leading-relaxed">
                  Defining tone-of-voice archetypes, vocabulary lexicons, structural cadences, and content hierarchy to ensure unmistakable recognition.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className={`timeline-step grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${activeStep >= 3 ? 'active' : ''}`} data-step="3">
              <div className="md:text-right pr-0 md:pr-12">
                <span className="step-badge inline-block font-mono text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 mb-3 shadow-purple-sm">
                  Stage 03
                </span>
                <h3 className="text-2xl font-sans font-medium text-[#2B2140] mb-2">
                  High-Craft Production
                </h3>
                <p className="text-sm text-[#5C5075] leading-relaxed">
                  Drafting website copy, hero manifestos, product scripts, or campaign assets with rhythmic precision and persuasive storytelling.
                </p>
              </div>
              <div className="pl-0 md:pl-12">
                <div className="liquid-glass p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 block mb-2 font-medium">
                    Key Deliverable
                  </span>
                  <p className="text-xs text-[#2B2140] font-mono font-medium">
                    Production-Ready Copy &amp; Strategic Assets
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className={`timeline-step grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${activeStep >= 4 ? 'active' : ''}`} data-step="4">
              <div className="order-2 md:order-1 md:text-right pr-0 md:pr-12">
                <div className="liquid-glass p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 block mb-2 font-medium">
                    Key Deliverable
                  </span>
                  <p className="text-xs text-[#2B2140] font-mono font-medium">
                    Channel Roadmap, Launch Blueprint &amp; Guidelines
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 pl-0 md:pl-12">
                <span className="step-badge inline-block font-mono text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 mb-3 shadow-purple-sm">
                  Stage 04
                </span>
                <h3 className="text-2xl font-sans font-medium text-[#2B2140] mb-2">
                  Optimization &amp; Scaling
                </h3>
                <p className="text-sm text-[#5C5075] leading-relaxed">
                  Fine-tuning for conversion efficiency, training internal stakeholders, and establishing evergreen distribution mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
