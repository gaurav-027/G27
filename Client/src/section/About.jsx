import Cubes from "../components/Cube";
import React, { useEffect } from "react";
import ImageTrail from "../components/ImageTrail";

export default function About() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex flex-col">
          <h1 className="text-[25vh] font-bold">ABOUT</h1>
          <div className="w-full h-1/2 flex">
            <div className="w-1/2 h-full flex  px-5 py-10">
              <Cubes
                gridSize={8}
                maxAngle={45}
                radius={3}
                
                rippleSpeed={1.5}
                autoAnimate
                rippleOnClick
              />
            </div>
            <div className="w-1/2 h-full">
              <h1 className="text-[15vh] font-bold">
                THIS <br /> GUY..!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
