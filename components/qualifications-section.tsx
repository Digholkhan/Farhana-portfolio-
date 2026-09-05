import { defaultSiteContent, SiteContent } from '@/lib/site-content';

export default function QualificationsSection({ content = defaultSiteContent.education }: { content?: SiteContent['education'] }) {
  const qualifications = content.items;

  return (
    <>
      <section id="qualifications" className="qualifications-section py-28 px-6 sm:px-8 max-w-7xl mx-auto relative">
        <div className="qualifications-layout">
          <div className="qualifications-intro">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-purple-400 block mb-4">
              {content.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#ffff] leading-tight">
              {content.heading}
            </h2>
            <p className="qualifications-summary">
              A career built across finance, publishing, and digital marketing, bringing analytical discipline to every story.
            </p>
            <div className="qualifications-stamp" aria-hidden="true">
              <span>FA</span>
              <small>CAREER<br />ARCHIVE</small>
            </div>
          </div>

          <div className="qualifications-timeline">
            {qualifications.map((item, index) => (
              <article key={`${item.year}-${item.title}`} className="qualification-entry">
                <div className="qualification-marker">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="qualification-content">
                  <div className="qualification-meta">
                    <span>{item.year}</span>
                    <span>{index < 2 ? 'Education' : 'Experience'}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
