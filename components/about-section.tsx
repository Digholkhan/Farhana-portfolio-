import profileImage from '../app/Assets/Asha.jpeg';

export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[1.05fr_1.35fr] items-center gap-10 lg:gap-16">
          <div className="about-image-shell relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-300/10 rounded-[30px] blur-2xl" />
            <img
              src={profileImage.src}
              alt="Farhana Asha portrait"
              className="about-photo relative w-full max-w-xl mx-auto rounded-[30px] border border-white/10 shadow-2xl object-cover"
            />
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-purple-600 block mb-4">
              {'// 02 — About Me'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#2B2140] leading-tight">
              I turn ideas into <span className="font-serif italic text-purple-accent">clear, compelling stories.</span>
            </h2>

            <div className="mt-6 space-y-5 text-base sm:text-lg text-[#5C5075] font-light leading-relaxed">
              <p>
                I’m Farhana Asha, a content writer and brand storyteller focused on helping businesses speak with purpose, clarity, and emotional impact.
              </p>
              <p>
                From content planning and copywriting to digital marketing strategy, I build narratives that connect brands with the right audience and create lasting trust.
              </p>
              <p>
                My work blends strategy, creativity, and audience insight so every message feels authentic, premium, and conversion-focused.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="about-stat liquid-glass rounded-2xl border border-white/10 p-4">
                <div className="text-2xl font-serif italic text-purple-accent">8+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#786D8D] mt-2 font-mono">Years</div>
              </div>
              <div className="about-stat liquid-glass rounded-2xl border border-white/10 p-4">
                <div className="text-2xl font-serif italic text-purple-accent">50+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#786D8D] mt-2 font-mono">Projects</div>
              </div>
              <div className="about-stat liquid-glass rounded-2xl border border-white/10 p-4">
                <div className="text-2xl font-serif italic text-purple-accent">100%</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#786D8D] mt-2 font-mono">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  );
}
