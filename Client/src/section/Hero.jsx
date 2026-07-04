import { MenuIcon } from "../components/ui/menu-icon";
import React from "react";
import Menu from "./Menu";
import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import Demo2 from "./Demo2";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  useGSAP(() => { 
    const main = window.document.querySelector(".character-bg")

    main?.addEventListener("mousemove",(e)=>{
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(main,{
        x: xMove,
        y: yMove
      })
    })
  })

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
      {showMenu ? (
        <Menu />
      ) : (
        <div className="relative">
          <section className="absolute inset-0 z-50 w-full h-screen character-bg">
            <Demo2/>
          </section>
          <section
          className="home bg-black w-full h-screen overflow-hidden relative"
          id="home"
        >
          <nav className="p-3 md:p-4 flex justify-between items-center">
            <h1 className="h1 text-4xl sm:text-5xl md:text-6xl text-taupe-50">
              G27
            </h1>
            <div onClick={toggleMenu} className="cursor-pointer relative z-50">
              <MenuIcon
                color="white"
                size={window.innerWidth < 640 ? 40 : 60}
              />
            </div>
          </nav>

          <div className="w-full flex flex-col justify-center gap-16 md:gap-24 lg:gap-30 h-[calc(100vh-80px)] overflow-hidden">
            <div className="group w-[220vw] sm:w-[180vw] md:w-[150vw] bg-[#d8ff04] relative right-20 sm:right-24 md:right-25 h-[12vh] sm:h-[14vh] md:h-1/6 -rotate-20 overflow-hidden flex items-center">
              <div
                className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
                style={{ animation: "marquee 20s linear infinite" }}
              >
                <span className="text-black font-bold text-3xl sm:text-4xl md:text-5xl px-8">
                  CREATIVE STUDIO • BRANDING • DESIGN • DEVELOPMENT •
                </span>
                <span className="text-black font-bold text-3xl sm:text-4xl md:text-5xl px-8">
                  CREATIVE STUDIO • BRANDING • DESIGN • DEVELOPMENT •
                </span>
              </div>
            </div>

            <div className="group w-[220vw] sm:w-[180vw] md:w-[150vw] h-[12vh] sm:h-[14vh] md:h-1/6 bg-[#d8ff04] rotate-20 relative right-20 sm:right-24 md:right-25 -top-6 sm:-top-8 md:-top-10 overflow-hidden flex items-center">
              <div
                className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
                style={{ animation: "marqueeReverse 20s linear infinite" }}
              >
                <span className="text-black font-bold text-3xl sm:text-4xl md:text-5xl px-8">
                  DIGITAL EXPERIENCES • INTERACTIVE • MOTION • INNOVATION •
                </span>
                <span className="text-black font-bold text-3xl sm:text-4xl md:text-5xl px-8">
                  DIGITAL EXPERIENCES • INTERACTIVE • MOTION • INNOVATION •
                </span>
              </div>
            </div>
          </div>
        </section>
        </div>
      )}
    </>
  );
}
