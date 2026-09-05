import { caseStudiesData, CaseStudy } from '@/lib/case-studies-data';

export type SiteContent = {
  education: {
    eyebrow: string;
    heading: string;
    items: Array<{ year: string; title: string; detail: string }>;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Array<{ num: string; title: string; badge: string; description: string; tags: string[] }>;
  };
  portfolio: {
    eyebrow: string;
    heading: string;
    lead: string;
    projects: CaseStudy[];
  };
  philosophy: {
    eyebrow: string;
    quote: string;
    body: string;
    genericCopy: string;
    strategicCopy: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Array<{ initials: string; quote: string; author: string; role: string }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
};

export const defaultSiteContent: SiteContent = {
  education: {
    eyebrow: '// 03 — Education & Experience',
    heading: 'Education, training, and professional growth.',
    items: [
      { year: '2009', title: 'BBA in Finance', detail: 'Daffodil International University' },
      { year: '2012', title: 'MBA in Finance', detail: 'Daffodil International University' },
      { year: '2008–2010', title: 'Banking & Corporate Experience', detail: 'Dhaka Bank' },
      { year: 'Writing Journey', title: 'Published / Contributing Writer', detail: 'Different platforms and editorial spaces' },
      { year: '2026', title: 'Professional Digital Marketing Training', detail: 'Creative IT Institute' },
      { year: '2026', title: 'Content Planner | Brand & Marketing', detail: 'Creative IT Institute' },
    ],
  },
  services: {
    eyebrow: '// 01 — Core Capabilities',
    heading: 'Architectural Thinking for Modern Brand Voice.',
    intro: 'From full positioning revamps to signature longform campaigns, every engagement is tailored for intellectual resonance and commercial velocity.',
    items: [
      { num: '01', title: 'Brand Narrative Architecture', badge: 'Strategy', description: 'Clarifying brand origin, core thesis, differentiation matrix, and emotional value propositions into a unified voice bible that scales across teams.', tags: ['Positioning', 'Voice Guide'] },
      { num: '02', title: 'High-Impact Editorial & Copywriting', badge: 'Conversion', description: 'Websites, launch scripts, manifesto pages, and investor decks written with rhythmic cadence, emotional weight, and rigorous commercial intent.', tags: ['Web Copy', 'Manifestos'] },
      { num: '03', title: 'Digital Marketing & Content Engines', badge: 'Growth', description: 'Building scalable multi-channel content engines, thought-leadership pillars, and retention newsletters that build authentic community.', tags: ['Thought Leadership', 'Newsletters'] },
      { num: '04', title: 'Creative Direction & Film Scripts', badge: 'Brand Cinema', description: 'Cinematic commercial scripts, documentary voiceovers, visual tone moodboards, and multidisciplinary campaign concepting.', tags: ['Video Scripts', 'Campaign Concept'] },
    ],
  },
  portfolio: {
    eyebrow: '// 02 — Selected Case Studies',
    heading: 'Narratives Crafted for Category Preeminence.',
    lead: 'Selected engagements spanning brand strategy, editorial direction, copywriting, and campaign storytelling.',
    projects: Object.values(caseStudiesData),
  },
  philosophy: {
    eyebrow: '// 03 — Editorial Manifesto',
    quote: 'Content is not just communication. It is how a brand becomes memorable.',
    body: 'In an era saturated by automated noise, genuine distinction comes from point-of-view, intellectual clarity, and visceral wordcraft. I do not produce generic filler — I engineer ideas that demand reverence.',
    genericCopy: 'We provide cutting-edge cloud software solutions that help streamline your workflow and optimize company productivity seamlessly.',
    strategicCopy: 'We eliminate the operational friction between ambition and execution — giving visionary teams the clarity to build at scale.',
  },
  testimonials: {
    eyebrow: '// 05 — Client Praise',
    heading: 'Trusted by Visionary Founders & CMOs.',
    intro: 'Read what leaders say about collaborating with Farhana Asha to articulate their highest-stakes narratives.',
    items: [
      { initials: 'EC', quote: 'Farhana has an uncanny ability to take complicated, dry technical architecture and turn it into poetic, unforgettable brand cinema. Our rebrand converted beyond our wildest expectations.', author: 'Elena Vance', role: 'VP Brand, Aura Sound Labs' },
      { initials: 'MR', quote: 'Working with Farhana is like giving your company an intellectual unfair advantage. Her words don’t just explain what we do — they make people genuinely proud to be our customers.', author: 'Marcus Ray', role: 'Co-Founder & CEO, Verve AI' },
      { initials: 'SL', quote: 'Farhana is the rarest breed of content strategist: she thinks like an executive and writes like a literary author. She elevated our entire market presence overnight.', author: 'Sophia Laurent', role: 'Creative Director, Atelier Velvet' },
    ],
  },
  contact: {
    eyebrow: "// 06 — Let's Collaborate",
    heading: "Have an idea? Let's make it matter.",
    intro: 'Whether you are embarking on a high-conviction rebrand, preparing a flagship launch, or seeking an ongoing narrative advisor, let’s begin the conversation.',
  },
};

export function mergeSiteContent(value: unknown): SiteContent {
  if (!value || typeof value !== 'object') return defaultSiteContent;
  const source = value as Partial<SiteContent>;
  return {
    ...defaultSiteContent,
    ...source,
    education: { ...defaultSiteContent.education, ...source.education },
    services: { ...defaultSiteContent.services, ...source.services },
    portfolio: { ...defaultSiteContent.portfolio, ...source.portfolio },
    philosophy: { ...defaultSiteContent.philosophy, ...source.philosophy },
    testimonials: { ...defaultSiteContent.testimonials, ...source.testimonials },
    contact: { ...defaultSiteContent.contact, ...source.contact },
  };
}
