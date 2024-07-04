"use client";
import React, { useEffect, useRef } from "react";
import Bounded from "./components/Bounded";

import Hero from "./components/sections/Hero";
import Works from "./components/sections/Works";
import Service from "./components/sections/Service";
import CTA from "./components/sections/CTA";
import { useScroll } from "framer-motion";

import StickyScroll from "./components/extra/StickyScroll";

export default function Home() {
  const container: any = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {}, []);
  return (
    <main ref={container} className="relative">
      <Hero scrollYProgress={scrollYProgress} />
      <Service />

      <StickyScroll />

      <Works />
      <CTA />
      {/** 
      
     
      */}
    </main>
  );
}
