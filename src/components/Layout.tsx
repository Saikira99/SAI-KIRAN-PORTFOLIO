import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground /> {/* ✅ Background applied globally */}
      <main className="relative z-10">{children}</main> {/* ✅ Content stays on top */}
    </div>
  );
};

export default Layout;
