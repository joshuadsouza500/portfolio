"use client";
import React from "react";

import { useTransform, motion, MotionValue } from "framer-motion";

import Link from "next/link";
import { AnimatedTitle, MotionText, SlideP } from "../ui/MotionText";
import { MotionDiv, MotionP } from "../ui/Motion";
import { useLoader } from "@/app/utils/LoaderContext";

type props = {
  scrollYProgress: MotionValue;
};
/*Tkes the scrollyprogress and changes the scale and opacity on scroll. And then pass the scale and opacity as style props to dynamically change*/
function Hero({ scrollYProgress }: props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const { isLoading } = useLoader();
  return (
    <>
      {!isLoading && (
        <MotionDiv
          id="Home"
          aria-label="Hero Section"
          style={{ scale, opacity }}
          className="text-primary sticky top-16 flex h-[90vh] w-full flex-col justify-end bg-backgroundw"
        >
          <div className="mx-auto w-full flex-col justify-end px-4 pb-16 md:px-6 lg:max-w-[clamp(62rem,calc(58.180rem+29.09vw),75rem)] lg:pb-10 2xl:max-w-8xl 2xl:pb-24">
            {" "}
            <AnimatedTitle
              className={
                "overflow-hidden text-left text-[28px] font-medium leading-7 text-backgroundb max-md:tracking-[0.015em] sm:text-balance sm:text-3xl sm:leading-4 md:w-[95%] md:text-4xl md:leading-3 lg:text-5xl lg:leading-3 xl:w-[80%] xl:tracking-wide 2xl:text-[56px] 2xl:tracking-wide"
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
          </div>
        </MotionDiv>
      )}
    </>
  );
}

export default Hero;
