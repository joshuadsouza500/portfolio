import React from "react";

import Link from "next/link";

import { ArrowUp, Mail } from "lucide-react";
import { MotionDiv, MotionLink } from "../ui/Motion";
import AnimatedText, { MHeading, SlideP } from "../ui/MotionText";

function CTA() {
  return (
    <div
      id="CTA"
      className="relative mx-auto flex h-auto flex-col justify-center bg-backgroundw px-4 pt-16 max-lg:pb-4 md:max-w-5xl md:px-6 lg:pb-6 xl:max-w-6xl xl:pt-20 2xl:h-[55vh] 2xl:max-w-8xl 2xl:pb-2"
    >
      <div className="cursor-pointer">
        {" "}
        <div className="space-y-2 2xl:space-y-3">
          <SlideP
            className={
              "text-xl font-medium tracking-tight text-black/55 md:text-2xl lg:text-3xl"
            }
            text={"Have a project in mind?"}
            duration={0.6}
            delay={0}
          />

          <div className="flex items-center gap-1 sm:gap-2">
            <SlideP
              delay={0.3}
              duration={0.4}
              className="size-4 animate-pulse rounded-full bg-[#32CD32] duration-300 md:size-6"
            />
            <MotionLink
              href="mailto:jdscodes04@gmail.com"
              className="relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 0.98 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedText
                className={
                  "text-6xl font-medium md:text-8xl lg:font-semibold xl:text-[128px]"
                }
                text={`Let's Talk`}
                delay={0.3}
              />
              <MotionDiv
                className="absolute bottom-2 left-1 h-1 bg-backgroundb md:bottom-6 xl:left-2"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </MotionLink>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-between pt-2 md:mb-2 lg:mt-5">
          <MotionLink
            href="mailto:jdscodes04@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group flex items-center space-x-1 text-lg font-medium text-black/55 transition-colors hover:text-backgroundb md:space-x-2 md:text-2xl lg:text-3xl"
          >
            <Mail className="size-5 transition-transform group-hover:scale-105 md:size-6" />
            <span>jdscodes@gmail.com</span>
          </MotionLink>
          <MotionLink
            href="/"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group flex items-center justify-center rounded-full border border-black/80 p-2 text-black transition-transform hover:scale-105 hover:bg-backgroundb hover:text-white"
          >
            <ArrowUp className="size-4 transition-transform group-hover:scale-110 md:size-6" />
          </MotionLink>
        </div>
      </div>
    </div>
  );
}

export default CTA;
