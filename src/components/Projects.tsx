import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform built with React and Node.js. This project includes robust product management, a secure payment gateway, and comprehensive admin dashboards.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description:
      "A beautiful and intuitive task management application with real-time collaboration features. It supports project planning, task scheduling, and integrates with calendar apps.",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations, interactive elements, and an immersive experience. It showcases my projects, skills, and contact information.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("details");

  interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
  }

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("details");
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const tabButtonClasses = (tab: string) =>
    `px-6 py-2 rounded-full font-medium transition-colors ${
      activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
    }`;

  return (
    <section id="projects" className="relative py-20 min-h-screen overflow-hidden">
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
              animate={{ y: ["0%", "100%"], opacity: [1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
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
              "linear-gradient(135deg, rgba(0,191,255,0.4), rgba(0,255,127,0.4))",
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
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description.substring(0, 70)}...</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-purple-600/80 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg w-full max-w-4xl p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
              >
                &times;
              </button>

              {/* Tab Navigation */}
              <div className="mb-6">
                <div className="flex justify-center space-x-4">
                  <button onClick={() => setActiveTab("details")} className={tabButtonClasses("details")}>
                    Details
                  </button>
                  <button onClick={() => setActiveTab("try")} className={tabButtonClasses("try")}>
                    Try It
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              {activeTab === "details" ? (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Image */}
                  <div className="lg:w-1/2">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  {/* Right: Details */}
                  <div className="lg:w-1/2 text-white space-y-4">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <p>{selectedProject.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-600/80 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Try It Out</h3>
                  <p>[Insert interactive demo or external link here]</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
