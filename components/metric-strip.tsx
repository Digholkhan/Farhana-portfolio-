export default function MetricStrip() {
  const metrics = [
    { value: '50+', label: 'Global Brands Shaped' },
    { value: '12M+', label: 'Audience Impressions' },
    { value: '3.8x', label: 'Avg. Conversion Lift' },
    { value: '8+ Yrs', label: 'Narrative Mastery' },
  ];

  return (
    <>
      <div className="section-divider" />
      <section className="py-12 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="metric-card liquid-glass p-6 rounded-2xl border border-white/10 text-center hover:border-purple-500/30 transition-all duration-300 group"
            >
              <span className="font-serif italic text-3xl sm:text-4xl text-purple-accent group-hover:text-purple-700 transition-colors block mb-1">
                {m.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted font-mono">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
