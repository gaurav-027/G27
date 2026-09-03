import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import htmlLogo from "../assets/skills/frontend/html.png"
import reactLogo from "../assets/skills/frontend/react.png"
import jsLogo from "../assets/skills/frontend/js.png"
import cssLogo from "../assets/skills/frontend/css.png"
import tailwindLogo from "../assets/skills/frontend/tailwind.png"
import gsapLogo from "../assets/skills/frontend/gsap.png"

import nodeLogo from "../assets/skills/backend/node.png"
import expressLogo from "../assets/skills/backend/express.png"
import jwtLogo from "../assets/skills/backend/jwt.png"
import socketLogo from "../assets/skills/backend/socket.png"

import mongoLogo from "../assets/skills/database/mongodb.png"
import mysqlLogo from "../assets/skills/database/mysql.png"
import actionLogo from "../assets/skills/database/actions.png"
import dockerLogo from "../assets/skills/database/docker.png"
import hostingerLogo from "../assets/skills/database/hostinger.png"
import renderLogo from "../assets/skills/database/render.png"

import githubLogo from "../assets/skills/tools/github.png"
import vscodeLogo from "../assets/skills/tools/vs.png"
import thunderLogo from "../assets/skills/tools/thunderClient.png"

export default function Skills() {
  const [quote, setQuote] = useState("Talk is cheap. Show me the code.");
  const [author, setAuthor] = useState("Linus Torvalds");

  const frontendImages = [
    reactLogo,
    htmlLogo,
    cssLogo,
    jsLogo,
    tailwindLogo,
    gsapLogo
  ];

  const backendImages = [
    nodeLogo,
    expressLogo,
    jwtLogo,
    socketLogo,
  ];

  const databaseImages = [
    mongoLogo,
    mysqlLogo,
    actionLogo,
    dockerLogo,
    hostingerLogo,
    renderLogo
  ];

  const toolsImages = [
    githubLogo,
    thunderLogo,
    vscodeLogo,
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
    let isMounted = true;
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/quotes/random");
        if (isMounted && response.data?.quote) {
          setQuote(response.data.quote);
          setAuthor(response.data.author);
        }
      } catch {
        // Fallback quote already preserved in state
      }
    };

    fetchQuote();
    return () => {
      isMounted = false;
    };
  }, []);

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

    // GSAP hover & touch marquee animation for skill rows
    const rows = gsap.utils.toArray('.skill-row');

    rows.forEach((row) => {
      const marquee = row.querySelector('.skill-marquee');
      const title = row.querySelector('.skill-title');

      const tl = gsap.timeline({ paused: true });

      tl.to(
        row,
        {
          backgroundColor: '#00000010',
        },
        0
      )
      .to(
        title,
        {
          opacity: 0
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

      const playAnim = () => tl.play();
      const resetAnim = () => {
        tl.pause(0);
        gsap.set(row, { backgroundColor: 'transparent' });
        gsap.set(title, { opacity: 1 });
        gsap.set(marquee, { opacity: 0, x: 0 });
      };

      row.addEventListener('mouseenter', playAnim);
      row.addEventListener('mouseleave', resetAnim);
      row.addEventListener('touchstart', () => {
        if (tl.isActive()) {
          resetAnim();
        } else {
          playAnim();
        }
      }, { passive: true });
    });
  });

  return (
    <>
      <section ref={sectionRef} className="w-full min-h-screen bg-[#f2e2c2] relative py-12 lg:py-16 transition-colors">
        <div className="w-full flex flex-col gap-8 sm:gap-12 lg:gap-16">
          <div className="px-4 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
            <div className="w-full md:w-1/2">
              <h1 className="text-black text-[clamp(3.5rem,10vw,8rem)] font-bold tracking-tight leading-none">
                SKILLS &#8599;
              </h1>
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-2 sm:p-5">
              <p className="text-black text-lg sm:text-2xl md:text-3xl font-medium italic">
                "{quote}"
              </p>
              <p className="text-black text-end text-base sm:text-xl md:text-2xl mt-2 font-semibold">
                - {author}
              </p>
            </div>
          </div>
          <div className="text-black border-y border-black">
            {skills.map(({ title, images }, idx) => (
              <div
                key={idx}
                className="skill-row border-b last:border-b-0 border-black overflow-hidden relative h-20 sm:h-24 md:h-28 flex items-center justify-end px-4 sm:px-8 md:px-10 bg-transparent cursor-pointer select-none"
              >
                <h2 className="skill-title text-[clamp(1.75rem,5vw,4.5rem)] font-bold tracking-tight relative z-10 transition-opacity">
                  {title}
                </h2>

                <div className="skill-marquee absolute inset-0 flex items-center gap-4 sm:gap-6 px-4 sm:px-8 opacity-0 pointer-events-none whitespace-nowrap">
                  {(images.length ? images.concat(images) : []).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="w-16 h-10 sm:w-24 sm:h-14 md:w-28 md:h-16 object-contain rounded-lg"
                      alt="Skill Icon"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
