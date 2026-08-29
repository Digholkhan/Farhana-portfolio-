export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'Brand Narrative Architecture',
      badge: 'Strategy',
      description:
        'Clarifying brand origin, core thesis, differentiation matrix, and emotional value propositions into a unified voice bible that scales across teams.',
      tags: ['Positioning', 'Voice Guide'],
    },
    {
      num: '02',
      title: 'High-Impact Editorial & Copywriting',
      badge: 'Conversion',
      description:
        'Websites, launch scripts, manifesto pages, and investor decks written with rhythmic cadence, emotional weight, and rigorous commercial intent.',
      tags: ['Web Copy', 'Manifestos'],
    },
    {
      num: '03',
      title: 'Digital Marketing & Content Engines',
      badge: 'Growth',
      description:
        'Building scalable multi-channel content engines, thought-leadership pillars, and retention newsletters that build authentic community.',
      tags: ['Thought Leadership', 'Newsletters'],
    },
    {
      num: '04',
      title: 'Creative Direction & Film Scripts',
      badge: 'Brand Cinema',
      description:
        'Cinematic commercial scripts, documentary voiceovers, visual tone moodboards, and multidisciplinary campaign concepting.',
      tags: ['Video Scripts', 'Campaign Concept'],
    },
  ];

  return (
    <>
      <section id="services" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-600 block mb-3">
              {'// 01 — Core Capabilities'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#2B2140]">
              Architectural Thinking for <br className="hidden sm:inline" />
              <span className="font-serif italic text-purple-accent">Modern Brand Voice.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5075] max-w-md font-light leading-relaxed">
            From full positioning revamps to signature longform campaigns, every engagement is tailored for intellectual resonance and commercial velocity.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-4">
          {services.map((s) => (
            <div
              key={s.num}
              className="service-item liquid-glass p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-6">
                  <span className="service-num font-mono text-xl sm:text-2xl text-purple-600/70 group-hover:text-purple-600 transition-colors">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-sans font-medium text-[#2B2140] group-hover:text-purple-700 transition-colors flex items-center gap-3">
                      {s.title}
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 hidden sm:inline-block">
                        {s.badge}
                      </span>
                    </h3>
                    <p className="mt-2 text-sm text-[#5C5075] max-w-2xl font-light leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4">
                  <div className="flex gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="service-tag text-[11px] font-mono px-3 py-1 rounded-full bg-purple-50 text-[#5C5075] border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="service-arrow w-10 h-10 rounded-full liquid-glass border border-white/10 flex items-center justify-center group-hover:border-purple-400 group-hover:text-[#7C3AED] transition-all">
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
