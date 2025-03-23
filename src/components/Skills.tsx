import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Globe,
  Layout,
  Server,
  Shield,
  Smartphone,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-10 h-10" />,
    skills: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Material UI', 'Bootstrap'],
    color: 'from-purple-600 to-blue-500',
  },
  {
    title: 'Backend',
    icon: <Server className="w-10 h-10" />,
    skills: ['Node.js', 'Express', 'NestJS', 'Python', 'Java', 'Spring Boot'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Database',
    icon: <Database className="w-10 h-10" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    color: 'from-purple-600 to-blue-500',
  },
  {
    title: 'Mobile',
    icon: <Smartphone className="w-10 h-10" />,
    skills: ['React Native', 'Flutter', 'Ionic', 'Android'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'DevOps',
    icon: <Globe className="w-10 h-10" />,
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Git'],
    color: 'from-purple-600 to-blue-500',
  },
  {
    title: 'Security',
    icon: <Shield className="w-10 h-10" />,
    skills: ['OAuth 2.0', 'JWT', 'HTTPS', 'Encryption', 'Security Best Practices'],
    color: 'from-blue-500 to-purple-600',
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        {/* Particle Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{ y: ['0%', '100%'], opacity: [1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        {/* Interactive Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,191,255,0.4), rgba(0,255,127,0.4))',
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex justify-center">
              <motion.div
                className="relative w-full max-w-xs h-[250px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/30 shadow-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, rotateX: -5, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <div
                    className={`bg-gradient-to-r ${category.color} p-4 rounded-full mb-4 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium text-white opacity-90 hover:opacity-100 transition-opacity"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
