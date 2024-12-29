"use client";
import React from "react";
import Bounded from "../Bounded";

import { Minus, Plus } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedText, { MHeading, SlideP } from "../ui/MotionText";
import { MotionDiv, Motionh2, MotionP, MotionSpan } from "../ui/Motion";
interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  content?: string;
}

const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "Leveraging the latest technologies and industry-leading practices, I develop responsive, high-performance websites that are not only visually striking but also operate seamlessly.",
    content: "Web Animations • CMS Integration • Full stack developement ",
  },
  {
    id: "web-design",
    number: "02",
    title: "Web Design",
    description:
      "Creating visually stunning and user-friendly interfaces that enhance brand identity and drive engagement through thoughtful design principles.",
    content: "UI/UX design • Responsive design • Wireframing",
  },
  {
    id: "seo",
    number: "03",
    title: "SEO",
    description:
      "Optimizing websites for search engines to improve visibility, drive organic traffic, and achieve better rankings in search results.",
    content: "Technical SEO • Content optimization • Performance optimization ",
  },
];
function Service() {
  const [openService, setOpenService] =
    React.useState<string>("web-development");
  return (
    <Bounded className="relative h-full rounded-t-3xl bg-backgroundb px-4 max-md:pb-20">
      <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
      <div className="grid h-fit w-full grid-cols-1 gap-2 xl:w-[90%]">
        <MHeading
          className={
            "overflow-hidden text-5xl font-bold tracking-tight text-backgroundw/80 md:text-6xl lg:text-7xl 2xl:text-8xl"
          }
          text={"What I Do"}
          duration={0.7}
        />

        {/* Paragraph Animation */}
        <AnimatedText
          text={`Here’s how i can help you reach your objectives.`}
          className={
            "mt-2 w-[60%] place-self-end text-balance pl-1 text-xs font-medium leading-[0.5rem] text-backgroundw/70 sm:mt-3 sm:w-[50%] sm:text-sm sm:leading-none md:hidden"
          }
          delay={0}
          STAGGER={0.01}
          Y={`70%`}
        />
        <AnimatedText
          text={`Here’s why partnering with me can make a significant difference in reaching your objectives and setting your brand apart in a competitive market.`}
          className={
            "ml-[30%] mt-3 hidden w-[50%] text-balance font-medium leading-tight text-backgroundw/70 md:block md:place-self-center lg:ml-[35%] lg:text-lg lg:leading-tight 2xl:text-xl 2xl:leading-tight"
          }
        />
      </div>
      <div className="relative mx-auto grid w-full gap-2 lg:grid-cols-3 lg:gap-8 xl:md:grid-cols-5">
        {/* Left Column - Sticky */}
        <div className="col-span-1 h-fit xl:col-span-2"></div>

        {/* Right Column - Sticky Services */}
        <div className="col-span-2 mt-4 flex w-full flex-col space-y-4 max-lg:mx-auto sm:mt-6 md:mt-12 md:w-[80%] lg:space-y-6 xl:col-span-3 2xl:mt-16">
          {services.map((service) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full border-b border-white/20 pb-6 pt-2"
            >
              <button
                onClick={() =>
                  setOpenService(openService === service.id ? "" : service.id)
                }
                className="group flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <MotionSpan
                    className="mr-1 text-white/60 max-md:text-sm"
                    initial={{ filter: "blur(1px)", opacity: 0.2 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    ({service.number})
                  </MotionSpan>
                  <Motionh2
                    initial={{ filter: "blur(1px)", opacity: 0.2 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeInOut",
                    }}
                    className="text-2xl font-semibold text-backgroundw/80 sm:text-2xl md:text-3xl 2xl:text-4xl"
                  >
                    {service.title}
                  </Motionh2>
                </div>
                <div className="group-hover:text-background flex size-12 items-center justify-center text-backgroundw/80 transition-colors">
                  {openService === service.id ? (
                    <Minus className="size-5 md:size-8" />
                  ) : (
                    <Plus className="size-5 md:size-8" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="ml-2 w-[92%] overflow-hidden sm:ml-10 md:ml-14 md:w-[85%]"
                  >
                    <MotionDiv
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="pt-4 md:pt-5"
                    >
                      <p className="tracking-wider text-[#f7f7f7]/70 max-md:text-sm">
                        {service.description}
                      </p>
                      {service.content && (
                        <div className="mt-4 font-medium text-white/80 max-md:text-sm">
                          {service.content}
                        </div>
                      )}
                    </MotionDiv>
                  </motion.div>
                )}
              </AnimatePresence>
            </MotionDiv>
          ))}
        </div>
      </div>
    </Bounded>
  );
}

export default Service;
