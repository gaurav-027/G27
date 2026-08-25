import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useState} from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BuildSection() {

    const [isButton, setIsButton] = useState(false);

    useGSAP(()=>{
        gsap.to(".btn",{
            y:400,
            rotate:90,
            scrollTrigger:{
                trigger:".section",
                start: "top 20%",
                end:"bottom 70%",
                scrub:true,
                onUpdate:(e)=>{
                    setIsButton(e.progress === 1 ? true : false)
                }
            }
        })
    })
  return (
    <section>
        <div className="section h-[110vh] bg-black py-10 px-20">
            <p className="upper text-9xl">Let's</p>
            <div className="text-[25vw] leading-[1] flex gap-10 font-bold">
                <div>B</div>
                <div>U</div>
                <div className={`btn w-15 h-65 bg-white relative top-13 transition-all duration-200 ease-in-out ${isButton ? "rounded-2xl cursor-pointer"  : ""}`}>
                    {isButton ? <button><span>Contact Me</span></button> : ""}
                </div>
                <div>L</div>
                <div>D</div>
            </div>
            <div className="w-full flex justify-end"><p className="text-9xl text-left">Something</p></div>
        </div>
    </section>
  )
}
