import React from "react";
import Character from "./Character";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

useGSAP(() => {
  const main = document.querySelector(".character-bg");
  if (!main) return;

  const handleMove = (e) => {
    const xMove = (e.clientX / window.innerWidth - 0.5) * 20;
    const yMove = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(main, {
      x: xMove,
      y: yMove,
      overwrite: "auto",
    });
  };

  main.addEventListener("mousemove", handleMove);

  return () => {
    main.removeEventListener("mousemove", handleMove);
  };
}, []);

useGSAP(()=>{
    const hero = document.querySelector(".hero");

    hero.addEventListener("mousemove",(e)=>{
      gsap.to(".cursor",{
        x:e.clientX,
        y:e.clientY
      })
    })
})

  return (
    <>
      <style>{`
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes marqueeReverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
`}</style>
        <div className="hero relative h-[100svh] min-h-[520px] overflow-hidden cursor-none">
          <section className="character-bg absolute inset-0 z-70 w-full h-[100svh] min-h-[520px] scale-100 sm:scale-105 lg:scale-110">
            <Character/>
          </section>
          <section
          className="home bg-black w-full h-[100svh] min-h-[520px] overflow-hidden relative"
          id="home"
        >
          <nav className="relative z-[60] p-3 md:p-4 flex justify-between items-center">
            <h1 className="h1 text-[clamp(2.25rem,8vw,3.75rem)] text-taupe-50">
              G27
            </h1>
          </nav>

          <div className="w-full flex flex-col justify-center gap-[clamp(3.25rem,10vh,7.5rem)] h-[calc(100svh-80px)] min-h-[440px] overflow-hidden">
            <div className="group w-[260vw] sm:w-[190vw] md:w-[160vw] lg:w-[140vw] bg-[#7b8e0e] relative right-[32vw] sm:right-24 md:right-25 h-[clamp(4.75rem,12vh,8rem)] sm:h-[clamp(5.5rem,14vh,8.75rem)] md:h-1/8 -rotate-20 overflow-hidden flex items-center">
              <div
                className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
                style={{ animation: "marquee 60s linear infinite" }}
              >
                <span className="text-black text-[clamp(1.75rem,7vw,3rem)] md:text-5xl px-8">
                  React.js ✦ Next.js ✦ JavaScript ✦ Node.js ✦ Express.js ✦ MongoDB ✦ MySQL ✦ Tailwind CSS ✦ GSAP  ✦ Git ✦ GitHub ✦ REST APIs ✦ Docker ✦ AWS ✦
                </span>
              </div>
            </div>

            <div className="group w-[260vw] sm:w-[190vw] md:w-[160vw] lg:w-[140vw] h-[clamp(4.75rem,12vh,8rem)] sm:h-[clamp(5.5rem,14vh,8.75rem)] md:h-1/8 bg-[#7b8e0e] rotate-20 relative right-[32vw] sm:right-24 md:right-25 -top-6 sm:-top-8 md:-top-10 overflow-hidden flex items-center">
              <div
                className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
                style={{ animation: "marqueeReverse 70s linear infinite" }}
              >
                <span className="text-black text-[clamp(1.75rem,7vw,3rem)] md:text-5xl px-8">
                  Full Stack Development ✦ Responsive UI ✦ Modern Web Apps ✦ REST API Development ✦ Database Design ✦ Authentication ✦ Performance Optimization ✦ Clean Code ✦ Problem Solving ✦ UI/UX Focus ✦ AI-Powered Applications ✦ Open to Freelance ✦ Open to Full-Time
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="pointer-events-none absolute top-0 z-10 w-full h-[100svh] min-h-[520px] flex justify-center overflow-hidden px-2">
          <div className="relative top-[clamp(4.5rem,11vh,5rem)] leading-[0.9] text-center">
            <p className="text-[clamp(5rem,22vw,35vh)] font-bold text-transparent [-webkit-text-stroke:clamp(2px,0.45vw,6px)_white]">GAURAV</p>
            <p className="text-[clamp(5rem,22vw,35vh)] font-bold">KUMAAR</p>
          </div>
        </section>
        <div className="h-8 w-8 absolute top-0 rounded-full cursor z-60">
          <img className="w-full h-full object-contain rounded-full" src="https://img.magnific.com/premium-vector/mango-sticker-vector-die-cut-sticker_1044048-2172.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>
        </div>

    </>
  );
}
