import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Word() {
  const wordItems = ["CREATE", "DESIGN", "BUILD", "DEPLOY"];

    gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.to(".slideRight", {
      x: "-40%",
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".slide",
        start: "top 40%",
        scrub: true,
      },
    });

    gsap.to(".slideLeft", {
      x: "40%",
      duration: 2,
      ease: "none",

      scrollTrigger: {
        trigger: ".slide",
        start: "top 40%",
        scrub: true,
      },
    });
  })
  return (
    <>
      <div className="slide w-full h-screen bg-black flex items-center overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="slideRight w-full h-1/5 flex item-center gap-12">
            <span className="text-8xl text-white font-extrabold">
              CREATE
            </span>
            <span className="span text-8xl text-white font-extrabold">
              CREATE
            </span>
            <span className="text-8xl text-white font-extrabold">
              CREATE
            </span>
            <span className="span text-8xl text-white font-extrabold">
              CREATE
            </span>
          </div>
          <div className="slideLeft w-full h-1/5 flex item-center gap-12">
            <span className="text-8xl text-white font-extrabold">
              DESIGN
            </span>
            <span className="span text-8xl text-white font-extrabold">
              DESIGN
            </span>
            <span className="text-8xl text-white font-extrabold">
              DESIGN
            </span>
            <span className="span text-8xl text-white font-extrabold">
              DESIGN
            </span>
          </div>
          <div className="slideRight w-full h-1/5 flex item-center gap-12">
            <span className="text-8xl text-white font-extrabold">
              BUILD
            </span>
            <span className="span text-8xl text-white font-extrabold">
              BUILD
            </span>
            <span className="text-8xl text-white font-extrabold">
              BUILD
            </span>
            <span className="span text-8xl text-white font-extrabold">
              BUILD
            </span>
            <span className="text-8xl text-white font-extrabold">
              BUILD
            </span>
          </div>
          <div className="slideLeft w-full h-1/5 flex item-center gap-12">
            <span className="text-8xl text-white font-extrabold">
              DEPLOY
            </span>
            <span className="span text-8xl text-white font-extrabold">
              DEPLOY
            </span>
            <span className="text-8xl text-white font-extrabold">
              DEPLOY
            </span>
            <span className="span text-8xl text-white font-extrabold">
              DEPLOY
            </span>
          </div>
          
          {/* {wordItems.map((item, index) => {
            return (
              <div
                key={index}
                className="slider w-full h-1/5 flex items-center gap-12"
              >
                <span className="text-9xl text-white font-extrabold">
                  {item}
                </span>
                <span className="span text-9xl text-white font-extrabold">
                  {item}
                </span>
                <span className="text-9xl text-white font-extrabold">
                  {item}
                </span>
                <span className="span text-9xl text-white font-extrabold">
                  {item}
                </span>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
}
