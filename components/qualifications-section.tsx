import { defaultSiteContent, SiteContent } from '@/lib/site-content';

export default function QualificationsSection({ content = defaultSiteContent.education }: { content?: SiteContent['education'] }) {
  const qualifications = content.items;
  /*
    {
      year: '2009',
      title: 'BBA in Finance',
      detail: 'Daffodil International University',
    },
    {
      year: '2012',
      title: 'MBA in Finance',
      detail: 'Daffodil International University',
    },
    {
      year: '2008–2010',
      title: 'Banking & Corporate Experience',
      detail: 'Dhaka Bank',
    },
    {
      year: 'Writing Journey',
      title: 'Published / Contributing Writer',
      detail: 'Different platforms and editorial spaces',
    },
    {
      year: '2026',
      title: 'Professional Digital Marketing Training',
      detail: 'Creative IT Institute',
    },
    {
      year: '2026',
      title: 'Content Planner | Brand & Marketing',
      detail: 'Creative IT Institute',
    },
  ]; */

  return (
    <>
      <section id="qualifications" className="py-28 px-6 sm:px-8 max-w-6xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-purple-400 block mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#ffff] leading-tight">
            {content.heading}
          </h2>
        </div>

        <div className="space-y-5">
          {qualifications.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 liquid-glass p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/15 via-purple-400/10 to-transparent border border-purple-200/60 flex items-center justify-center text-center p-2">
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-700 leading-relaxed">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-sans font-medium text-[#2B2140] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base sm:text-lg text-[#5C5075] font-light leading-relaxed">
                    {item.detail}
                  </p>
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
