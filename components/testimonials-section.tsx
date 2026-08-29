export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: 'EC',
      quote:
        'Farhana has an uncanny ability to take complicated, dry technical architecture and turn it into poetic, unforgettable brand cinema. Our rebrand converted beyond our wildest expectations.',
      author: 'Elena Vance',
      role: 'VP Brand, Aura Sound Labs',
    },
    {
      initials: 'MR',
      quote:
        'Working with Farhana is like giving your company an intellectual unfair advantage. Her words don’t just explain what we do — they make people genuinely proud to be our customers.',
      author: 'Marcus Ray',
      role: 'Co-Founder & CEO, Verve AI',
    },
    {
      initials: 'SL',
      quote:
        'Farhana is the rarest breed of content strategist: she thinks like an executive and writes like a literary author. She elevated our entire market presence overnight.',
      author: 'Sophia Laurent',
      role: 'Creative Director, Atelier Velvet',
    },
  ];

  return (
    <>
      <section id="testimonials" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-600 block mb-3">
              {'// 05 — Client Praise'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#2B2140]">
              Trusted by Visionary <br className="hidden sm:inline" />
              <span className="font-serif italic text-purple-accent">Founders &amp; CMOs.</span>
            </h2>
          </div>
          <p className="text-sm text-[#5C5075] max-w-md font-light leading-relaxed">
            Read what leaders say about collaborating with Farhana Asha to articulate their highest-stakes narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="liquid-glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div>
                <span className="font-serif text-5xl text-purple-400 leading-none block mb-4 group-hover:text-purple-600 transition-colors">
                  “
                </span>
                <p className="text-sm sm:text-base text-[#2B2140] font-light leading-relaxed mb-8">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-purple-100">
                <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center font-mono text-xs text-purple-800 font-semibold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2B2140]">{t.author}</h4>
                  <p className="text-[11px] font-mono text-muted">{t.role}</p>
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
