import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Creative Developer',
  '3D Web Engineer',
];

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, words]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink" style={{ color: '#4F6EF7' }}>_</span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16"
      style={{ pointerEvents: 'none' }}
    >
      {/* Left content */}
      <div className="max-w-2xl w-full flex flex-col gap-6 pointer-events-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span
            className="w-2 h-2 rounded-full pulse-accent"
            style={{ background: '#4F6EF7' }}
          />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: '#4F6EF7' }}
          >
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold leading-none"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontFamily: '"Orbitron", sans-serif',
          }}
        >
          <span className="gradient-text">Erridho</span>
          <br />
          <span style={{ color: '#E2E8F0' }}>Ramadhani</span>
          <br />
          <span style={{ color: '#E2E8F0', opacity: 0.6 }}>Setiawan</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-mono text-lg md:text-xl"
          style={{ color: '#8892A4', fontFamily: '"JetBrains Mono", monospace' }}
        >
          {'> '}
          <TypeWriter words={ROLES} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base md:text-lg max-w-md"
          style={{ color: '#8892A4', lineHeight: 1.7 }}
        >
          Turning ideas into{' '}
          <em style={{ color: '#E2E8F0', fontStyle: 'normal', fontWeight: 600 }}>
            immersive digital experiences
          </em>
          . I build things that live on the internet.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-2"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg font-display font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: '#4F6EF7',
              color: '#fff',
              boxShadow: '0 0 24px rgba(79,110,247,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(79,110,247,0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(79,110,247,0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-lg font-display font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: 'transparent',
              color: '#E2E8F0',
              border: '1px solid #3A3A4A',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#4F6EF7';
              e.currentTarget.style.color = '#4F6EF7';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#3A3A4A';
              e.currentTarget.style.color = '#E2E8F0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-8 mt-4 pt-6"
          style={{ borderTop: '1px solid #3A3A4A' }}
        >
          {[
            { number: '3+', label: 'Years Coding' },
            { number: '10+', label: 'Projects Built' },
            { number: '8+', label: 'Technologies' },
          ].map(stat => (
            <div key={stat.label}>
              <div
                className="font-display font-bold text-2xl"
                style={{ color: '#4F6EF7' }}
              >
                {stat.number}
              </div>
              <div className="text-xs mt-1" style={{ color: '#8892A4' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ pointerEvents: 'none' }}
      >
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#3A3A4A' }}>
          scroll
        </span>
        <div
          className="w-[1px] h-12"
          style={{
            background: 'linear-gradient(to bottom, #4F6EF7, transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  );
}
