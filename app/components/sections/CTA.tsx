import React from "react";

import Link from "next/link";

import { ArrowUp } from "lucide-react";
import { MotionDiv } from "../ui/Motion";
import AnimatedText, { MHeading, SlideP } from "../ui/MotionText";

function CTA() {
  return (
    <div
      id="CTA"
      className="relative mx-auto flex h-auto flex-col justify-center bg-backgroundw px-4 max-lg:pb-4 max-md:pt-12 md:max-w-5xl md:px-6 md:pt-16 lg:pb-6 xl:max-w-6xl 2xl:h-[60vh] 2xl:max-w-8xl 2xl:pb-2"
    >
      <div className="cursor-pointer">
        {" "}
        <div className="space-y-3 sm:space-y-5">
          <SlideP
            className={
              "text-xl font-medium tracking-tight text-black/55 md:text-2xl lg:text-3xl"
            }
            text={"Have a project in mind?"}
            duration={0.6}
            delay={0}
          />

          <div className="flex items-center gap-1 sm:gap-2">
            <p className="size-5 animate-pulse rounded-full bg-[#32CD32] duration-300 md:size-7" />
            <MotionDiv
              className="relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                hover: { scale: ".99" },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedText
                className={"text-6xl font-medium md:text-8xl lg:text-[128px]"}
                text={`Let's Talk`}
                delay={0.3}
              />
              <MotionDiv
                className="absolute bottom-0 left-2 h-[5px] bg-backgroundb/95"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.35 }}
              />
            </MotionDiv>
          </div>
        </div>
        <div className="mt-5 flex w-full items-center justify-between pt-3 md:mb-2 lg:mt-8">
          <SlideP
            className={
              "text-xl font-medium hover:scale-[.98] hover:text-black/80 hover:underline md:text-2xl lg:text-3xl"
            }
            text={"JohnDoe@email.com"}
            duration={0.6}
            delay={0.3}
          />
          <button className="mr-1 flex size-7 items-center justify-center rounded-full bg-black text-white hover:scale-95 md:size-11">
            <Link href={"/"}>
              <ArrowUp className="size-5 md:size-8" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
