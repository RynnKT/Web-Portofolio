import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Hero } from './components/ui/Hero';
import { About } from './components/ui/About';
import { Projects } from './components/ui/Projects';
import { Contact } from './components/ui/Contact';
import { Navbar } from './components/ui/Navbar';
import { Scene } from './components/3d/Scene';

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

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
      requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove);
    animateRing();
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="relative w-full bg-bg text-text overflow-x-hidden noise grid-bg">
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />

      {/* Scanline */}
      <div className="scanline" />

      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 2]}
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
        <Projects />
        <div className="section-line" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
