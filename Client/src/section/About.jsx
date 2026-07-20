import Cubes from "../components/Cube";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

export default function About() {

  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const contentRef = useRef(null);

  const imageArray = ["https://picsum.photos/400/400?random=1",
    "https://picsum.photos/400/400?random=2",
    "https://picsum.photos/400/400?random=3",
    "https://picsum.photos/400/400?random=4",
    "https://picsum.photos/400/400?random=5",
    "https://picsum.photos/400/400?random=6",
    "https://picsum.photos/400/400?random=7",
    "https://picsum.photos/400/400?random=8",
    "https://picsum.photos/400/400?random=9",
    "https://picsum.photos/400/400?random=10",
    "https://picsum.photos/400/400?random=11",
    "https://picsum.photos/400/400?random=12",
    "https://picsum.photos/400/400?random=13",
    "https://picsum.photos/400/400?random=14",
    "https://picsum.photos/400/400?random=15",
    "https://picsum.photos/400/400?random=16",
    "https://picsum.photos/400/400?random=17",
    "https://picsum.photos/400/400?random=18",
    "https://picsum.photos/400/400?random=19",
    "https://picsum.photos/400/400?random=20",
  ]

  useGSAP(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 0%",
        end: "bottom 0%",
        pin: true,
        scrub: true,
        onUpdate: (e) => {
          console.log(Math.floor(e.progress * 20))

          const imageIndex = Math.floor(e.progress * 19)
          firstImageRef.current.src = imageArray[imageIndex];
          secondImageRef.current.src = imageArray[imageIndex + 1]
          thirdImageRef.current.src = imageArray[imageIndex + 2]
        }
      }
    });

    // Animate paragraphs with SplitType and GSAP
    if (!contentRef.current) return;
    const paragraphs = contentRef.current.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
      const split = new SplitType(paragraph, {
        types: "chars",
      });

      gsap.set(paragraph, {
        opacity: 0,
        y: 60,
      });

      gsap.to(paragraph, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 90%",
          end: "top 65%",
          scrub: true,
        },
      });

      gsap.set(split.chars, {
        color: "#555555",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: paragraph,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      tl.to(split.chars, {
        color: "#ffffff",
        stagger: {
          each: 0.08,
          from: "start",
        },
        ease: "none",
      });
    });
    return () => {
      paragraphs.forEach((paragraph) => {
        SplitType.revert(paragraph);
      });
    };
  })

  return (
    <div id="about" className="bg-[#0c0c0f]">
      <div className="w-full flex">
        <div ref={sectionRef} className="w-1/2 h-full">
          <div className="border w-80 h-80 relative left-15 top-5 bg-amber-300 rounded-2xl transition-all">
            <img ref={firstImageRef} className="w-full h-full object-contain rounded-2xl" src="https://picsum.photos/400/400" alt="" />
          </div>
          <div className="border w-80 h-80 relative left-80 bottom-23 bg-amber-900 rounded-2xl transition-all">
            <img ref={secondImageRef} className="w-full h-full object-contain rounded-2xl" src="https://picsum.photos/400/400" alt="" />
          </div>
          <div className="border w-80 h-80 relative left-15 bottom-53 bg-black rounded-2xl transition-all">
            <img ref={thirdImageRef} className="w-full h-full object-contain rounded-2xl" src="https://picsum.photos/400/400" alt="" />
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <h1 className="text-[25vh] font-bold">ABOUT</h1>
          <div className="w-full h-1/2 flex">
            <div className="w-1/2 h-full flex justify-center relative">
              <Cubes
                gridSize={6}
                maxAngle={45}
                radius={2}
                rippleSpeed={1}
                autoAnimate
                rippleOnClick
              />
            </div>
            <div className="w-1/2 h-full">
              <h1 className="text-[15vh] font-bold leading-[0.8]">
                THIS <br /> GUY..!
              </h1>
            </div>
          </div>
          <div ref={contentRef} className="content mt-15 flex flex-col gap-10 px-5 mb-10">
            <p className=" text-4xl align-middle">Hi, I’m Gaurav, a passionate Full Stack MERN Developer with a strong interest in building modern, scalable, and user-friendly web applications.</p>
            <p className="text-4xl"> I’m continuously improving my skills, working on real-world projects, and looking for opportunities where I can contribute, learn, and grow as a Software Developer.</p>
            <p className="text-4xl">I enjoy solving problems through code, exploring new technologies, and creating applications that deliver a seamless user experience. Every project is an opportunity to learn something new and become a better developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
