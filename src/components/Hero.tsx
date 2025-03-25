import { ArrowDown, BriefcaseIcon, FileText, Database, Globe, Layout, Server, Smartphone, Code, Brain } from "lucide-react";
import { ProfileIcon } from "./ProfileIcon";
import { motion, AnimatePresence } from "framer-motion";
import TypingText from "./TypingText";
import { useState, useEffect } from "react";
import React from "react";

const technologies = [
  { name: "Frontend", Icon: Layout, color: "from-purple-600 to-blue-500" },
  { name: "Backend", Icon: Server, color: "from-blue-500 to-purple-600" },
  { name: "Database", Icon: Database, color: "from-purple-600 to-blue-500" },
  { name: "Mobile", Icon: Smartphone, color: "from-blue-500 to-purple-600" },
  { name: "Web", Icon: Globe, color: "from-purple-600 to-blue-500" },
  { name: "Code", Icon: Code, color: "from-blue-500 to-purple-600" },
  { name: "AI/ML", Icon: Brain, color: "from-purple-600 to-blue-500" },
];

export function FloatingIcons() {
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    function updateRadius() {
      if (window.innerWidth < 480) {
        setRadius(50);
      } else if (window.innerWidth < 640) {
        setRadius(80);
      } else if (window.innerWidth < 768) {
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setRadius(160);
      } else if (window.innerWidth < 1280) {
        setRadius(200);
      } else {
        setRadius(240);
      }
    }
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] animate-rotate-slow">
        {technologies.map((tech, index) => {
          const angle = (index * (360 / technologies.length)) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={tech.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div className="relative group animate-float">
                <div
                  className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${tech.color} text-white 
                    shadow-xl transition-transform duration-500 backdrop-blur-md hover:scale-110 hover:rotate-6`}
                >
                  {React.createElement(tech.Icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium text-gray-800 shadow-md whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Foreground Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side Content */}
        <motion.div className="w-full md:w-1/2 space-y-4 text-left" variants={itemVariants}>
          <motion.h2
            className="text-sm md:text-base font-medium text-purple-600 tracking-widest uppercase"
            style={{ fontFamily: "'Raleway', sans-serif" }}
            variants={itemVariants}
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-tight leading-snug"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              <TypingText texts={['SAI KIRAN', 'A Full Stack AI Developer' , 'Idea Wrangler', 'Prompt Maestro']} />
            </span>
          </motion.h1>

          <motion.p
            className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed"
            style={{ fontFamily: "'Open Sans', sans-serif", letterSpacing: "0.5px" }}
            variants={itemVariants}
          >
            
            A passionate Code Alchemist blending robust backend mastery with mesmerizing front-end artistry. 
            I forge resilient server-side solutions with Java Spring Boot and Python, while architecting vibrant experiences using Angular, and React. 
            Driven by the passion for transforming complex ideas into innovative digital landscapes, I build web solutions that resonate in both function and form.
          </motion.p>

          {/* Buttons Section */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:scale-105 transition-all hover:shadow-lg group"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-50 rounded-full blur-md"></span>
                <span className="relative">View My Resume</span>
              </span>
              <FileText size={20} className="group-hover:rotate-6 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-white text-purple-600 rounded-full hover:scale-105 transition-all hover:shadow-lg border-2 border-purple-600 group"
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <span className="relative">
                <span className="absolute inset-0 bg-white opacity-50 rounded-full blur-md"></span>
                <span className="relative">Let's Collaborate</span>
              </span>
              <BriefcaseIcon size={18} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side (Profile Icon and Floating Icons) */}
        <motion.div
          className="w-full md:w-1/2 relative h-[250px] md:h-[500px] mt-12 md:mt-0"
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ProfileIcon />
          </div>
          <FloatingIcons />
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <ArrowDown size={24} className="text-purple-600" />
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl shadow-2xl max-w-3xl w-full relative transform origin-center"
              style={{
                border: "2px solid rgba(147, 112, 219, 0.7)", // Neon Purple Border
                boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.8)", // Glowing Effect
              }}
            >
              <button
                onClick={() => setResumeModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
              >
                ✖
              </button>
              <h2 className="text-xl font-semibold text-white mb-4">📄 My Resume</h2>
              <div className="overflow-hidden rounded-lg shadow-lg border border-gray-700">
                <iframe
                  src="https://drive.google.com/file/d/1MRWVJQ6cQAokyVyxqjWWVdq22u8GSUwP/preview"
                  className="w-full h-[500px] rounded-lg"
                  allow="autoplay"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
            <motion.div
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl shadow-2xl max-w-3xl w-full relative transform origin-center"
              style={{
                border: "2px solid rgba(147, 112, 219, 0.7)", // Neon Purple Border
                boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.8)", // Glowing Effect
              }}
            >
              <button
                onClick={() => setContactModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
              >
                ✖
              </button>
              <h2 className="text-xl font-semibold text-white mb-4">🤝 Let's Collaborate</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Your Message"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:scale-105 transition-all hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}