import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5"
      style={{
        background: 'rgba(10, 10, 15, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(58, 58, 74, 0.4)',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-display font-bold text-lg tracking-tight"
        style={{ fontFamily: '"Space Grotesk", sans-serif', color: '#E2E8F0' }}
      >
        <span style={{ color: '#4F6EF7' }}>E</span>rridho
        <span style={{ color: '#4F6EF7' }}>.</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link font-mono text-sm transition-colors duration-200"
            style={{ color: '#8892A4' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E2E8F0'}
            onMouseLeave={e => e.currentTarget.style.color = '#8892A4'}
          >
            <span style={{ color: '#4F6EF7' }}>0{i + 1}.</span> {item.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          className="px-4 py-2 rounded font-mono text-sm border transition-all duration-200"
          style={{ borderColor: '#4F6EF7', color: '#4F6EF7' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(79,110,247,0.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 transition-all" style={{ background: '#E2E8F0' }} />
        <span className="block w-4 h-0.5" style={{ background: '#4F6EF7' }} />
        <span className="block w-6 h-0.5" style={{ background: '#E2E8F0' }} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 flex flex-col gap-4 px-6 py-6 md:hidden"
          style={{
            background: 'rgba(10, 10, 15, 0.95)',
            borderBottom: '1px solid #3A3A4A',
            backdropFilter: 'blur(20px)',
          }}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm"
              style={{ color: '#8892A4' }}
              onClick={() => setOpen(false)}
            >
              <span style={{ color: '#4F6EF7' }}>0{i + 1}.</span> {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
