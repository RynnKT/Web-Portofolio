import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Laravel', level: 88, color: '#FF2D20' },
  { name: 'React', level: 85, color: '#61DAFB' },
  { name: 'Node.js', level: 80, color: '#68A063' },
  { name: 'Three.js', level: 75, color: '#4F6EF7' },
  { name: 'Figma', level: 82, color: '#F24E1E' },
  { name: 'Python', level: 70, color: '#3776AB' },
  { name: 'PHP', level: 86, color: '#8993BE' },
  { name: 'Java', level: 65, color: '#ED8B00' },
  { name: 'CSS', level: 90, color: '#E2E8F0' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-32 px-6 md:px-16 flex items-center"
    >
      {/* Radial glow BG accent */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,110,247,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="font-mono text-sm"
            style={{ color: '#4F6EF7' }}
          >
            01.
          </span>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: '#E2E8F0', fontFamily: '"Space Grotesk", sans-serif' }}
          >
            About Me
          </h2>
          <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, #3A3A4A, transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <p className="text-base leading-relaxed" style={{ color: '#8892A4' }}>
              Hello! I'm <strong style={{ color: '#E2E8F0' }}>Erridho Ramadhani Setiawan</strong>, a passionate 
              developer who sits at the intersection of design and engineering. I love building 
              things that are not just functional — but beautiful and immersive.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#8892A4' }}>
              My experience spans across full-stack web development, UI/UX design, and creative 
              3D web implementations. I thrive in environments where I can wear multiple hats and 
              push the boundaries of what's possible on the web.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#8892A4' }}>
              When I'm not coding, I'm usually exploring new design trends, learning cutting-edge 
              web technologies, or working on personal creative projects.
            </p>

            {/* Terminal-style decoration */}
            <div
              className="rounded-lg p-5 mt-2 font-mono text-sm"
              style={{ background: '#12121A', border: '1px solid #3A3A4A' }}
            >
              <div className="flex gap-1.5 mb-3">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>
              <p style={{ color: '#4F6EF7' }}>$ whoami</p>
              <p className="mt-1" style={{ color: '#E2E8F0' }}>erridho@developer</p>
              <p className="mt-2" style={{ color: '#4F6EF7' }}>$ cat roles.txt</p>
              <p style={{ color: '#E2E8F0' }}>Full Stack Dev, UI/UX, Creative Dev</p>
              <p className="mt-2" style={{ color: '#4F6EF7' }}>$ echo $TAGLINE</p>
              <p style={{ color: '#818CF8' }}>"Turning ideas into digital experiences"</p>
              <p className="mt-2 cursor-blink" style={{ color: '#4F6EF7' }}>▮</p>
            </div>
          </motion.div>

          {/* Skills */}
          <div className="flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-base"
              style={{ color: '#E2E8F0', fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Technologies I work with
            </motion.p>

            <div className="flex flex-col gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono text-sm" style={{ color: '#E2E8F0' }}>
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs" style={{ color: '#8892A4' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: '#3A3A4A' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, #4F6EF7, ${skill.color})`,
                        boxShadow: `0 0 8px ${skill.color}44`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
