"use client";
import React, { useEffect, useRef } from "react";

import Lenis from "lenis";
import Hero from "./components/sections/Hero";
import ToolBox from "./components/sections/ToolBox";
import Service from "./components/sections/Service";
import CTA from "./components/sections/CTA";
import { useScroll } from "framer-motion";
import WorksStickyScroll from "./components/sections/WorksStickyScroll";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  {
    /**  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []); 
  
  
   <Hero scrollYProgress={scrollYProgress} />
      <Service />
  
  */
  }

  return (
    <main ref={container} className="relative">
      <WorksStickyScroll />
      <ToolBox />
      <CTA />
    </main>
  );
}

{
  /**
1.HUY ADD a vire button when hovering over image and video forbig screens and for small screens on click of image go to website
2. Naviagte on project title click  

  */
}
