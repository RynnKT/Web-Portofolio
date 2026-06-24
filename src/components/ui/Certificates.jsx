import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Front-End Web Development Professional',
    issuer: 'Dicoding Indonesia',
    date: '2023',
    link: '#',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder image
  },
  {
    id: 2,
    title: 'Back-End Developer Expert',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder image
  },
  {
    id: 3,
    title: 'React.js & UI/UX Design Masterclass',
    issuer: 'Udemy / Online Course',
    date: '2023',
    link: '#',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder image
  }
];

export function Certificates() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
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
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-sm" style={{ color: '#4F6EF7' }}>03.</span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Orbitron", sans-serif' }}
          >
            Certificates
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(cert.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-xl overflow-hidden bg-[#12121A] border border-[#3A3A4A] transition-all duration-300"
              style={{
                borderColor: hovered === cert.id ? '#4F6EF7' : '#3A3A4A',
                transform: hovered === cert.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered === cert.id ? '0 12px 30px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] to-transparent opacity-90" />
                
                {/* View Icon Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(79,110,247,0.2)' }}
                >
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#4F6EF7] text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1A1A24] border border-[#3A3A4A] flex items-center justify-center text-[#4F6EF7]">
                  <Award size={18} />
                </div>
                
                <span className="font-mono text-xs text-[#8892A4] block mb-2">{cert.date}</span>
                <h3 className="font-display font-semibold text-lg text-[#E2E8F0] mb-1 line-clamp-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#4F6EF7]">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
