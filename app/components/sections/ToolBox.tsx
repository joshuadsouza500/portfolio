"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Skills from "../ui/Skills";

function ToolBox() {
  const container: any = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
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
