'use client';

import { CaseStudy } from '@/lib/case-studies-data';
import { SiteContent } from '@/lib/site-content';

type SectionKey = keyof SiteContent;
type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
};

type AdminContentFormProps = {
  activeSection: SectionKey;
  content: SiteContent;
  onChange: (content: SiteContent) => void;
};

const inputClass = 'admin-form-input';

function Field({ label, value, onChange, multiline = false }: FieldProps) {
  return (
    <label className="admin-form-field">
      <span>{label}</span>
      {multiline ? (
        <textarea className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} rows={4} />
      ) : (
        <input className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

function ItemCard({ title, children, onRemove }: { title: string; children: React.ReactNode; onRemove?: () => void }) {
  return (
    <div className="admin-item-card">
      <div className="admin-item-heading">
        <strong>{title}</strong>
        {onRemove ? <button type="button" className="admin-remove-button" onClick={onRemove}>Remove</button> : null}
      </div>
      <div className="admin-form-grid">{children}</div>
    </div>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="admin-form-intro">{children}</p>;
}

export default function AdminContentForm({ activeSection, content, onChange }: AdminContentFormProps) {
  if (activeSection === 'education') {
    const section = content.education;
    return (
      <div className="admin-form-stack">
        <SectionIntro>Update the education and experience entries shown on your portfolio.</SectionIntro>
        <Field label="Eyebrow" value={section.eyebrow} onChange={(value) => onChange({ ...content, education: { ...section, eyebrow: value } })} />
        <Field label="Heading" value={section.heading} onChange={(value) => onChange({ ...content, education: { ...section, heading: value } })} />
        <div className="admin-repeatable-list">
          {section.items.map((item, index) => (
            <ItemCard key={`${item.title}-${index}`} title={`Entry ${index + 1}`} onRemove={() => onChange({ ...content, education: { ...section, items: section.items.filter((_, itemIndex) => itemIndex !== index) } })}>
              <Field label="Year" value={item.year} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, year: value }; onChange({ ...content, education: { ...section, items } }); }} />
              <Field label="Title" value={item.title} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, title: value }; onChange({ ...content, education: { ...section, items } }); }} />
              <Field label="Details" value={item.detail} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, detail: value }; onChange({ ...content, education: { ...section, items } }); }} />
            </ItemCard>
          ))}
        </div>
        <button type="button" className="admin-add-button" onClick={() => onChange({ ...content, education: { ...section, items: [...section.items, { year: '', title: '', detail: '' }] } })}>+ Add education or experience</button>
      </div>
    );
  }

  if (activeSection === 'services') {
    const section = content.services;
    return (
      <div className="admin-form-stack">
        <SectionIntro>Update the section introduction and each service card.</SectionIntro>
        <Field label="Eyebrow" value={section.eyebrow} onChange={(value) => onChange({ ...content, services: { ...section, eyebrow: value } })} />
        <Field label="Heading" value={section.heading} onChange={(value) => onChange({ ...content, services: { ...section, heading: value } })} />
        <Field label="Introduction" value={section.intro} multiline onChange={(value) => onChange({ ...content, services: { ...section, intro: value } })} />
        <div className="admin-repeatable-list">
          {section.items.map((item, index) => (
            <ItemCard key={`${item.num}-${index}`} title={`Service ${index + 1}`} onRemove={() => onChange({ ...content, services: { ...section, items: section.items.filter((_, itemIndex) => itemIndex !== index) } })}>
              <Field label="Number" value={item.num} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, num: value }; onChange({ ...content, services: { ...section, items } }); }} />
              <Field label="Title" value={item.title} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, title: value }; onChange({ ...content, services: { ...section, items } }); }} />
              <Field label="Badge" value={item.badge} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, badge: value }; onChange({ ...content, services: { ...section, items } }); }} />
              <Field label="Tags, separated by commas" value={item.tags.join(', ')} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, tags: value.split(',').map((tag) => tag.trim()).filter(Boolean) }; onChange({ ...content, services: { ...section, items } }); }} />
              <Field label="Description" value={item.description} multiline onChange={(value) => { const items = [...section.items]; items[index] = { ...item, description: value }; onChange({ ...content, services: { ...section, items } }); }} />
            </ItemCard>
          ))}
        </div>
        <button type="button" className="admin-add-button" onClick={() => onChange({ ...content, services: { ...section, items: [...section.items, { num: String(section.items.length + 1).padStart(2, '0'), title: '', badge: '', description: '', tags: [] }] } })}>+ Add service</button>
      </div>
    );
  }

  if (activeSection === 'philosophy') {
    const section = content.philosophy;
    return (
      <div className="admin-form-stack">
        <SectionIntro>Shape the manifesto and the before-and-after copy comparison.</SectionIntro>
        <Field label="Eyebrow" value={section.eyebrow} onChange={(value) => onChange({ ...content, philosophy: { ...section, eyebrow: value } })} />
        <Field label="Quote" value={section.quote} multiline onChange={(value) => onChange({ ...content, philosophy: { ...section, quote: value } })} />
        <Field label="Body" value={section.body} multiline onChange={(value) => onChange({ ...content, philosophy: { ...section, body: value } })} />
        <Field label="Generic copy" value={section.genericCopy} multiline onChange={(value) => onChange({ ...content, philosophy: { ...section, genericCopy: value } })} />
        <Field label="Strategic copy" value={section.strategicCopy} multiline onChange={(value) => onChange({ ...content, philosophy: { ...section, strategicCopy: value } })} />
      </div>
    );
  }

  if (activeSection === 'testimonials') {
    const section = content.testimonials;
    return (
      <div className="admin-form-stack">
        <SectionIntro>Update the client praise shown in the testimonials section.</SectionIntro>
        <Field label="Eyebrow" value={section.eyebrow} onChange={(value) => onChange({ ...content, testimonials: { ...section, eyebrow: value } })} />
        <Field label="Heading" value={section.heading} onChange={(value) => onChange({ ...content, testimonials: { ...section, heading: value } })} />
        <Field label="Introduction" value={section.intro} multiline onChange={(value) => onChange({ ...content, testimonials: { ...section, intro: value } })} />
        <div className="admin-repeatable-list">
          {section.items.map((item, index) => (
            <ItemCard key={`${item.author}-${index}`} title={`Testimonial ${index + 1}`} onRemove={() => onChange({ ...content, testimonials: { ...section, items: section.items.filter((_, itemIndex) => itemIndex !== index) } })}>
              <Field label="Initials" value={item.initials} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, initials: value }; onChange({ ...content, testimonials: { ...section, items } }); }} />
              <Field label="Author" value={item.author} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, author: value }; onChange({ ...content, testimonials: { ...section, items } }); }} />
              <Field label="Role" value={item.role} onChange={(value) => { const items = [...section.items]; items[index] = { ...item, role: value }; onChange({ ...content, testimonials: { ...section, items } }); }} />
              <Field label="Quote" value={item.quote} multiline onChange={(value) => { const items = [...section.items]; items[index] = { ...item, quote: value }; onChange({ ...content, testimonials: { ...section, items } }); }} />
            </ItemCard>
          ))}
        </div>
        <button type="button" className="admin-add-button" onClick={() => onChange({ ...content, testimonials: { ...section, items: [...section.items, { initials: '', quote: '', author: '', role: '' }] } })}>+ Add testimonial</button>
      </div>
    );
  }

  if (activeSection === 'contact') {
    const section = content.contact;
    return (
      <div className="admin-form-stack">
        <SectionIntro>Update the copy beside your contact form.</SectionIntro>
        <Field label="Eyebrow" value={section.eyebrow} onChange={(value) => onChange({ ...content, contact: { ...section, eyebrow: value } })} />
        <Field label="Heading" value={section.heading} onChange={(value) => onChange({ ...content, contact: { ...section, heading: value } })} />
        <Field label="Introduction" value={section.intro} multiline onChange={(value) => onChange({ ...content, contact: { ...section, intro: value } })} />
      </div>
    );
  }

  const section = content.portfolio;
  return (
    <div className="admin-form-stack">
      <SectionIntro>Update the selected work introduction and project details.</SectionIntro>
      <Field label="Eyebrow" value={section.eyebrow} onChange={(value) => onChange({ ...content, portfolio: { ...section, eyebrow: value } })} />
      <Field label="Heading" value={section.heading} onChange={(value) => onChange({ ...content, portfolio: { ...section, heading: value } })} />
      <Field label="Introduction" value={section.lead} multiline onChange={(value) => onChange({ ...content, portfolio: { ...section, lead: value } })} />
      <div className="admin-repeatable-list">
        {section.projects.map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} index={index} content={content} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, content, onChange }: { project: CaseStudy; index: number; content: SiteContent; onChange: (content: SiteContent) => void }) {
  const section = content.portfolio;
  const update = (changes: Partial<CaseStudy>) => {
    const projects = [...section.projects];
    projects[index] = { ...project, ...changes };
    onChange({ ...content, portfolio: { ...section, projects } });
  };

  return (
    <ItemCard title={`Project ${index + 1}: ${project.title}`} onRemove={() => onChange({ ...content, portfolio: { ...section, projects: section.projects.filter((_, projectIndex) => projectIndex !== index) } })}>
      <Field label="Title" value={project.title} onChange={(value) => update({ title: value })} />
      <Field label="Subtitle" value={project.subtitle} onChange={(value) => update({ subtitle: value })} />
      <Field label="Category" value={project.category} onChange={(value) => update({ category: value })} />
      <Field label="Filter category (strategy, copy, campaign)" value={project.filterCategory} onChange={(value) => update({ filterCategory: value as CaseStudy['filterCategory'] })} />
      <Field label="Category label" value={project.categoryLabel} onChange={(value) => update({ categoryLabel: value })} />
      <Field label="Year" value={project.year} onChange={(value) => update({ year: value })} />
      <Field label="Tagline" value={project.tagline} onChange={(value) => update({ tagline: value })} />
      <Field label="Image URL" value={project.image} onChange={(value) => update({ image: value })} />
      <Field label="Description" value={project.description} multiline onChange={(value) => update({ description: value })} />
      <Field label="Overview" value={project.overview} multiline onChange={(value) => update({ overview: value })} />
      <Field label="Solution" value={project.solution} multiline onChange={(value) => update({ solution: value })} />
      <Field label="Deliverables, separated by commas" value={project.deliverables.join(', ')} onChange={(value) => update({ deliverables: value.split(',').map((item) => item.trim()).filter(Boolean) })} />
      <Field label="Metrics (label:value, separated by commas)" value={project.metrics.map((metric) => `${metric.label}:${metric.value}`).join(', ')} onChange={(value) => update({ metrics: value.split(',').map((metric) => { const [label, ...rest] = metric.split(':'); return { label: label.trim(), value: rest.join(':').trim() }; }).filter((metric) => metric.label) })} />
    </ItemCard>
  );
}
