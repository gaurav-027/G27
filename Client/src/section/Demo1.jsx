import { useState } from "react";

import normal from "../assets/hero-normal.png";
import helmet from "../assets/hero-helmet.png";

export default function HeroImage() {

  const [hover, setHover] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-[500px] h-[650px]">

      {/* Image 1 */}

      <img
        src={normal}
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Image 2 */}

      <div
        className="absolute inset-0"
        style={{
          clipPath: hover
            ? `circle(90px at ${mouse.x}px ${mouse.y}px)`
            : `circle(0px at ${mouse.x}px ${mouse.y}px)`
        }}
      >
        <img
          src={helmet}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* SVG Hover Area */}

      <svg
        className="absolute inset-0 w-full h-full"

        viewBox="0 0 800 1000"
      >
        <path

          d="PATH_HERE"

          fill="transparent"

          className="cursor-pointer"

          onMouseEnter={() => setHover(true)}

          onMouseLeave={() => setHover(false)}

          onMouseMove={handleMove}
        />
      </svg>

    </div>
  );
}