"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import {
  ExpressIcon,
  FigmaIcon,
  FramerIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
} from "../svgs/Icons";
import Bounded from "../Bounded";
import { title } from "process";
import AnimatedText, { MHeading, SlideP } from "../ui/MotionText";
import { Motionh2, Motionh3 } from "../ui/Motion";

const Icons = [
  {
    no: "(01)",
    title: "FRONT-END",
    icons: [
      {
        name: "React",
        component: <ReactIcon height={24} width={24} />,
        component2: <ReactIcon height={40} width={40} />,
      },
      {
        name: "Next.js",
        component: <NextIcon height={24} width={24} />,
        component2: <NextIcon height={40} width={40} />, // Example larger size
      },
      {
        name: "Tailwind CSS",
        component: <TailwindIcon height={24} width={24} />,
        component2: <TailwindIcon height={40} width={40} />, // Example larger size
      },
      {
        name: "Redux",
        component: <ReduxIcon height={24} width={24} />,
        component2: <ReduxIcon height={40} width={40} />, // Example larger size
      },
    ],
  },
  {
    no: "(02)",
    title: "BACK-END",
    icons: [
      {
        name: "Node",
        component: <NodeIcon height={24} width={24} />,
        component2: <NodeIcon height={40} width={40} />, // Example larger size
      },
      {
        name: "Express",
        component: <ExpressIcon height={24} width={24} />,
        component2: <ExpressIcon height={40} width={40} />, // Example larger size
      },
      {
        name: "Mongo",
        component: <MongoIcon height={24} width={24} />,
        component2: <MongoIcon height={40} width={40} />, // Example larger size
      },
      {
        name: "Prisma",
        component: <PrismaIcon height={24} width={24} />,
        component2: <PrismaIcon height={40} width={40} />, // Example larger size
      },
    ],
  },
  {
    no: "(03)",
    title: "DESIGN",
    icons: [
      {
        name: "Figma",
        component: <FigmaIcon height={24} width={24} />,
        component2: <FigmaIcon height={40} width={40} />, // Example larger size
      },
      {
        name: "Framer Motion",
        component: <FramerIcon height={24} width={24} />,
        component2: <FramerIcon height={40} width={40} />, // Example larger size
      },
    ],
  },
];

function ToolBox() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"], //animations starts when the end of the target touches end of the screen//
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1]);

  /** Here we use the scroll y value of the ref container(screen) and change the Xsize based on scroll     <Skills />   <h2 className="text-5xl font-bold tracking-tight text-backgroundw/80 md:text-6xl lg:text-7xl xl:text-center 2xl:text-8xl">
            What I Use
          </h2>*/
  return (
    <motion.div
      ref={container}
      style={{ scaleX }}
      className="relative rounded-b-3xl bg-backgroundb pb-10"
    >
      <div className="absolute inset-0 mb-6 rounded-b-3xl bg-black bg-[url('/noise-light.png')] opacity-15" />
      <Bounded className="px-4 py-8 md:py-8">
        <div className="grid h-fit w-full gap-2 lg:gap-6 2xl:pl-10">
          <MHeading
            className={
              "text-5xl font-bold tracking-tight text-backgroundw/80 md:text-6xl lg:text-7xl 2xl:text-8xl"
            }
            text={"What I Use"}
            duration={0.6}
          />

          <AnimatedText
            className="col-span-2 mt-3 w-[70%] place-self-end text-balance text-xs font-medium text-[#f7f7f7]/70 sm:w-[50%] sm:text-sm md:ml-[30%] md:place-self-center lg:ml-[35%] lg:w-[50%] lg:text-lg xl:text-xl"
            Y={`70%`}
            text={
              " Here are some of the tools and technologies i use to create responsive user friendly designs and more."
            }
          />
        </div>

        <section className="mt-8 flex w-[90%] flex-col justify-around border-t border-white/25 text-white sm:mt-10 sm:w-[80%] lg:mt-14 lg:w-[70%]">
          {Icons.map((category, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center justify-between border-b border-white/25 px-1 py-2 md:py-4 2xl:py-6"
            >
              <div className="flex items-center">
                <Motionh3
                  className="mr-3 text-sm text-white/70 md:text-base"
                  initial={{ filter: "blur(1px)", opacity: 0.2 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  {category.no}
                </Motionh3>{" "}
                <Motionh3
                  className="text-lg font-medium text-white/70 md:text-xl lg:text-2xl"
                  initial={{ filter: "blur(1px)", opacity: 0.2 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                >
                  {category.title}
                </Motionh3>
              </div>
              <ul className="flex gap-2 md:gap-5">
                {category.icons.map((icon, iconIndex) => (
                  <li key={iconIndex} className="">
                    <span className="md:hidden">{icon.component}</span>
                    <span className="hidden hover:scale-95 md:block">
                      {icon.component2}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Bounded>
    </motion.div>
  );
}

export default ToolBox;
