"use client";
import React from "react";

import { useTransform, motion, MotionValue } from "framer-motion";

import Link from "next/link";
import { AnimatedTitle, SlideP } from "../ui/MotionText";
import { MotionDiv, MotionSpan } from "../ui/Motion";
import { useLoader } from "@/app/utils/LoaderContext";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type props = {
  scrollYProgress: MotionValue;
};
/*Takes the scrollyprogress and changes the scale and opacity on scroll. And then pass the scale and opacity as style props to dynamically change*/
function Hero({ scrollYProgress }: props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  /*   const rotate = useTransform(scrollYProgress, [0, 0.4], [0, 360]); */
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
          {/*   <div className="flex h-full w-full items-center justify-center sm:hidden">
            <MotionSpan style={{ rotate }} className="transition-transform">
              <Image
                src={"/flower.png"}
                height={100}
                width={100}
                alt="Flower"
              />
            </MotionSpan>
          </div> */}
          <div className="mx-auto w-full flex-col justify-end px-4 pb-16 md:px-6 lg:max-w-[clamp(62rem,calc(58.180rem+29.09vw),75rem)] lg:pb-10 2xl:max-w-8xl 2xl:pb-24">
            {" "}
            <AnimatedTitle
              className={
                "overflow-hidden text-left text-3xl font-semibold text-backgroundb max-md:tracking-[0.015em] sm:text-balance md:w-[95%] md:text-[40px] lg:w-[80%] lg:text-5xl xl:text-[52px] xl:tracking-wide 2xl:text-6xl 2xl:font-medium"
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
                  className={"text-[#161616]/80"}
                  text={"jdscodes04@gmail.com"}
                />

                <div className="relative text-black/70">
                  <ChevronDown className="animate-chevronScroll absolute left-[85%] top-0 size-7 stroke-[1px]" />
                  <ChevronDown className="animate-chevronScroll2 absolute left-[85%] top-0 size-7 stroke-[1px]" />
                </div>
              </Link>
            </div>
          </div>
        </MotionDiv>
      )}
    </>
  );
}

export default Hero;
