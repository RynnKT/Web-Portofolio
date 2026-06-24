import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/RynnKT',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/erridho-ramadhani-s-34256632a',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:erridho@example.com',
    icon: <Mail size={20} />,
  },
];

export function Contact() {
  const [formState, setFormState] = useState('idle');
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
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
          <span className="font-mono text-sm" style={{ color: '#4F6EF7' }}>03.</span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Orbitron", sans-serif' }}
          >
            {t('contact.title')}
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight" style={{ color: '#E2E8F0' }}>
              {t('contact.heading1')}<br />
              <span style={{ color: '#4F6EF7' }}>{t('contact.heading2')}</span> {t('contact.heading3')}.
            </h3>
            
            <p className="text-lg leading-relaxed max-w-md" style={{ color: '#8892A4' }}>
              {t('contact.subheading1')}
            </p>
            
            <p className="text-lg leading-relaxed max-w-md" style={{ color: '#8892A4' }}>
              {t('contact.subheading2')}
            </p>

            <div className="flex flex-col gap-3 mt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200"
                  style={{
                    background: '#12121A',
                    border: '1px solid #3A3A4A',
                    color: '#8892A4',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#4F6EF7';
                    e.currentTarget.style.color = '#4F6EF7';
                    e.currentTarget.style.background = 'rgba(79,110,247,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#3A3A4A';
                    e.currentTarget.style.color = '#8892A4';
                    e.currentTarget.style.background = '#12121A';
                  }}
                >
                  {link.icon}
                  <span className="font-mono text-sm">{link.label}</span>
                  <span className="ml-auto opacity-40">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-7 rounded-xl"
              style={{ background: '#12121A', border: '1px solid #3A3A4A' }}
            >
              <div className="flex gap-1.5 mb-2">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>

              <div className="relative">
                <label className="block font-mono text-sm mb-2" style={{ color: '#818CF8' }}>
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('contact.form.name_placeholder')}
                  className="w-full bg-transparent border-b-2 py-2 outline-none font-mono transition-colors"
                  style={{ borderColor: '#3A3A4A', color: '#E2E8F0' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#4F6EF7'}
                  onBlur={e => e.currentTarget.style.borderColor = '#3A3A4A'}
                />
              </div>

              <div className="relative">
                <label className="block font-mono text-sm mb-2" style={{ color: '#818CF8' }}>
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t('contact.form.email_placeholder')}
                  className="w-full bg-transparent border-b-2 py-2 outline-none font-mono transition-colors"
                  style={{ borderColor: '#3A3A4A', color: '#E2E8F0' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#4F6EF7'}
                  onBlur={e => e.currentTarget.style.borderColor = '#3A3A4A'}
                />
              </div>

              <div className="relative">
                <label className="block font-mono text-sm mb-2" style={{ color: '#818CF8' }}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder={t('contact.form.message_placeholder')}
                  className="w-full bg-transparent border-b-2 py-2 outline-none font-mono resize-none transition-colors"
                  style={{ borderColor: '#3A3A4A', color: '#E2E8F0' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#4F6EF7'}
                  onBlur={e => e.currentTarget.style.borderColor = '#3A3A4A'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="mt-2 py-3 px-6 rounded-lg font-display font-semibold text-sm transition-all duration-300 flex justify-center items-center"
                style={{
                  background: formState === 'sent' ? '#28C840' : '#4F6EF7',
                  color: '#fff',
                  cursor: formState !== 'idle' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 0 20px rgba(79,110,247,0.3)',
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      {t('contact.form.btn_send')} <Send size={18} />
                    </motion.span>
                  )}
                  {formState === 'sending' && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {t('contact.form.btn_sending')}
                    </motion.span>
                  )}
                  {formState === 'sent' && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {t('contact.form.btn_sent')}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-24 pb-8"
        >
          <p className="font-mono text-xs" style={{ color: '#3A3A4A' }}>
            {t('contact.footer')} <span style={{ color: '#E2E8F0' }}>Erridho Ramadhani Setiawan</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
