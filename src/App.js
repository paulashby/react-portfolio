import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact";

import projects from "./data/projects.json";

function App() {
  return (
    <Router basename="/react-portfolio">
      <Header featured={projects[0].name}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectgallery/*" element={<ProjectGallery projects={projects} end/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;