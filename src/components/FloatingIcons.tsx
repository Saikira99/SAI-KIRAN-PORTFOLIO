import React, { useState, useEffect } from "react";
import { Database, Globe, Layout, Server, Smartphone, Code, Brain } from "lucide-react";

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