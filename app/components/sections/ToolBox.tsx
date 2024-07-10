"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Skills from "../ui/Skills";

function ToolBox() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"], //animations starts when the end of the target touches end of the screen//
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  /** Here we use the scroll y value of the ref container(screen) and change the Xsize based on scroll */
  return (
    <motion.div
      ref={container}
      style={{ scaleX }}
      className="relative h-screen rounded-b-3xl bg-backgroundb"
    >
      <Skills />
    </motion.div>
  );
}

export default ToolBox;
