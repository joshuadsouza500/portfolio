"use client";
import React, { useEffect, useRef, useState } from "react";

import Lenis from "lenis";
import Hero from "./components/sections/Hero";
import ToolBox from "./components/sections/ToolBox";
import Service from "./components/sections/Service";
import CTA from "./components/sections/CTA";
import { spring, useScroll } from "framer-motion";
import WorksStickyScroll from "./components/sections/WorksStickyScroll";
import useMouse from "@react-hook/mouse-position";
import { MotionDiv } from "./components/ui/Motion";
import { motion } from "framer-motion";
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
  
    <Service />
      <WorksStickyScroll />
     
    
  */
  }

  return (
    <main ref={container} className="relative">
      <Hero scrollYProgress={scrollYProgress} />
      <ToolBox />

      <CTA />
    </main>
  );
}

{
  /**

2.Fix small para under headings,
3. fix links.


  */
}
