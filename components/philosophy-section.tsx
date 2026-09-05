import { defaultSiteContent, SiteContent } from '@/lib/site-content';

export default function PhilosophySection({ content = defaultSiteContent.philosophy }: { content?: SiteContent['philosophy'] }) {
  return (
    <>
      <section id="philosophy" className="py-32 px-6 sm:px-8 relative overflow-hidden text-center">
        {/* Ambient Violet Center Glow */}
        <div className="philosophy-glow" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-6">
            {content.eyebrow}
          </span>

          <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-[#fff] leading-tight mb-10">
            “{content.quote}”
          </blockquote>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-10" />

          <p className="text-base sm:text-lg !text-[#ffff] max-w-2xl mx-auto font-light leading-relaxed mb-12">
            {content.body}
          </p>

          {/* Interactive Transformation Showcase: Before vs Farhana's Craft */}
          <div className="max-w-3xl mx-auto liquid-glass p-6 sm:p-8 rounded-2xl border border-white/10 text-left shadow-purple-glass">
            <div className="flex items-center justify-between border-b border-purple-100 pb-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-700 font-semibold">
                Live Narrative Craft Comparison
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-[11px] font-mono text-[#5C5075]">Farhana Asha Method</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#786D8D] block mb-2 font-medium">
                  Standard Generic Copy
                </span>
                <p className="text-xs sm:text-sm text-[#786D8D] italic leading-relaxed font-sans">
                  &quot;{content.genericCopy}&quot;
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-100/60 border border-purple-300 relative">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-800 block mb-2 font-semibold">
                  Farhana&apos;s Strategic Narrative
                </span>
                <p className="text-xs sm:text-sm text-[#2B2140] leading-relaxed font-sans font-medium">
                  &quot;{content.strategicCopy}&quot;
                </p>
                <div className="absolute -inset-px rounded-xl border border-purple-400/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
