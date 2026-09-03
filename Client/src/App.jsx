import { useState, useRef, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import gsap from "gsap";

import Portfolio from "./layout/Portfolio";
import Loading from "./layout/Loading";

const Project = lazy(() => import("./layout/Project"));
const Contact = lazy(() => import("./layout/Contact"));
const NotFound = lazy(() => import("./section/NotFound"));

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const contentRef = useRef(null);

  const handleLoaderComplete = () => {
    setShowLoader(false);

    if (contentRef.current) {
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
    }
  };

  return (
    <>
      {showLoader && <Loading onComplete={handleLoaderComplete} />}

      <div ref={contentRef}>
        <Router basename="/">
          <Suspense fallback={<div className="w-full h-screen bg-[#0c0c0f]" />}>
            <Routes>
              <Route path="/" element={<Portfolio />} />

              <Route
                path="/:projectName"
                element={<Project />}
              />

              <Route
                path="/contactMe"
                element={<Contact />}
              />

              <Route path="/l" element={<Loading />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}