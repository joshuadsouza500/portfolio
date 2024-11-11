"use client";
import React from "react";
import Bounded from "../Bounded";

import { Minus, Plus } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
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
    <Bounded className="relative h-full rounded-t-3xl bg-backgroundb px-4">
      <div className="relative mx-auto grid gap-2 lg:grid-cols-3 lg:gap-8">
        {/* Left Column - Sticky */}
        <div className="col-span-1 h-fit lg:sticky lg:top-20">
          <h2 className="text-4xl font-bold tracking-tight text-backgroundw/80 sm:text-5xl md:text-6xl">
            What I Do
          </h2>
        </div>

        {/* Right Column - Sticky Services */}
        <div className="col-span-2 flex flex-col space-y-4 lg:space-y-6">
          <p className="mr-1 mt-2 block w-[90%] self-end text-xs font-medium tracking-wide text-[#f7f7f7]/70 sm:hidden">
            {" "}
            Here’s why partnering with me can make a significant difference in
            reaching your objectives and setting your brand apart in a
            competitive market.
          </p>
          <p className="mt-2 hidden w-[90%] self-end text-xs font-medium text-[#f7f7f7]/70 sm:block sm:w-[60%] sm:text-sm md:mt-4 md:pb-10 lg:ml-2 lg:w-[90%] lg:text-lg">
            I offer the expertise and insight to help you achieve your
            aspirations. Here’s why partnering with me can make a significant
            difference in reaching your objectives and setting your brand apart
            in a competitive market.
          </p>
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-white/20 pb-6 pt-2 md:pb-10"
            >
              <button
                onClick={() =>
                  setOpenService(openService === service.id ? "" : service.id)
                }
                className="group flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-white/60 max-sm:text-sm md:text-xl">
                    ({service.number})
                  </span>
                  <h3 className="text-2xl font-semibold text-backgroundw/80 sm:text-3xl md:text-4xl">
                    {service.title}
                  </h3>
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
                    transition={{ duration: 0.3 }}
                    className="ml-2 w-[90%] overflow-hidden sm:ml-10 md:ml-14 md:w-[85%]"
                  >
                    <div className="pt-3 md:pt-6">
                      <p className="text-[#f7f7f7]/60 max-md:text-sm max-sm:tracking-wide">
                        {service.description}
                      </p>
                      {service.content && (
                        <div className="mt-3 font-medium text-white/80 max-md:text-sm md:mt-4">
                          {service.content}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}

export default Service;
