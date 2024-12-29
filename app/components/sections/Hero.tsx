"use client";
import React from "react";

import { useTransform, motion, MotionValue } from "framer-motion";

import Link from "next/link";
import AnimatedText, { MotionText, SlideP } from "../ui/MotionText";
import { MotionDiv, MotionP } from "../ui/Motion";
import { useLoader } from "@/app/utils/LoaderContext";

type props = {
  scrollYProgress: MotionValue;
};
/*Tkes the scrollyprogress and changes the scale and opacity on scroll. And then pass the scale and opacity as style props to dynamically change*/
function Hero({ scrollYProgress }: props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const { isLoading } = useLoader();
  return (
    <>
      {!isLoading && (
        <MotionDiv
          id="Home"
          style={{ scale, opacity }}
          className="text-primary sticky top-16 mx-auto flex h-[90vh] w-full max-w-5xl flex-col justify-end px-4 pb-16 md:px-6 lg:pb-10 xl:max-w-6xl 2xl:max-w-8xl 2xl:pb-24"
        >
          {/** Main content   
      <MotionText text="Hello! I’m Joshua, a web " delay={0.3} />
      <MotionText
        text="developer specializing in crafting modern,"
        delay={0.4}
        className="lg:my-1 lg:pb-1"
      />
      <MotionText text="human-centered websites." delay={0.45} />
 */}
          <AnimatedText
            className={
              "overflow-hidden text-left text-2xl font-medium leading-6 text-backgroundb max-md:tracking-[0.015em] sm:text-balance sm:text-3xl sm:leading-4 md:w-[95%] md:text-4xl md:leading-3 lg:text-5xl lg:leading-3 xl:w-[80%] xl:tracking-wide 2xl:text-[56px] 2xl:tracking-wide"
            }
            text={`Hello! I’m Joshua, a web developer focused on creating modern, 
 user friendly websites.`}
            delay={0.8}
            STAGGER={0.02}
          />

          {/** Footer section  */}
          <div className="mt-20 flex w-full items-center justify-between self-start max-sm:text-sm md:mt-8 2xl:w-[95%]">
            <div className="flex items-center gap-x-1 sm:gap-x-2">
              <SlideP
                delay={0.8}
                className="size-2 animate-pulse rounded-full bg-[#17A21C] sm:size-3"
              />

              <SlideP
                delay={0.8}
                className={"text-[#161616]/80"}
                text={"Available for work"}
              />
            </div>
            <Link
              href="mailto:jdscodes04@gmail.com"
              className="flex cursor-pointer flex-col"
            >
              <SlideP
                delay={0.8}
                text={"Get in Touch"}
                className="hidden text-[#161616]/70"
              />

              <SlideP
                delay={0.8}
                className={"text-[#161616]"}
                text={"jdscodes04@gmail.com"}
              />
            </Link>
          </div>
        </MotionDiv>
      )}
    </>
  );
}

export default Hero;

{
  /**
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
   
      <motion.div
        className="h-56 w-56 rounded-full border-4 border-green bg-[url('/me.jpeg')] bg-cover bg-no-repeat md:-mt-20 md:h-64 md:w-64 xl:h-72 xl:w-72"
        initial={{ filter: "blur(2px)" }}
        whileInView={{ filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", delay: 3.2 }}
      />

      <div className="flex flex-col gap-1 py-6 text-center md:gap-2">
        <motion.h1 className="flex overflow-hidden text-4xl font-black sm:text-5xl md:text-7xl xl:text-8xl">
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
            <TextFlip className="ml-2 text-4xl text-green sm:text-5xl md:text-7xl lg:ml-4 xl:text-8xl">
              jo
            </TextFlip>{" "}
          </motion.span>
        </motion.h1>
        <motion.h1 className="overflow-hidden text-[2rem] font-bold text-backgroundb/95 max-sm:leading-none sm:text-4xl md:text-6xl xl:text-7xl">
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
        <motion.p className="my-1 overflow-hidden text-sm text-backgroundb/90 sm:text-lg md:text-2xl md:font-medium xl:text-3xl">
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
          className="mt-1 w-28 self-center rounded-3xl border border-green py-2 pl-1 text-sm font-medium text-backgroundb/90 hover:scale-95 sm:w-32 sm:text-lg"
        >
          <Link
            href="#CTA"
            className="flex items-center justify-center gap-1 self-center"
          >
            {"Let's Talk "} <ArrowRight />
          </Link>
        </motion.button>
      </div>
    </motion.div> */
}
