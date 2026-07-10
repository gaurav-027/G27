import React from "react";
import gsap from "gsap";

export default function String() {

    const mouseMove = (e) =>{
      const path = `M 10 100 Q 650 ${e.clientY} 1400 100`

      gsap.to("svg path",{
        attr:{d:path},
        duration:0.4,
    })
    }

    const mouseLeave = (e) =>{
      const path = `M 10 100 Q 650 100 1400 100`
      gsap.to("svg path",{
        attr:{d:path},
        duration:0.8,
        ease:"elastic.out"
    })
    }

  return (
    <div onMouseMove={mouseMove} onMouseLeave={mouseLeave} className="curveBox w-full p-5">
      <svg width="100%" height="150">
        <path
          d="M 10 100 Q 650 100 1400 100"
          stroke="white"
          fill="transparent"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
