import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light", !isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showLanding]);

  useEffect(() => {
    const timer = setTimeout(() => setShowLanding(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLanding && <Landing onEnter={() => setShowLanding(false)} />}
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}