"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Skills from "../ui/Skills";
import Bounded from "../Bounded";

function ToolBox() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"], //animations starts when the end of the target touches end of the screen//
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  /** Here we use the scroll y value of the ref container(screen) and change the Xsize based on scroll     <Skills /> */
  return (
    <motion.div
      ref={container}
      style={{ scaleX }}
      className="relative rounded-b-3xl bg-backgroundb"
    >
      <div className="absolute inset-0 mb-6 rounded-b-3xl bg-black bg-[url('/noise-light.png')] opacity-15" />
      <Bounded className="px-4 py-8 md:py-8">
        <div className="grid gap-2 bg-red-200 lg:gap-8">
          <h2
            style={{ lineHeight: "1.08" }}
            className="text-5xl font-bold tracking-tight text-backgroundw/80 md:text-6xl lg:text-7xl 2xl:text-8xl"
          >
            What I Use <br className="xl:hidden" />
          </h2>
          <p className="col-span-2 mt-2 w-[75%] place-self-end text-xs font-medium text-[#f7f7f7]/70 sm:w-[60%] sm:text-sm md:mt-10 md:pb-6 lg:ml-2 lg:w-[70%] lg:text-lg xl:w-[60%] xl:text-xl 2xl:w-[50%]">
            Here are some of the tools and technologies i use to create
            responsive user friendly designs and more.
          </p>
        </div>

        <section className="flex w-full justify-around text-white lg:pt-10">
          <div>
            <h3 className="text-2xl font-semibold text-white/70">Frontend</h3>
            <h3 className="text-2xl font-semibold text-white/70">Backend</h3>
            <h3 className="text-2xl font-semibold text-white/70">Design</h3>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>5y54</li> <li>5y4</li> <li>fff</li> <li>React</li>{" "}
            </ul>
            <ul className="flex gap-2">
              <li>ast</li> <li>amart</li> <li>yup</li> <li>Reaplleact</li>{" "}
            </ul>
            <ul className="flex gap-2">
              <li>5y54</li> <li>rtt</li> <li>fff</li> <li>as</li>{" "}
            </ul>
          </div>
        </section>
      </Bounded>
    </motion.div>
  );
}

export default ToolBox;
