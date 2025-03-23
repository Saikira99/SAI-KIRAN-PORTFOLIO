import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import {LoadingLogo} from './components/LoadingLogo';
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Layout from "./components/Layout"; // ✅ Import Layout

export function App() {
  const [loading, setLoading] = useState(true);
  useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingLogo />;
  }

  return (
    <Layout> {/* ✅ Wrapping everything inside Layout */}
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-600 bg-gray-50">
        <p>© {new Date().getFullYear()} Saikiran. All rights reserved.</p>
      </footer>
    </Layout>
  );
}
