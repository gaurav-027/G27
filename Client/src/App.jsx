import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "./section/NotFound";
import Portfolio from "./layout/Portfolio";
import Project from "./layout/Project";
import Contact from "./layout/Contact";
import Loading from "./layout/Loading";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const contentRef = useRef(null);

  const handleLoaderComplete = () => {
    setShowLoader(false);

    gsap.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  };

  return (
    <>
      {showLoader && <Loading onComplete={handleLoaderComplete} />}

      <div ref={contentRef}>
        <Router basename="/g27">
          <Routes>
            <Route path="/" element={<Portfolio />} />

            <Route
              path="/projects/:projectName"
              element={<Project />}
            />

            <Route
              path="/contactMe"
              element={<Contact />}
            />

            <Route path="/l" element={<Loading />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}