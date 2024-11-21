import React from "react";
import {
  MotionDiv,
  Motionh1,
  MotionPath,
  MotionSpan,
  MotionSvg,
} from "./Motion";

const svgvariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const pathvariant = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Loader() {
  return (
    <div>
      <MotionDiv
        initial={{ y: 0 }}
        exit={{
          y: "-100%",
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
        transition={{
          delay: 0.6,
          duration: 1,
          type: "tween",
          ease: [0.76, 0.1, 0.34, 1.3], //These numbers specify easing speeds 1 is full ease. 0 is no ease//
        }}
        className="fixed left-0 top-0 z-[9999] h-full w-full bg-backgroundb"
      >
        <MotionDiv
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
          }}
          transition={{
            delay: 0.6,
            duration: 1,
            type: "tween",
            ease: [0.76, 0.1, 0.34, 1.3],
          }}
          className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15"
        />
        <div className="flex h-full flex-col justify-between p-4 md:p-10">
          <span className="font-semibold text-white/50 md:text-lg">
            {"Joshua D'souza"}
          </span>

          <section className="flex items-end justify-between">
            <div className="flex flex-col gap-2 md:gap-3">
              <Motionh1 className="overflow-hidden text-[2rem] font-semibold leading-[0.8] text-backgroundw/55 sm:text-[3rem] sm:font-bold">
                <MotionSpan
                  className="inline-block overflow-hidden"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    type: "tween",
                    ease: [0.46, 0.3, 0.64, 1.2],
                  }}
                >
                  {" "}
                  Web Developer
                </MotionSpan>
              </Motionh1>
              <Motionh1 className="overflow-hidden pl-[2px] text-[2rem] font-semibold leading-[0.8] text-backgroundw/55 sm:text-[3rem] sm:font-bold">
                <MotionSpan
                  className="inline-block overflow-hidden"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                    type: "tween",
                    ease: [0.46, 0.3, 0.64, 1.2],
                  }}
                >
                  {" "}
                  Based In Bahrain
                </MotionSpan>
              </Motionh1>
            </div>

            <span className="hidden text-white/50 sm:block">Loading...</span>
          </section>
        </div>
      </MotionDiv>
    </div>
  );
}
{
  /**
  <div className="p-2">
            {" "}
            <MotionSvg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={40}
              viewBox="0 0 34 48"
              stroke="#00806E"
              fill="none"
              strokeWidth={1}
              variants={svgvariant}
              initial="hidden"
              animate="visible"
            >
              <MotionPath
                variants={pathvariant}
                d="M6.5 1.316c0 .438 4 6.977 4.25 6.977.148 0 .25-1.66.25-3.656V.977H8.75c-1.25 0-2.25.144-2.25.34ZM14.898 1.27c-.25.195-.398 3.218-.398 6.68v6.343l3.402 5.32 3.348 5.266.148-8.54.102-8.585 1.152.297c3.098.879 3.848 4.097 3.848 16.097v8.977l2.402 3.656c1.297 2.047 2.496 3.707 2.649 3.707 1.648 0 2.597-20.734 1.297-28-1.598-8.781-3.946-10.93-12.696-11.367-2.703-.144-5.05-.098-5.254.149ZM4 21.266c0 16.93-.05 18.148-.902 18.879-.496.492-1.297.832-1.75.832-.696 0-.848.535-.848 3.46v3.415l2.348-.34c3.101-.438 4.152-.828 5.605-2.145C10.852 43.121 11 41.953 11 27.512V14L7.898 9.125C6.148 6.437 4.602 4 4.398 3.707 4.203 3.414 4 11.317 4 21.266ZM14.602 33.414l.148 13.66h4.5c5.598 0 7.598-.437 9.45-1.902l1.5-1.121-2.15-3.516-2.198-3.512-.903 1.516c-.5.777-1.148 1.461-1.402 1.461-.25 0-.797.145-1.246.293-.7.242-.801-.344-.801-4.832v-5.168l-3.05-4.781c-1.7-2.633-3.25-4.973-3.497-5.27-.305-.242-.402 5.176-.351 13.172Zm0 0"
                style={{
                  stroke: "#00806E",
                  fillRule: "nonzero",
                  fill: "",
                  fillOpacity: 1,
                }}
              />
            </MotionSvg>
          </div>
  */
}
