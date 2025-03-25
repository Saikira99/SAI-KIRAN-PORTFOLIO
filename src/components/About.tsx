import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Palette,
  Rocket,
  Folder,
  Award,
  Briefcase,
  ExternalLink,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  Icon: React.ElementType;
  title: string;
  text: string;
  link?: string;
}

interface Certification {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface Experience {
  company: string;
  logo: string;
  position: string;
  start: string;
  end: string;
  description: string;
}

export function About() {
  const [flipped, setFlipped] = useState(false);
  const [modalContent, setModalContent] = useState<Certification[] | Experience[] | null>(null);
  const [modalType, setModalType] = useState<"certification" | "experience" | null>(null);

  // Initialize AOS for scroll-triggered animations.
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  // Feature Data Array.
  const features: Feature[] = [
    {
      Icon: Folder,
      title: "Total Projects",
      text: "Over 50 completed projects across diverse industries.",
      link: "/projects",
    },
    {
      Icon: Award,
      title: "Certifications",
      text: "Certified in multiple cutting-edge technologies and frameworks.",
      link: "#", // Placeholder link
    },
    {
      Icon: Briefcase,
      title: "Experience",
      text: "1.5+ years of professional experience in full-stack development.",
      link: "#", // Placeholder link
    },
    {
      Icon: Code,
      title: "Clean Code",
      text: "I write clean, maintainable, and scalable code for high-quality solutions.",
    },
    {
      Icon: Palette,
      title: "Creative Design",
      text: "I create intuitive, visually appealing interfaces that enhance user experience.",
    },
    {
      Icon: Rocket,
      title: "Performance",
      text: "I optimize applications for lightning-fast performance and seamless functionality.",
    },
  ];

  // Certification Data Array.
  const certifications: Certification[] = [
    {
      name: "Gen AI 101",
      description: "The Gen AI Level 101 Certificate offers a comprehensive introduction to the principles and applications of Generative AI. Participants will learn about the core concepts, techniques, and tools used to create AI models that can generate new content, such as text, images, music, and more.",
      image: "./public/GEN AI 101.png", // image file in public folder                                
      link: "/certifications/gen-ai-101.pdf",             // pdf file in public folder
    },
    {
      name: "Gen AI 202 ",
      description: "Description of Certification 2",
      image: "./public/GEN AI 101.png", // image file in public folder                                
      link: "/certifications/certification-2.pdf",
    },
    {
      name: "Certification 3",
      description: "Description of Certification 3",
      image: "./public/GEN AI 101.png", // image file in public folder                                
      link: "/certifications/certification-3.pdf",
    },
  ];

  // Experience Data Array.
  const experiences: Experience[] = [
    {
      company: "Company 1",
      logo: "https://via.placeholder.com/50",
      position: "Position 1",
      start: "Jan 2020",
      end: "Dec 2020",
      description: "Brief description of the experience at Company 1.",
    },
    {
      company: "Company 2",
      logo: "https://via.placeholder.com/50",
      position: "Position 2",
      start: "Jan 2021",
      end: "Present",
      description: "Brief description of the experience at Company 2.",
    },
  ];

  // Framer Motion variants for container and cards.
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleCardClick = (title: string) => {
    if (title === "Certifications") {
      setModalContent(certifications);
      setModalType("certification");
      setFlipped(true);
    } else if (title === "Experience") {
      setModalContent(experiences);
      setModalType("experience");
      setFlipped(true);
    }
  };

  const isCertification = (item: Certification | Experience): item is Certification => {
    return (item as Certification).name !== undefined;
  };

  return (
    <section id="about" className="relative py-20 min-h-screen overflow-hidden">
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
          className="text-5xl font-extrabold text-center mb-12"
          data-aos="fade-down"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-lg text-gray-300 leading-relaxed animate-typewriter">
            I'm a passionate Full Stack Developer with expertise in modern web technologies.
            I thrive on crafting beautiful, efficient, and user-friendly applications that solve
            real-world challenges and inspire innovation.
          </p>
        </motion.div>
        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(({ Icon, title, text, link }, index) => (
            <motion.div
              key={index}
              className="relative p-4 bg-gray-800 rounded-xl shadow-xl transform transition-transform duration-500 ease-in-out cursor-pointer border border-gray-700 text-center hover:border-blue-500 hover:shadow-blue-500/50"
              variants={cardVariants}
              whileTap={{ scale: 0.95, rotate: -3 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleCardClick(title)}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg inline-block text-white mb-3">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 text-sm">{text}</p>
              {/* Render an external link icon if a link property exists */}
              {link && (
                <motion.div
                  className="absolute right-3 bottom-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <ExternalLink className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {flipped && modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-5xl max-h-[80vh] overflow-y-auto transform transition-transform duration-500 ease-in-out"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: 1000 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {modalType === "certification" ? "Certifications" : "Experience"}
                </h2>
                <button
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setFlipped(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {modalType === "certification" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {modalContent.map((item, index) => (
                    isCertification(item) ? (
                      <div key={index} className="bg-gray-700 p-4 rounded-lg">
                        <img src={item.image} alt={item.name} className="mb-2 rounded-lg h-32 w-full object-cover" />
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline text-sm"
                        >
                          View Certificate
                        </a>
                      </div>
                    ) : null
                  ))}
                </div>
              )}
              {modalType === "experience" && (
                <div className="grid grid-cols-1 gap-4">
                  {modalContent.map((item, index) => (
                    !isCertification(item) ? (
                      <div key={index} className="bg-gray-700 p-4 rounded-lg flex items-center">
                        <img src={item.logo} alt={item.company} className="w-16 h-16 mr-4 rounded-full" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                          <p className="text-gray-300">{item.position}</p>
                          <p className="text-gray-400 text-sm">
                            {item.start} - {item.end}
                          </p>
                          <p className="text-gray-300 mt-2">{item.description}</p>
                        </div>
                      </div>
                    ) : null
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}