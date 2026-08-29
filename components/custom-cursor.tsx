'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const particleLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor glow follow
    const glow = glowRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    function updateGlow() {
      if (glow) {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;
        glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(updateGlow);
    }

    updateGlow();

    // Cursor particles
    const particleLayer = particleLayerRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!particleLayer || reducedMotion) {
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animId);
      };
    }

    const symbols = ['✦', '✧', '❀', '✿', '🦋'];
    const trailSymbols = ['✦', '✧', '❀', '🦋'];
    let lastTrailAt = 0;

    function createParticle(x: number, y: number, isBurst = false) {
      if (!particleLayer) return;
      const particle = document.createElement('span');
      const symbolPool = isBurst ? symbols : trailSymbols;
      const symbol = symbolPool[Math.floor(Math.random() * symbolPool.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = isBurst ? 42 + Math.random() * 78 : 14 + Math.random() * 30;
      const size = isBurst ? 0.75 + Math.random() * 0.8 : 0.55 + Math.random() * 0.55;

      particle.className = `cursor-particle ${
        symbol.startsWith('✦') || symbol.startsWith('✧') ? 'cursor-particle-star' : ''
      } ${Math.random() > 0.55 ? 'cursor-particle-flower' : ''}`;
      particle.textContent = symbol;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--particle-x', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--particle-y', `${Math.sin(angle) * distance - (isBurst ? 12 : 4)}px`);
      particle.style.setProperty('--particle-size', `${size}rem`);
      particle.style.setProperty('--particle-rotate', `${-35 + Math.random() * 70}deg`);
      particle.style.setProperty('--particle-duration', isBurst ? '1800ms' : '1300ms');

      if (particleLayer.childElementCount >= 90 && particleLayer.firstElementChild) {
        particleLayer.firstElementChild.remove();
      }

      particleLayer.appendChild(particle);
      particle.addEventListener('animationend', () => particle.remove(), { once: true });
      window.setTimeout(() => particle.remove(), 2200);
    }

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastTrailAt < 38) return;
      lastTrailAt = now;
      createParticle(event.clientX, event.clientY);
    };

    const handlePointerDown = (event: PointerEvent) => {
      for (let index = 0; index < 12; index += 1) {
        createParticle(event.clientX, event.clientY, true);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} id="cursor-glow" className="cursor-glow pointer-events-none hidden md:block" aria-hidden="true" />
      <div ref={particleLayerRef} id="cursor-particles" className="cursor-particles" aria-hidden="true" />
    </>
  );
}
