import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./layouts/pages/Home";
import About from "./layouts/pages/About";
import Skills from "./layouts/pages/Skills";
import Projects from "./layouts/pages/Projects";
import Contact from "./layouts/pages/Contact";

const App = () => {
  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden font-exo2">
      <Navbar />
      <main className="flex-grow bg-pageBg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
