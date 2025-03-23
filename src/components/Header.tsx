import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Base Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

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

      {/* Interactive Overlay Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,191,255,0.4), rgba(0,255,127,0.4))",
        }}
      />

      {/* Navigation Content */}
      <motion.nav 
        className="relative max-w-6xl mx-auto px-4 py-4"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center">
          <Logo />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white"
                whileHover={{ scale: 1.1, color: "#00BFFF" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex gap-4">
            {[
              { href: "https://github.com/Saikira99", icon: <Github size={20} /> },
              { href: "https://www.linkedin.com/in/saikiran-chandana-84391820b/", icon: <Linkedin size={20} /> },
              { href: "mailto:saikiranchan999@gmail.com", icon: <Mail size={20} /> }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-white"
                whileHover={{ scale: 1.1, color: "#00BFFF" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full border-t border-gray-700 py-4 px-4 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: "rgba(20, 20, 20, 0.9)" }}
          >
            <div className="flex flex-col gap-4">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white"
                  whileHover={{ scale: 1.1, color: "#00BFFF" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                {[
                  { href: "https://github.com/Saikira99", icon: <Github size={20} /> },
                  { href: "https://www.linkedin.com/in/saikiran-chandana-84391820b/", icon: <Linkedin size={20} /> },
                  { href: "mailto:saikiranchan999@gmail.com", icon: <Mail size={20} /> }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-white"
                    whileHover={{ scale: 1.1, color: "#00BFFF" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
