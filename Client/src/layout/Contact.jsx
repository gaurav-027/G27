import React from "react";
import CircularText from "../components/CircularText";
import CurvedLoop from "../components/CurvedLoop";
import Model from "../components/Model";

export default function Contact() {
  return (
    <>
      <div className="w-full h-screen bg-[#f2e2c2]">
        <div className="w-full h-full flex p-2 gap-2">
          <div className="contactForm w-35/10 h-full bg-black rounded-2xl p-5">
            <div className="w-full border-b border-zinc-400 pb-2">
                <p className="text-7xl text-right"> ✦ Contact</p>
            </div>
          </div>
          <div className="w-35/10 h-full rounded-2xl flex flex-col gap-2">
            <div className="model w-full h-8/1 bg-zinc-700 rounded-2xl flex justify-center items-center p-10">
                    <Model />
            </div>
            <div className="w-full h-15/10 bg-black rounded-2xl overflow-hidden">
                <CurvedLoop marqueeText="Let's Build Together ✦" />
            </div>
          </div>
          <div className="w-3/1 h-full flex flex-col gap-2">
            <div className="w-full h-15/10 flex gap-2">
              <div className="h-full w-6/10 bg-black rounded-2xl p-2 text-center">
                <p className="text-6xl font-bold">GET</p>
                <p className="text-5xl ">In Touch</p>
              </div>
              <div className="h-full w-4/10 bg-black rounded-2xl">
                <CircularText
                  text="+91 8 6 7 7 8 3 0 3 8 0 "
                  onHover="pause"
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
