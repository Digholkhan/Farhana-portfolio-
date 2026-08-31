'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [interest, setInterest] = useState('Brand Narrative');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@farhanaasha.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Dramatic Purple Atmosphere Glow */}
      <div className="contact-radial-halo" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-3">
            {"// 06 — Let's Collaborate"}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-light tracking-tight text-[#fff]">
            Have an idea? <br />
            <span className="font-serif italic text-purple-accent">Let&apos;s make it matter.</span>
          </h2>
          <p className="mt-4 text-base !text-[#fff] max-w-xl mx-auto font-light leading-relaxed">
            Whether you are embarking on a high-conviction rebrand, preparing a flagship launch, or seeking an ongoing narrative advisor, let’s begin the conversation.
          </p>
        </div>

        {/* Contact Form */}
        <div className="liquid-glass p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-xl relative">
          {!isSuccess ? (
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest font-mono text-[#5C5075] mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Elena Rostova"
                    className="contact-input w-full px-5 py-4 rounded-xl liquid-glass-input text-[#2B2140] placeholder-[#988DA8] border border-white/10 text-sm focus:outline-none transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest font-mono text-[#5C5075] mb-2 font-medium">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="elena@company.com"
                    className="contact-input w-full px-5 py-4 rounded-xl liquid-glass-input text-[#2B2140] placeholder-[#988DA8] border border-white/10 text-sm focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Interest Selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-mono text-[#5C5075] mb-3 font-medium">
                  Area of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { label: 'Brand Narrative', value: 'Brand Narrative' },
                    { label: 'Website Copy', value: 'Website Copy' },
                    { label: 'Campaign & Film', value: 'Campaign Film' },
                    { label: 'Advisory Retainer', value: 'Advisory' },
                  ].map((item) => (
                    <label key={item.value} className="interest-radio-card cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value={item.value}
                        checked={interest === item.value}
                        onChange={() => setInterest(item.value)}
                        className="sr-only"
                      />
                      <span className="block text-center py-3 px-2 rounded-xl text-xs font-mono border border-purple-100 text-[#5C5075] transition-all">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest font-mono text-[#5C5075] mb-2 font-medium">
                  Project Scope / Objectives *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your brand, current timeline, and what success looks like..."
                  className="contact-input w-full px-5 py-4 rounded-xl liquid-glass-input text-[#2B2140] placeholder-[#988DA8] border border-white/10 text-sm focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button & Email Copy */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-muted hover:text-purple-600 transition-colors flex items-center gap-1.5"
                    title="Copy email address"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    <span>{copied ? 'Copied to Clipboard!' : 'hello@farhanaasha.com'}</span>
                  </button>
                </div>

                <button
                  type="submit"
                  id="submit-btn"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-[#08040D] hover:bg-[#C4B5FD] transition-all duration-300 shadow-purple-glow hover:shadow-purple-glow-lg flex items-center justify-center gap-2 group ${
                    isSubmitting ? 'opacity-70' : ''
                  }`}
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Inquiry'}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          ) : (
            /* Success State Notification */
            <div id="form-success" className="p-8 flex flex-col items-center justify-center text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-400 flex items-center justify-center text-purple-600 mb-4 shadow-purple-glow">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-sans font-medium text-[#2B2140] mb-2">Inquiry Received.</h3>
              <p className="text-sm text-[#5C5075] max-w-sm mb-6">
                Thank you for reaching out. Farhana will review your project objectives and respond within 24–48 business hours.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-purple-700 liquid-glass border border-purple-300 hover:bg-purple-100 transition-all font-semibold"
              >
                Send Another Note
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
