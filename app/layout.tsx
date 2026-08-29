import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit, Space_Mono } from 'next/font/google';
import AmbientBackground from '@/components/ambient-background';
import CustomCursor from '@/components/custom-cursor';
import AudioAmbience from '@/components/audio-ambience';
import BackToTop from '@/components/back-to-top';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Farhana Asha — Content Strategist & Brand Storyteller',
  description:
    'Luxury editorial portfolio of Farhana Asha. Content Strategy, Brand Storytelling, Digital Marketing & Editorial Direction for ambitious global brands.',
  keywords: [
    'Farhana Asha',
    'Content Strategy',
    'Brand Storytelling',
    'Copywriting',
    'Digital Marketing',
    'Creative Direction',
    'Editorial Portfolio',
  ],
  authors: [{ name: 'Farhana Asha' }],
  openGraph: {
    title: 'Farhana Asha — Words That Build Brands',
    description:
      'Luxury editorial portfolio of Farhana Asha. Content Strategy, Brand Storytelling, Digital Marketing & Editorial Direction.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${outfit.variable} ${spaceMono.variable}`}
    >
      <body className="overflow-x-hidden selection:bg-[#7C3AED] selection:text-white">
        <AmbientBackground />
        <CustomCursor />
        <AudioAmbience />
        <BackToTop />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
