import { ArrowDown, Download, BriefcaseIcon } from "lucide-react";
import { ProfileIcon } from "./ProfileIcon";
import { FloatingIcons } from "./FloatingIcons";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Darker Base Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

        {/* Particle Background */}
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

        {/* Dark Interactive Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 space-y-4 text-left"
        >
          <h2
            className="text-sm md:text-base font-medium text-purple-600 tracking-widest"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Hi, I'm
          </h2>
          <h1
            className="text-2xl md:text-4xl font-bold tracking-tight leading-snug"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
            }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              <TypingText texts={['SAIKIRAN', 'A Full Stack Developer']} />
            </span>
          </h1>
          <p
            className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed"
            style={{ 
              fontFamily: "'Open Sans', sans-serif",
              letterSpacing: "0.5px"
            }}
          >
            A passionate Full Stack Developer specializing in Angular, React, and Node.js.
            Creating innovative web solutions with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://drive.google.com/file/d/1MRWVJQ6cQAokyVyxqjWWVdq22u8GSUwP/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:scale-105 transition-all hover:shadow-lg group"
              whileHover={{ scale: 1.1 }}
            >
              View Resume
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:saikiranchan999@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-white text-purple-600 rounded-full hover:scale-105 transition-all hover:shadow-lg border-2 border-purple-600 group"
              whileHover={{ scale: 1.1 }}
            >
              Hire Me
              <BriefcaseIcon size={18} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side with Rotating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative h-[250px] md:h-[500px] mt-12 md:mt-0"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ProfileIcon />
          </div>
          <FloatingIcons />
        </motion.div>
      </div>

      {/* Animated Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={24} className="text-purple-600" />
      </motion.div>
    </section>
  );
}
