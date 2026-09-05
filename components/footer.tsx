'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const homeHref = (hash: string) => pathname === '/' ? hash : `/${hash}`;

  return (
    <footer className="relative pt-24 pb-12 px-6 sm:px-8 border-t border-purple-200/50 overflow-hidden">
      {/* Huge Ambient Background Typography */}
      <div className="footer-huge-name select-none" aria-hidden="true">
        FARHANA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-purple-200/60">
          <div className="md:col-span-2">
            <a href={homeHref('#hero')} className="text-xl font-sans font-semibold tracking-wider text-[#2B2140] uppercase block mb-3">
              Farhana Asha
            </a>
            <p className="text-xs text-[#5C5075] max-w-sm leading-relaxed mb-6">
              Words that build brands. Strategic editorial direction, high-conviction positioning, and narrative architecture for leaders shaping the future.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-[#5C5075]">Based in London &amp; Available Worldwide</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-purple-700 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C5075]">
              <li>
                <a href={homeHref('#services')} className="hover:text-purple-700 transition-colors">
                  Services &amp; Offerings
                </a>
              </li>
              <li>
                <a href={homeHref('#portfolio')} className="hover:text-purple-700 transition-colors">
                  Selected Case Studies
                </a>
              </li>
              <li>
                <a href={homeHref('#philosophy')} className="hover:text-purple-700 transition-colors">
                  Editorial Philosophy
                </a>
              </li>
              <li>
                <a href={homeHref('#process')} className="hover:text-purple-700 transition-colors">
                  Process &amp; Engagement
                </a>
              </li>
              <li>
                <a href={homeHref('#contact')} className="hover:text-purple-700 transition-colors">
                  Inquire for Projects
                </a>
              </li>
              <li>
                <Link href="/admin" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                  Admin Panel &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-purple-700 font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C5075]">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  LinkedIn <span className="text-[10px] text-[#988DA8]">&nearr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  X / Twitter <span className="text-[10px] text-[#988DA8]">&nearr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  Substack Journal <span className="text-[10px] text-[#988DA8]">&nearr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  Medium Essays <span className="text-[10px] text-[#988DA8]">&nearr;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#786D8D]">
          <p>&copy; 2026 Farhana Asha. All Rights Reserved. Luxury Editorial Identity.</p>
          <p className="text-purple-600 font-medium">Designed & Developed by <a href="https://www.facebook.com/md.mohiuddin.944305/" target='_blank'>Md Mohiuddin</a></p>
        </div>
      </div>
    </footer>
  );
}
