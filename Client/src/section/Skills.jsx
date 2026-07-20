import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import axios from 'axios';

export default function Skills() {

    const [quote , setQuote] = useState("");
    const [author, setAuthor] = useState("");

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
                <div className='text-black text-[9vh]'>
                    <div className='border border-black border-b-0 flex justify-end px-10'>Frontend</div>
                    <div className='border border-black border-b-0 flex justify-end px-10'>Backend</div>
                    <div className='border border-black flex justify-end px-10'>Database & Deployment</div>
                    <div className='border border-black border-t-0 flex justify-end px-10'>Tools & Technologies</div>
                </div>
            </div>
        </section>
    </>
  )
}
