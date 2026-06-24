import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Hero } from './components/ui/Hero';
import { About } from './components/ui/About';
import { Experience } from './components/ui/Experience';
import { Projects } from './components/ui/Projects';
import { Certificates } from './components/ui/Certificates';
import { Contact } from './components/ui/Contact';
import { Navbar } from './components/ui/Navbar';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { BackToTop } from './components/ui/BackToTop';
import { Scene } from './components/3d/Scene';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      rafId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId.current = requestAnimationFrame(animateRing);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="relative w-full bg-bg text-text overflow-x-hidden noise grid-bg">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />

      {/* Scanline */}
      <div className="scanline" />

      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* HTML Overlay Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <div className="section-line" />
        <About />
        <div className="section-line" />
        <Experience />
        <div className="section-line" />
        <Projects />
        <div className="section-line" />
        <Certificates />
        <div className="section-line" />
        <Contact />
      </div>
      
      {/* Global Utilities */}
      <BackToTop />
    </div>
  );
}

export default App;
