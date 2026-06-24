import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone, Database } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { t } = useLanguage();
  const projectsData = t('projects.items');

  const projects = [
    {
      id: 1,
      number: '01',
      title: projectsData[0].title,
      description: projectsData[0].description,
      tech: ['React', 'Node.js', 'AI', 'MongoDB'],
      links: { github: 'https://github.com/sanddyyaure14/project_madrasah', demo: 'https://github.com/sanddyyaure14/project_madrasah' },
      icon: <Monitor size={24} />,
      color: '#4F6EF7',
      featured: true,
    },
    {
      id: 2,
      number: '02',
      title: projectsData[1].title,
      description: projectsData[1].description,
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Charts'],
      links: { github: 'https://github.com/RynnKT/Project-SehatKerja', demo: 'https://github.com/RynnKT/Project-SehatKerja' },
      icon: <Database size={24} />,
      color: '#28C840',
      featured: true,
    },
    {
      id: 3,
      number: '03',
      title: projectsData[2].title,
      description: projectsData[2].description,
      tech: ['React Native', 'Expo', 'Express', 'PostgreSQL'],
      links: { github: 'https://github.com/RynnKT/PendaftaranPeserta', demo: 'https://github.com/RynnKT/PendaftaranPeserta' },
      icon: <Smartphone size={24} />,
      color: '#FEBC2E',
      featured: false,
    }
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,110,247,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full">
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
            style={{ color: '#E2E8F0', fontFamily: '"Orbitron", sans-serif' }}
          >
            {t('projects.title')}
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative rounded-xl p-7 cursor-pointer transition-all duration-400 group"
              style={{
                background: '#12121A',
                border: `1px solid ${hoveredProject === i ? project.color : '#3A3A4A'}`,
                boxShadow: hoveredProject === i
                  ? `0 8px 40px ${project.color}15, inset 0 1px 0 ${project.color}10`
                  : '0 2px 16px rgba(0,0,0,0.3)',
                transform: hoveredProject === i ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-4xl font-bold opacity-20 select-none" style={{ color: project.color }}>
                    {project.number}
                  </span>
                  <div>
                    {project.featured && (
                      <span className="font-mono text-xs uppercase tracking-wider" style={{ color: project.color }}>
                        {t('projects.badge_featured')}
                      </span>
                    )}
                    <h3 className="font-display font-semibold text-xl" style={{ color: hoveredProject === i ? project.color : '#E2E8F0', fontFamily: '"Space Grotesk", sans-serif' }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-3 mt-1">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-200 hover:text-[#4F6EF7] hover:bg-[rgba(79,110,247,0.1)]" style={{ color: '#8892A4', background: 'rgba(58,58,74,0.4)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-200" style={{ color: '#8892A4', background: 'rgba(58,58,74,0.4)' }}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 max-w-2xl" style={{ color: '#8892A4' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(79,110,247,0.08)', color: '#818CF8', border: '1px solid rgba(79,110,247,0.15)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-all duration-300" style={{ background: hoveredProject === i ? project.color : 'transparent' }} />
            </motion.div>
          ))}
        </div>

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
            className="group inline-flex items-center justify-center gap-3 font-mono text-sm px-6 py-3 rounded-lg border transition-all duration-300"
            style={{ borderColor: '#3A3A4A', color: '#E2E8F0', background: '#12121A' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#4F6EF7';
              e.currentTarget.style.color = '#4F6EF7';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#3A3A4A';
              e.currentTarget.style.color = '#E2E8F0';
            }}
          >
            {t('projects.more')}
            <ExternalLink size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
