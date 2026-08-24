import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import axios from 'axios';

export default function Skills() {

    const [quote , setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // ==========================
    // Import your images above, for example:
    // import reactLogo from "../assets/skills/frontend/react.png";
    // import nodeLogo from "../assets/skills/backend/node.png";
    // ==========================

    const frontendImages = [
      // reactLogo,
      // htmlLogo,
      // cssLogo,
      // jsLogo,
      // tailwindLogo,
    ];

    const backendImages = [
      // nodeLogo,
      // expressLogo,
      // jwtLogo,
      // socketLogo,
    ];

    const databaseImages = [
      // mongoLogo,
      // mysqlLogo,
      // firebaseLogo,
    ];

    const toolsImages = [
      // gitLogo,
      // githubLogo,
      // dockerLogo,
      // postmanLogo,
      // vscodeLogo,
    ];

    const skills = [
      {
        title: 'Frontend',
        images: frontendImages,
      },
      {
        title: 'Backend',
        images: backendImages,
      },
      {
        title: 'Database & Deployment',
        images: databaseImages,
      },
      {
        title: 'Tools & Technologies',
        images: toolsImages,
      },
    ];

useEffect(() => {
  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      setQuote(response.data.quote);
      setAuthor(response.data.author);
      
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  fetchQuote();
}, [])

    const sectionRef = useRef(null);

useGSAP(() => {
  gsap.fromTo(
    sectionRef.current,
    {
      backgroundColor: "#000000",
    },
    {
      backgroundColor: "#f2e2c2",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }
  );

  // GSAP hover marquee animation for skill rows
  const rows = gsap.utils.toArray('.skill-row');

  rows.forEach((row) => {
    const marquee = row.querySelector('.skill-marquee');
    const title = row.querySelector('.skill-title');

    const tl = gsap.timeline({ paused: true });

    tl.to(
      row,
      {
        backgroundColor: '#ffffff',
        duration: 0.25,
      },
      0
    )
    .to(
      title,
      {
        opacity: 0,
        duration: 0.2,
      },
      0
    )
    .to(
      marquee,
      {
        opacity: 1,
        duration: 0.2,
      },
      0
    )
    .fromTo(
      marquee,
      {
        x: 0,
      },
      {
        x: -600,
        duration: 8,
        ease: 'none',
        repeat: -1,
      },
      0
    );

    row.addEventListener('mouseenter', () => tl.play());
    row.addEventListener('mouseleave', () => {
      tl.pause(0);
      gsap.set(row, { backgroundColor: 'transparent' });
      gsap.set(title, { opacity: 1 });
      gsap.set(marquee, { opacity: 0, x: 0 });
    });
  });
});
  return (
    <>
        <section ref={sectionRef} className='w-full h-screen bg-[#f2e2c2] relative'>
            <div className='w-full flex flex-col gap-20'>
                <div className='px-10 py-10 flex justify-between w-full'>
                    <div className='w-1/2'>
                        <h1 className='text-black text-9xl font-bold'>SKILLS &#8599;</h1>
                    </div>
                    <div className='w-1/2 flex flex-col p-5'>
                        <p className='text-black text-3xl'>{quote}</p>
                        <p className='text-black text-end text-2xl'>- {author}</p>
                    </div>
                </div>
                <div className='text-black text-[9vh] border border-black'>
                  {skills.map(({ title, images }, idx) => (
                    <div
                      key={idx}
                      className="skill-row border border-black overflow-hidden relative h-28 flex items-center justify-end px-10 bg-transparent"
                    >
                      <h2 className="skill-title text-[9vh] relative z-10">{title}</h2>

                      <div className="skill-marquee absolute inset-0 flex items-center gap-6 px-8 opacity-0 pointer-events-none whitespace-nowrap">
                        {(images.length ? images.concat(images) : []).map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            className="w-28 h-16 object-cover rounded-lg"
                            alt="skill"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    </>
  )
}
