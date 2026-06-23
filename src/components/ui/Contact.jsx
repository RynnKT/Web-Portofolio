import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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
    href: 'https://linkedin.com/',
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
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const inputStyle = {
    background: '#12121A',
    border: '1px solid #3A3A4A',
    color: '#E2E8F0',
    borderRadius: '8px',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
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
          <span className="font-mono text-sm" style={{ color: '#4F6EF7' }}>03.</span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Get In Touch
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h3
              className="font-display font-bold text-2xl md:text-3xl"
              style={{ color: '#E2E8F0', fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Let's Build Something{' '}
              <span className="gradient-text">Amazing</span> Together
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#8892A4' }}>
              I'm currently open to new opportunities. Whether you have a project idea,
              a question, or just want to connect — my inbox is always open.
            </p>
            <p className="text-sm" style={{ color: '#8892A4' }}>
              I'll try my best to get back to you as soon as possible!
            </p>

            {/* Social links */}
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

          {/* Right — Contact Form */}
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

              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: '#4F6EF7' }}>
                  // Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#4F6EF7'}
                  onBlur={e => e.target.style.borderColor = '#3A3A4A'}
                />
              </div>

              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: '#4F6EF7' }}>
                  // Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#4F6EF7'}
                  onBlur={e => e.target.style.borderColor = '#3A3A4A'}
                />
              </div>

              <div>
                <label className="block font-mono text-xs mb-2" style={{ color: '#4F6EF7' }}>
                  // Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#4F6EF7'}
                  onBlur={e => e.target.style.borderColor = '#3A3A4A'}
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="mt-2 py-3 px-6 rounded-lg font-display font-semibold text-sm transition-all duration-300"
                style={{
                  background: sent ? '#28C840' : '#4F6EF7',
                  color: '#fff',
                  cursor: sending || sent ? 'not-allowed' : 'pointer',
                  boxShadow: '0 0 20px rgba(79,110,247,0.3)',
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
                onMouseEnter={e => {
                  if (!sending && !sent) e.currentTarget.style.boxShadow = '0 0 30px rgba(79,110,247,0.5)';
                }}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(79,110,247,0.3)'}
              >
                {sent ? '✓ Message Sent!' : sending ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-24 pb-8"
        >
          <p className="font-mono text-xs" style={{ color: '#3A3A4A' }}>
            Designed & Built with ♥ by{' '}
            <span style={{ color: '#4F6EF7' }}>Erridho Ramadhani Setiawan</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
