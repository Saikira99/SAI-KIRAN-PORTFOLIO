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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    rotateX: -5,
    rotateY: 5,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const iconStep = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
};

const titleStep = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
};

const skillsStep = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } },
};

const iconHover = {
  scale: 1.1,
  rotate: 10,
  transition: { duration: 0.3 },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              animate={{ y: ['0%', '100%'], opacity: [1, 0] }}
              transition={{
                duration: 3,
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
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,191,255,0.3), rgba(0,255,127,0.3))',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div className="relative w-full max-w-xs h-[250px] bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg overflow-hidden cursor-pointer">
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <motion.div
                    className={`bg-gradient-to-r ${category.color} p-4 rounded-full mb-4`}
                    variants={iconStep}
                    whileHover={iconHover}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-white"
                    variants={titleStep}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.div
                    className="flex flex-wrap justify-center gap-2"
                    variants={skillsStep}
                  >
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium text-white opacity-90 hover:opacity-100 transition-opacity"
                        whileHover={{ x: 3, y: -3, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}