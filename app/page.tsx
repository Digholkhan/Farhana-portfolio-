import HeroSection from '@/components/hero-section';
import MetricStrip from '@/components/metric-strip';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import PhilosophySection from '@/components/philosophy-section';
import ProcessSection from '@/components/process-section';
import QualificationsSection from '@/components/qualifications-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';
import { getSupabaseClient } from '@/lib/supabase-client';
import { defaultSiteContent, mergeSiteContent, SiteContent } from '@/lib/site-content';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const supabase = getSupabaseClient();
  let siteContent: SiteContent = defaultSiteContent;
  let dynamicPosts: Array<{
    id: string;
    title: string;
    excerpt?: string;
    content?: string;
    cover_image_url?: string;
    slug?: string;
    published_at?: string;
  }> = [];

  if (supabase) {
    try {
      const { data: contentRow } = await supabase.from('site_content').select('content').eq('id', 'default').maybeSingle();
      siteContent = mergeSiteContent(contentRow?.content);

      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (data && data.length > 0) {
        dynamicPosts = data;
      }
    } catch {
      // Graceful fallback to portfolio case studies if Supabase table is not configured yet
      dynamicPosts = [];
    }
  }

  return (
    <>
      <HeroSection />
      <div className="page-section-overlay">
        <MetricStrip />
        <AboutSection />
        <QualificationsSection content={siteContent.education} />
        <ServicesSection content={siteContent.services} />
        <PortfolioSection dynamicPosts={dynamicPosts} content={siteContent.portfolio} />
        <PhilosophySection content={siteContent.philosophy} />
        <ProcessSection />
        <TestimonialsSection content={siteContent.testimonials} />
        <ContactSection content={siteContent.contact} />
      </div>
    </>
  );
}
