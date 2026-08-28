import React from "react";
import CircularText from "../components/CircularText";

export default function Contact() {
  return (
    <>
      <div className="w-full h-screen bg-[#f2e2c2] overflow-hidden">
        <div className="w-full h-full flex p-2 gap-2">
          <div className="w-35/10 h-full bg-black rounded-2xl"></div>
          <div className="w-35/10 h-full rounded-2xl flex flex-col gap-2">
            <div className="w-full h-8/1 bg-black rounded-2xl"></div>
            <div className="w-full h-15/10 bg-black rounded-2xl"></div>
          </div>
          <div className="w-3/1 h-full flex flex-col gap-2">
            <div className="w-full h-15/10 flex gap-2">
              <div className="h-full w-6/10 bg-black rounded-2xl p-2 text-center">
                <p className="text-6xl font-bold">GET</p>
                <p className="text-5xl ">In Touch</p>
              </div>
              <div className="h-full w-4/10 bg-black rounded-2xl">
                <CircularText
                  text="+91 8 6 7 7 8 3 0 8 3 0 "
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>
            </div>
            <div className="w-full h-8/1 bg-black rounded-2xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
