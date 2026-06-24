import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const initialArticles = [
  {
    id: 1,
    title: {
      en: 'Building an Immersive 3D Portfolio with React Three Fiber',
      id: 'Membangun Portofolio 3D Imersif dengan React Three Fiber'
    },
    excerpt: {
      en: 'A deep dive into how I combined React, Three.js, and Framer Motion to create an interactive web experience.',
      id: 'Pembahasan mendalam tentang bagaimana saya menggabungkan React, Three.js, dan Framer Motion untuk menciptakan pengalaman web interaktif.'
    },
    date: 'Oct 24, 2023',
    link: '#'
  },
  {
    id: 2,
    title: {
      en: 'The Future of Web Design: Glassmorphism and Neon Accents',
      id: 'Masa Depan Web Design: Glassmorphism dan Aksen Neon'
    },
    excerpt: {
      en: 'Exploring modern UI trends and how to implement them performantly using TailwindCSS.',
      id: 'Eksplorasi tren UI modern dan bagaimana mengimplementasikannya secara efisien menggunakan TailwindCSS.'
    },
    date: 'Jan 12, 2024',
    link: '#'
  },
  {
    id: 3,
    title: {
      en: 'Why I Chose Laravel for Building Scalable APIs',
      id: 'Mengapa Saya Memilih Laravel untuk Membangun API Skalabel'
    },
    excerpt: {
      en: 'My thoughts on the PHP ecosystem in 2024 and why Laravel remains a top choice for enterprise applications.',
      id: 'Pemikiran saya tentang ekosistem PHP di 2024 dan alasan Laravel tetap menjadi pilihan utama untuk aplikasi skala besar.'
    },
    date: 'Mar 05, 2024',
    link: '#'
  }
];

export function Blog() {
  const [hovered, setHovered] = useState(null);
  const { lang, t } = useLanguage();

  return (
    <section
      id="blog"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,110,247,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-sm" style={{ color: '#4F6EF7' }}>04.</span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Orbitron", sans-serif' }}
          >
            {t('blog.title')}
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(article.id)}
              onMouseLeave={() => setHovered(null)}
              className="group flex flex-col p-7 rounded-xl bg-[#12121A] border border-[#3A3A4A] transition-all duration-300 h-full relative overflow-hidden cursor-pointer"
              style={{
                borderColor: hovered === article.id ? '#4F6EF7' : '#3A3A4A',
                transform: hovered === article.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === article.id ? '0 10px 30px rgba(79,110,247,0.1)' : 'none'
              }}
              onClick={() => window.open(article.link, '_blank')}
            >
              {/* Subtle top glow on hover */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4F6EF7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              />

              <div className="flex items-center gap-2 font-mono text-xs text-[#8892A4] mb-4">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>

              <h3 className="font-display font-semibold text-xl text-[#E2E8F0] mb-3 group-hover:text-[#4F6EF7] transition-colors duration-300">
                {article.title[lang]}
              </h3>

              <p className="text-sm text-[#8892A4] leading-relaxed mb-8 flex-grow">
                {article.excerpt[lang]}
              </p>

              <div className="mt-auto flex items-center gap-2 font-mono text-sm text-[#4F6EF7] font-medium">
                <span className="group-hover:mr-1 transition-all duration-300">{t('blog.read_more')}</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
