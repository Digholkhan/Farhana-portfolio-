'use client';

import { useState, useRef } from 'react';

export default function AudioAmbience() {
  const [isActive, setIsActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (!isActive) {
      // Play 432 Hz warm harmonic chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(432, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(576, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.0);

      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <button
        id="sound-toggle-btn"
        onClick={toggleSound}
        className={`glass-pill text-xs flex items-center gap-2 py-2 px-3.5 transition-all group ${
          isActive ? 'border-purple-400/50 text-[#7C3AED]' : 'text-muted hover:text-[#7C3AED]'
        }`}
        title="Toggle ambient audio cues"
      >
        <span className="sound-wave flex items-end gap-0.5 h-3">
          <span className="w-0.5 h-1.5 bg-purple-400 rounded-full group-hover:h-3 transition-all" />
          <span className="w-0.5 h-3 bg-purple-300 rounded-full" />
          <span className="w-0.5 h-2 bg-purple-400 rounded-full group-hover:h-3 transition-all" />
        </span>
        <span className="font-mono text-[11px] tracking-wider uppercase text-purple-200/80">
          {isActive ? 'Mute' : 'Ambient'}
        </span>
      </button>
    </div>
  );
}
