import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Palette,
  Rocket,
  Folder,
  Award,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  Icon: React.ElementType;
  title: string;
  text: string;
  link?: string;
}

export function About() {
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
  // The first three include links.
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
      link: "/projects", // using projects page as placeholder
    },
    {
      Icon: Briefcase,
      title: "Experience",
      text: "5+ years of professional experience in full-stack development.",
      link: "#", // Experience screen not yet created
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
          <p className="text-lg text-gray-300 leading-relaxed whitespace-nowrap overflow-hidden animate-typewriter">
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
              className="relative p-4 bg-gray-800 rounded-xl shadow-xl transform transition-transform duration-500 ease-in-out cursor-pointer border border-gray-700 text-center"
              variants={cardVariants}
              whileTap={{ scale: 0.95, rotate: -3 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg inline-block text-white mb-3">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 text-sm">{text}</p>
              {/* Render an arrow link if a link property exists */}
              {link && (
                <a href={link} className="absolute right-3 bottom-3">
                  <ArrowRight className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
