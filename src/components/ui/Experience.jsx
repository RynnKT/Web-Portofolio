import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();
  const experiences = t('experience.items');

  return (
    <section
      id="experience"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,110,247,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-sm" style={{ color: '#4F6EF7' }}>02.</span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Orbitron", sans-serif' }}
          >
            {t('experience.title')}
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-0">
          {/* Main vertical line (mobile left, desktop center) */}
          <div 
            className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]"
            style={{ background: 'linear-gradient(to bottom, transparent, #3A3A4A, transparent)' }}
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative mb-16 md:mb-24 last:mb-0 w-full flex flex-col md:flex-row justify-between items-center">
                
                {/* Timeline Dot */}
                <div 
                  className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full z-10"
                  style={{ background: '#4F6EF7', boxShadow: '0 0 10px rgba(79,110,247,0.8)' }}
                />

                {/* Left side (Empty for odd, Content for even on desktop) */}
                <div className={`w-full md:w-5/12 mb-4 md:mb-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}
                  >
                    <span className="font-mono text-[#4F6EF7] text-sm mb-2">{exp.year}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#E2E8F0] mb-1">{exp.role}</h3>
                    <h4 className="text-md text-[#8892A4] mb-4">{exp.company}</h4>
                  </motion.div>
                </div>

                {/* Right side (Content for odd, empty for even on desktop) */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:order-2 md:pl-12' : 'md:text-left md:pr-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="p-6 rounded-xl bg-[#12121A] border border-[#3A3A4A] hover:border-[#4F6EF7] transition-colors duration-300 shadow-lg"
                  >
                    <p className="text-sm leading-relaxed text-[#8892A4] mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="font-mono text-xs px-2 py-1 rounded bg-[#4F6EF7]/10 text-[#4F6EF7] border border-[#4F6EF7]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
