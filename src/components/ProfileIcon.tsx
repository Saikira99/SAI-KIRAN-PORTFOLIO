import { motion } from 'framer-motion';
import TypingText from "./TypingText";

export function ProfileIcon() {
  return (
    <div className="relative flex flex-col items-center">
      
      {/* Animated Profile Container */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-purple-600 to-blue-500"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Pulsing Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner White Container */}
        <div className="relative w-full h-full rounded-full bg-white p-2 flex items-center justify-center">
          {/* Profile Photo */}
          <img
            src="/Profile_Icon.jpg"  // Ensure this path is relative to your public folder.
            alt="Profile Icon"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>

      {/* Title with Hover Effect */}
      <motion.div
        className="mt-4 bg-white px-4 py-1 rounded-full shadow-xl"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-semibold whitespace-nowrap">
              <TypingText texts={['ミ★ SAI KIRAN ★彡', '꧁•⊹٭SAI KIRAN٭⊹•꧂ ']} />
        </span>
      </motion.div>
    </div>
  );
}
