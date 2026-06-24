import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'rgba(18, 18, 26, 0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #3A3A4A',
            color: '#8892A4',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#4F6EF7';
            e.currentTarget.style.borderColor = '#4F6EF7';
            e.currentTarget.style.background = 'rgba(79,110,247,0.1)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#8892A4';
            e.currentTarget.style.borderColor = '#3A3A4A';
            e.currentTarget.style.background = 'rgba(18, 18, 26, 0.8)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
