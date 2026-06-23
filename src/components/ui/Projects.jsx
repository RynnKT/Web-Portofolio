import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Aplikasi Manage Madrasah',
    description:
      'Aplikasi berbasis AI yang membantu guru-guru di madrasah untuk membuat materi pembelajaran, kuis, dan konten edukatif guna menunjang proses mengajar secara lebih efisien dan modern.',
    tech: ['React', 'Node.js', 'AI/ML', 'TailwindCSS'],
    github: 'https://github.com/sanddyyaure14/project_madrasah',
    featured: true,
  },
  {
    number: '02',
    title: 'SehatKerja — K3 Platform',
    description:
      'Platform digital Sistem Informasi Manajemen K3 (Kesehatan & Keselamatan Kerja) yang dirancang untuk memantau, mengelola, dan meningkatkan aspek K3 di lingkungan perusahaan melalui pendekatan berbasis data.',
    tech: ['Laravel', 'MySQL', 'Chart.js', 'Bootstrap'],
    github: 'https://github.com/RynnKT/Project-SehatKerja',
    featured: true,
  },
  {
    number: '03',
    title: 'Pendaftaran Peserta',
    description:
      'Aplikasi fullstack untuk mengelola proses pendaftaran peserta secara online. Mencakup backend RESTful API, frontend web yang modern, dan mobile app (Expo/React Native) dalam satu monorepo.',
    tech: ['React', 'Expo', 'Node.js', 'REST API'],
    github: 'https://github.com/RynnKT/PendaftaranPeserta',
    featured: false,
  },
];

export function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,110,247,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-sm" style={{ color: '#4F6EF7' }}>02.</span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Featured Projects
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-xl p-7 cursor-pointer transition-all duration-400 group"
              style={{
                background: '#12121A',
                border: `1px solid ${hovered === i ? '#4F6EF7' : '#3A3A4A'}`,
                boxShadow: hovered === i
                  ? '0 8px 40px rgba(79,110,247,0.15), inset 0 1px 0 rgba(79,110,247,0.1)'
                  : '0 2px 16px rgba(0,0,0,0.3)',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span
                    className="font-mono text-4xl font-bold opacity-20 select-none"
                    style={{ color: '#4F6EF7', lineHeight: 1 }}
                  >
                    {project.number}
                  </span>
                  <div>
                    {project.featured && (
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded mb-2 block w-fit"
                        style={{ background: 'rgba(79,110,247,0.1)', color: '#4F6EF7', border: '1px solid rgba(79,110,247,0.2)' }}
                      >
                        Featured
                      </span>
                    )}
                    <h3
                      className="font-display font-semibold text-xl"
                      style={{
                        color: hovered === i ? '#4F6EF7' : '#E2E8F0',
                        fontFamily: '"Space Grotesk", sans-serif',
                        transition: 'color 0.3s',
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Icon links */}
                <div className="flex gap-3 mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200"
                    style={{
                      color: '#8892A4',
                      background: 'rgba(58,58,74,0.4)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#4F6EF7';
                      e.currentTarget.style.background = 'rgba(79,110,247,0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#8892A4';
                      e.currentTarget.style.background = 'rgba(58,58,74,0.4)';
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    {/* GitHub SVG */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200"
                    style={{ color: '#8892A4', background: 'rgba(58,58,74,0.4)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#4F6EF7';
                      e.currentTarget.style.background = 'rgba(79,110,247,0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#8892A4';
                      e.currentTarget.style.background = 'rgba(58,58,74,0.4)';
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5 max-w-2xl"
                style={{ color: '#8892A4' }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(79,110,247,0.08)',
                      color: '#818CF8',
                      border: '1px solid rgba(79,110,247,0.15)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Animated left border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-all duration-300"
                style={{
                  background: hovered === i
                    ? 'linear-gradient(to bottom, #4F6EF7, #818CF8)'
                    : 'transparent',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/RynnKT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm transition-all duration-200"
            style={{ color: '#4F6EF7' }}
            onMouseEnter={e => e.currentTarget.style.gap = '12px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            View all projects on GitHub
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
