import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Parse() {

     useGSAP(function(){

    const tl = gsap.timeline()
    tl.from(".stair",{
        height:0,
        stagger:{
            amount:-0.25
        }
    })
    tl.to(".stair",{
        y:'100%',
        stagger:{
            amount:-0.25
        }
    })
    tl.to(".stairParent",{
        display:'none'
    })
  })

  return (
   <div className="stairParent w-full h-screen fixed top-0">
     <div className=" w-full h-full flex">
        <div className="stair w-1/6 bg-white h-full"></div>
        <div className="stair w-1/6 bg-white h-full"></div>
        <div className="stair w-1/6 bg-white h-full"></div>
        <div className="stair w-1/6 bg-white h-full"></div>
        <div className="stair w-1/6 bg-white h-full"></div>
        <div className="stair w-1/6 bg-white h-full"></div>
    </div>
   </div>
  )
}
