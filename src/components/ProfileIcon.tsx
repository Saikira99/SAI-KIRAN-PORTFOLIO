import { User } from 'lucide-react';

export function ProfileIcon() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-2xl animate-pulse-slow"></div>
      
      {/* Profile container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1 hover:scale-105 transition-all duration-300">
        <div className="w-full h-full rounded-full bg-white p-2">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
            <User className="w-14 h-14 md:w-16 md:h-16 text-white" />
          </div>
        </div>
        
        {/* Title */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <div className="bg-white px-4 py-1 rounded-full shadow-lg">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-semibold whitespace-nowrap">
              Full Stack Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}