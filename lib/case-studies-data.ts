export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: 'strategy' | 'copy' | 'campaign';
  categoryLabel: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  overview: string;
  solution: string;
  deliverables: string[];
};

export const caseStudiesData: Record<string, CaseStudy> = {
  aura: {
    id: 'aura',
    title: 'Aura Studios',
    subtitle: 'Spatial Audio Hardware & Acoustics',
    category: 'Brand Strategy & Positioning',
    filterCategory: 'strategy',
    categoryLabel: 'Brand Strategy',
    year: '2024',
    tagline: 'Spatial Audio Tech',
    description: 'Complete brand narrative overhaul and luxury product positioning for a next-generation acoustic hardware pioneer.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Pre-order Volume', value: '$3.4M' },
      { label: 'Press Coverage', value: '45+ Outlets' },
      { label: 'Conversion Lift', value: '+210%' },
    ],
    overview: 'Aura Studios engineered breakthrough acoustic transducers capable of physical spatial immersion. However, early marketing sounded like sterile laboratory spec sheets. Farhana was commissioned to rebuild the narrative foundation.',
    solution: 'We redefined the brand thesis around "The Architecture of Pure Presence". We crafted an evocative editorial voice bible, redesigned the landing page storytelling hierarchy, and produced the flagship launch film script.',
    deliverables: ['Brand Narrative Bible', 'Flagship Web Copy', 'Launch Film Voiceover Script', 'Product Packaging Copy'],
  },
  verve: {
    id: 'verve',
    title: 'Verve Intelligence',
    subtitle: 'Enterprise Regulatory & FinTech Platform',
    category: 'B2B SaaS Narrative Architecture',
    filterCategory: 'copy',
    categoryLabel: 'Website & Deck Copy',
    year: '2024',
    tagline: 'B2B FinTech Platform',
    description: 'Transforming complex algorithmic compliance systems into an intuitive, high-status proposition that closed $14M Series A.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Series A Closed', value: '$14M' },
      { label: 'Enterprise Sales Cycle', value: '-35% Time' },
      { label: 'Demo Booking Rate', value: '+4.2x' },
    ],
    overview: 'Verve developed an AI platform analyzing trillion-dollar compliance liabilities in real-time. Traditional enterprise language felt bureaucratic and bloated.',
    solution: 'We positioned Verve not merely as automated compliance, but as "Predictive Institutional Integrity". We crafted high-status investor decks and an editorial web presence that positioned them as the standard for tier-1 asset managers.',
    deliverables: ['Series A Pitch Deck Narrative', 'Full Website Overhaul', 'Executive Whitepaper Series', 'Sales Enablement Battlecards'],
  },
  luminary: {
    id: 'luminary',
    title: 'Luminary Quarterly',
    subtitle: 'Print & Digital Cultural Publication',
    category: 'Editorial Direction & Essays',
    filterCategory: 'campaign',
    categoryLabel: 'Editorial Direction',
    year: '2023',
    tagline: 'Print & Digital Journal',
    description: 'Editorial architecture and ghostwritten essay series examining cultural shifts at the intersection of aesthetics and artificial intellect.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Subscribers', value: '85K+' },
      { label: 'Avg. Read Time', value: '6m 40s' },
      { label: 'Industry Awards', value: '3 Nominations' },
    ],
    overview: 'A new print and digital journal exploring the tension between synthetic intelligence and human aesthetic creation.',
    solution: 'Farhana served as Guest Editorial Director for Issue 03 & 04, architecting the central thesis, curating essay themes, and authoring the flagship opening monograph.',
    deliverables: ['Editorial Concept & Flow', 'Lead Monograph Essays', 'Digital Subscriber Newsletter', 'Author Curation Guidelines'],
  },
  velvet: {
    id: 'velvet',
    title: 'Velvet & Vine',
    subtitle: 'European Luxury Maison & Atelier',
    category: 'Cinematic Film Script & Tone Guide',
    filterCategory: 'campaign',
    categoryLabel: 'Cinematic Film Script',
    year: '2024',
    tagline: 'Luxury Maison',
    description: 'Global brand anthem script, visual tone-of-voice manual, and digital experience copy for a bespoke European atelier.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Film Views', value: '1.8M' },
      { label: 'Private Client Waitlist', value: '4,200+' },
      { label: 'Brand Recall Lift', value: '+88%' },
    ],
    overview: 'A heritage fashion house launching a contemporary bespoke line needed a narrative that balanced old-world mystique with provocative modern minimalism.',
    solution: 'We wrote the global launch film voiceover, luxury lookbook prose, and an ultra-exclusive private invitation series for VIP collectors.',
    deliverables: ['Cinema Voiceover Script', 'Hardcover Lookbook Prose', 'Private Client Email Series', 'Boutique Experience Script'],
  },
  nexus: {
    id: 'nexus',
    title: 'Nexus AI Labs',
    subtitle: 'Autonomous Agent Research Lab',
    category: 'Technical Narrative Architecture',
    filterCategory: 'strategy',
    categoryLabel: 'Content Architecture',
    year: '2024',
    tagline: 'Foundation Model Lab',
    description: 'Demystifying complex neural infrastructure for enterprise decision makers with authoritative, human-centric prose.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Developer Signups', value: '120K+' },
      { label: 'Keynote Engagement', value: '98% Positive' },
      { label: 'Enterprise Inquiries', value: '+340%' },
    ],
    overview: 'An elite AI research laboratory needed to explain next-generation agent swarms to both technical engineers and Fortune 500 board executives.',
    solution: 'Created the "Agency over Automation" narrative framework, translating opaque technical whitepapers into compelling, humanized value propositions.',
    deliverables: ['Keynote Speech Narrative', 'Developer Documentation Voice', 'Interactive Manifesto', 'Press Release Architecture'],
  },
  chronos: {
    id: 'chronos',
    title: 'Chronos Atelier',
    subtitle: 'Independent Swiss Horology',
    category: 'Launch Campaign & Copywriting',
    filterCategory: 'copy',
    categoryLabel: 'Launch Campaign',
    year: '2023',
    tagline: 'Haute Horlogerie',
    description: 'Crafting an evocative collectors’ narrative that generated over $2.2M in pre-orders in the first 72 hours of private release.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Sold Out In', value: '72 Hours' },
      { label: 'Pre-order GMV', value: '$2.2M' },
      { label: 'Collector Retention', value: '94%' },
    ],
    overview: 'An independent watchmaker introducing a micro-rotor tourbillon with an initial run of just 50 pieces worldwide.',
    solution: 'Crafted a poetic storytelling campaign focused on "Measuring What Cannot Be Recovered", sparking passionate discussion in collector forums.',
    deliverables: ["Collector's Monograph", 'Website Launch Experience', 'VIP Private Invitations', 'Instagram Micro-Stories'],
  },
};
