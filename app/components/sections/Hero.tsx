"use client";
import React, { useEffect, useRef } from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import { useTransform, motion, easeIn } from "framer-motion";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "@/app/utils/cn";
import { TextFlip } from "../magicui/TextFlip";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Hero({ scrollYProgress }: any) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      id="Home"
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
      {/***/}
      <motion.div
        className="h-56 w-56 rounded-full border-4 border-green bg-[url('/Me2.jpg')] bg-cover bg-no-repeat md:-mt-20 md:h-64 md:w-64"
        initial={{ filter: "blur(2px)" }}
        whileInView={{ filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", delay: 3.2 }}
      />

      <div className="flex flex-col gap-1 py-6 text-center md:gap-2">
        <motion.h1 className="flex overflow-hidden text-4xl font-black sm:text-5xl md:text-7xl">
          <motion.span
            className="flex overflow-hidden"
            initial={{ y: "100%", opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1, paddingBottom: "6px" }}
            viewport={{ once: true }}
            transition={{
              delay: 3,
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
        <motion.h1 className="overflow-hidden text-[2rem] font-bold text-backgroundb/95 max-sm:leading-none sm:text-4xl md:text-6xl">
          <motion.span
            className="inline-block overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 3.2,
              duration: 0.6,
              type: "tween",
              ease: [0.76, 0.1, 0.34, 1],
            }}
          >
            {" "}
            A Web Developer
          </motion.span>
        </motion.h1>
        <motion.p className="overflow-hidden text-sm text-backgroundb/90 sm:text-lg md:text-2xl md:font-medium">
          <motion.span
            className="inline-block overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 3.6,
              duration: 0.6,
              type: "tween",
              ease: [0.76, 0.1, 0.34, 1],
            }}
          >
            {" "}
            I like building things for the web!
          </motion.span>
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 4,
            duration: 1,
          }}
          viewport={{ once: true }}
          id="btn"
          className="w-28 self-center rounded-3xl border border-green py-2 pl-1 text-sm font-medium text-backgroundb/90 hover:scale-95 sm:w-32 sm:text-lg"
        >
          <Link
            href="#CTA"
            className="flex items-center justify-center gap-1 self-center"
          >
            {"Let's Talk "} <ArrowRight />
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Hero;
