import Cubes from "../components/Cube";
import React, { useEffect } from "react";
import ImageTrail from "../components/ImageTrail"

export default function About() {
  return (
    <>
      <div className="h-[200vh] relative top-0 about" id="about">
        <div className="flex relative top-0">
          <div className="cube w-8/10 sticky bottom-0 flex items-end px-10 py-10">
            <Cubes
              gridSize={8}
              maxAngle={45}
              radius={3}
              rippleSpeed={1.5}
              autoAnimate
              rippleOnClick
            />
          </div>
          <div className="text-end">
            <h1 className="font-bold text-[15vw] uppercase leading-[15vw]">
              About <br/> This <br/> Guy..!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
