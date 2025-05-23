"use client";
import React, { useEffect, useRef, useState } from "react";

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
    /**
     */
  }
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative">
      <Hero scrollYProgress={scrollYProgress} />
      <Service />
      <WorksStickyScroll />
      <ToolBox />
      <CTA />
    </main>
  );
}

{
  /**FIXES
   * contact button 
   * toolbox spacing
   * 


*/
}

{
  /**
TO DO
1. Smooth scroll to section on navigation button click 
*/
}
