import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 500); // Wait a bit at 100% before triggering complete
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0F]"
    >
      <div className="flex flex-col items-center gap-6 max-w-sm w-full px-6">
        {/* Logo or Initial */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-4xl tracking-widest text-[#4F6EF7]"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
        >
          ERS
        </motion.div>

        {/* Name Typewriter effect simulation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm tracking-widest uppercase text-[#8892A4]"
        >
          Loading Interactive Experience
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-[#3A3A4A] overflow-hidden mt-4 relative rounded-full">
          {/* Progress Bar Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-[#4F6EF7] to-[#818CF8]"
            style={{ width: `${progress}%` }}
          />
          {/* Glow effect on the tip */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#4F6EF7] rounded-full blur-[6px]"
            style={{ left: `calc(${progress}% - 8px)` }}
          />
        </div>

        {/* Percentage Text */}
        <div className="flex justify-between w-full mt-2 font-mono text-xs text-[#8892A4]">
          <span>Initialize</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
