"use client";
import React, { useEffect, useRef } from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import { useTransform, motion, easeIn } from "framer-motion";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "@/app/utils/cn";
import { TextFlip } from "../magicui/TextFlip";

function Hero({ scrollYProgress }: any) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      style={{ scale, opacity }}
      className="sticky top-16 flex h-screen w-full flex-col items-center justify-start bg-backgroundw text-backgroundb max-md:pt-16 md:justify-center"
    >
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]",
        )}
      />
      <motion.div
        className="h-56 w-56 rounded-full border-4 border-green bg-[url('/Me2.jpg')] bg-cover bg-no-repeat md:-mt-14 md:h-72 md:w-72"
        initial={{ filter: "blur(2px)" }}
        whileInView={{ filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn" }}
      />

      <div className="flex flex-col gap-1 py-6 text-center md:gap-2">
        <motion.h1 className="flex overflow-hidden text-4xl font-black sm:text-5xl md:text-7xl">
          <motion.span
            className="flex overflow-hidden"
            initial={{ y: "100%", opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1, paddingBottom: "6px" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "tween",
              ease: [0.76, 0.1, 0.34, 1],
            }}
          >
            {" "}
            Hello!
            <span className="pr-2" style={{ color: "gold" }}>
              &#128075;{" "}
            </span>{" "}
            I&apos;m{" "}
            <TextFlip className="ml-2 text-4xl text-green sm:text-5xl md:text-7xl lg:ml-4">
              Joshua
            </TextFlip>{" "}
          </motion.span>
        </motion.h1>
        <motion.h1 className="overflow-hidden text-[2rem] font-bold text-black/90 sm:text-4xl md:text-6xl">
          <motion.span
            className="inline-block overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              type: "tween",
              ease: [0.76, 0.1, 0.34, 1],
            }}
          >
            {" "}
            A Web Developer
          </motion.span>
        </motion.h1>
        <motion.p className="overflow-hidden text-sm font-normal text-backgroundb/90 sm:text-lg md:text-2xl">
          <motion.span
            className="inline-block overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              type: "tween",
              ease: [0.76, 0.1, 0.34, 1],
            }}
          >
            {" "}
            I like to build things for the web!
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Hero;

{
  /**
   * <Image
          src="/Me2.jpeg"
          alt="portfolio Image"
          width={200}
          height={300}
          className="h-[80%] w-[80%] rounded-full border-4 border-red-800 object-cover hover:border-green"
        />
   <div className="flex flex-col gap-2 py-6 text-center">
        <h1 className="flex text-4xl font-black md:pb-2 md:text-7xl">
          Hello! <span style={{ color: "gold" }}>&#128075; </span> I&apos;m{" "}
          <TextFlip className="ml-2 text-4xl text-green sm:text-5xl md:text-7xl lg:ml-4">
            Joshua
          </TextFlip>{" "}
        </h1>
        <h1 className="pb-1 text-4xl font-bold md:pb-4 md:text-7xl">
          A Web Developer{" "}
        </h1>
        <p className="text-base text-backgroundb text-opacity-70 md:text-2xl">
          I like to build things for the web!
        </p>
      </div> */
}
