import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import Footer from "./layout/Footer";
import Quots from "./pages/Quots";
import TopHeader from "./layout/TopHeader";
import AboutMe from "./pages/AboutMe";
import FormSubmit from "./sections/FormSubmit";


export function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route path="/quots" element={<Quots />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <MdKeyboardDoubleArrowDown style={{
          fontSize: '6em',
          color: 'white',
          margin: '50px 0 0 50%',
          transform: 'translateX(-50%)',
          color: 'var(--light-pink-theme)'
        }} />
        <section id="quots" className="submitFormContainer" style={{
          maxWidth: '95%',
          width: '95%',
          margin: '40px auto'
        }}>
          
          <div className="submitForm">
            <div>
              <h3>Innovative ideas to <span>skyrocket your online business</span>: Discover the top strategies to attract more customers and boost sales.</h3>
            </div>
            <FormSubmit />
          </div>
        </section>
        <Footer />
      </Router>
    </>
  );
}
