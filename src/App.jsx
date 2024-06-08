import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import Footer from "./layout/Footer";
import Quots from "./pages/Quots";
import TopHeader from "./layout/TopHeader";
import PreLoader from "./components/PreLoader";
import Interaction from "./components/Interaction";

export function App() {
  return (
    <>
      <Interaction />
      {!Interaction ? <PreLoader /> : !Interaction}
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route path="/quots" element={<Quots />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
