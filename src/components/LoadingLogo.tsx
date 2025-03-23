import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function LoadingLogo() {
  const logoControls = useAnimation();

  useEffect(() => {
    // Continuously rotate the central logo with a 3D effect
    logoControls.start({
      rotateY: 360,
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    });
  }, [logoControls]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center overflow-hidden z-50">
      {/* Multi-layered particle & grid background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
        />
        <motion.svg
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>
      </div>

      {/* Main content with subtle 3D perspective */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.8, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ perspective: 800 }}
      >
        <motion.div
          className="flex flex-col items-center gap-6"
          onHoverStart={() =>
            logoControls.start({ rotateY: 360, transition: { duration: 4, ease: "linear", repeat: Infinity } })
          }
          onHoverEnd={() =>
            logoControls.start({ rotateY: 0, transition: { duration: 0.6 } })
          }
        >
          {/* Central logo with creative geometric design */}
          <motion.div
            className="relative w-32 h-32 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            animate={logoControls}
            transition={{ type: "spring", stiffness: 350 }}
          >
            {/* Outer rotating hexagon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <polygon
                  points="50,5 90,25 90,75 50,95 10,75 10,25"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="4"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#00BFFF", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Inner pulsating hexagon */}
            <motion.div
              className="absolute inset-2 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <polygon
                  points="50,10 85,30 85,70 50,90 15,70 15,30"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="4"
                />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#8A2BE2", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#00BFFF", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
              
            </motion.div>

            {/* Central logo with multiple layers and effects */}
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-2xl flex items-center justify-center relative"
              style={{ perspective: 800 }}
            >
              {/* Central logo text with neon glow effect */}
              <motion.span
                className="relative text-white text-4xl font-serif font-extrabold tracking-wide"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.6)",
                }}
              >
                SK
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Animated Title: "SAI KIRAN" with staggered appearance */}
          <motion.div
            className="flex justify-center space-x-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.5 },
              },
            }}
          >
            {["S", "A", "I", " ", "K", "I", "R", "A", "N"].map(
              (char, index) => (
                <motion.span
                  key={index}
                  className="text-2xl font-mono bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  whileHover={{ scale: 1.2, rotate: [0, 8, -8, 0] }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    textShadow: "0 0 8px rgba(255,255,255,0.6)",
                  }}
                >
                  {char}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Description / Tagline for Portfolio */}
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Welcome to my portfolio website. I'm Saikiran – a creative web
            developer & designer crafting immersive digital experiences.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Gun Shooting Effects with realistic bullet design */}
      <div className="absolute inset-0 flex justify-between items-center px-16">
        {/* Left Architectural Gun */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ x: "-150%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-20 h-12 bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center relative">
            <div className="w-16 h-3 bg-gray-600 rounded-md" />
          </div>
          {/* Refined muzzle flash */}
          <motion.div
            className="absolute top-0 right-0 w-6 h-6 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.5, 0], opacity: [1, 0, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, #fff, #fcd34d)" }}
          />
          {/* Realistic bullet */}
          <motion.div
            className="w-4 h-2 rounded-lg shadow-lg mt-3 bg-gradient-to-r from-gray-200 to-gray-400"
            animate={{ x: ["0%", "110%"], opacity: [1, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            {/* Bullet trail effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 0, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0))",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right Architectural Gun */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ x: "150%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-20 h-12 bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center relative">
            <div className="w-16 h-3 bg-gray-600 rounded-md" />
          </div>
          {/* Refined muzzle flash */}
          <motion.div
            className="absolute top-0 left-0 w-6 h-6 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.5, 0], opacity: [1, 0, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, #fff, #fcd34d)" }}
          />
          {/* Realistic bullet */}
          <motion.div
            className="w-4 h-2 rounded-lg shadow-lg mt-3 bg-gradient-to-r from-gray-200 to-gray-400"
            animate={{ x: ["0%", "-110%"], opacity: [1, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            {/* Bullet trail effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 0, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0))",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}