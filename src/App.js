import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";

function App() {
  const navLinks = [
    {
      title: "Project Gallery",
      path: "/pages/projectgallery"
    },
    {
      title: "Contact",
      path: "/pages/contact"
    }
  ];

  return (
    <Router>
      <Header navLinks={navLinks}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/projectgallery" element={<ProjectGallery />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;