import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const NAV_ITEMS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.certificates', href: '#certificates' },
  { key: 'nav.blog', href: '#blog' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

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
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.key}
            href={item.href}
            className="nav-link font-mono text-xs lg:text-sm transition-colors duration-200"
            style={{ color: '#8892A4' }}
            onMouseEnter={e => e.currentTarget.style.color = '#E2E8F0'}
            onMouseLeave={e => e.currentTarget.style.color = '#8892A4'}
          >
            <span style={{ color: '#4F6EF7' }}>0{i + 1}.</span> {t(item.key)}
          </a>
        ))}
        
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="ml-2 px-3 py-1.5 rounded font-mono text-xs transition-all duration-200 flex items-center gap-2"
          style={{ 
            color: '#E2E8F0', 
            background: 'rgba(58, 58, 74, 0.3)',
            border: '1px solid rgba(58, 58, 74, 0.6)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(79,110,247,0.1)';
            e.currentTarget.style.borderColor = 'rgba(79,110,247,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(58, 58, 74, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(58, 58, 74, 0.6)';
          }}
        >
          <span className={lang === 'en' ? 'text-[#4F6EF7] font-bold' : 'opacity-50'}>EN</span>
          <span className="opacity-30">|</span>
          <span className={lang === 'id' ? 'text-[#4F6EF7] font-bold' : 'opacity-50'}>ID</span>
        </button>
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
              key={item.key}
              href={item.href}
              className="font-mono text-sm"
              style={{ color: '#8892A4' }}
              onClick={() => setOpen(false)}
            >
              <span style={{ color: '#4F6EF7' }}>0{i + 1}.</span> {t(item.key)}
            </a>
          ))}
          
          <div className="w-full h-px bg-[#3A3A4A] my-2" />
          
          <button
            onClick={() => { toggleLanguage(); setOpen(false); }}
            className="font-mono text-sm text-left flex items-center gap-3"
            style={{ color: '#E2E8F0' }}
          >
            Language:
            <span className={lang === 'en' ? 'text-[#4F6EF7] font-bold' : 'opacity-50'}>EN</span>
            <span className="opacity-30">/</span>
            <span className={lang === 'id' ? 'text-[#4F6EF7] font-bold' : 'opacity-50'}>ID</span>
          </button>
        </motion.div>
      )}
    </nav>
  );
}
