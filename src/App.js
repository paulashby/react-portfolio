import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectgallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;