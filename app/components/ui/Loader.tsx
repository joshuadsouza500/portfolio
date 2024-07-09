"use client";
import { motion } from "framer-motion";

import React from "react";

export default function Loader() {
  return (
    <div>
      <motion.div
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
        <motion.div
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
            <div className="flex flex-col gap-1">
              <motion.h1 className="overflow-hidden text-[2rem] font-bold leading-[0.8] text-backgroundw/55 sm:text-[3rem]">
                <motion.span
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
                </motion.span>
              </motion.h1>
              <motion.h1 className="overflow-hidden text-[2rem] font-bold leading-[0.8] text-backgroundw/55 sm:text-[3rem]">
                <motion.span
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
                </motion.span>
              </motion.h1>
            </div>

            <span className="hidden text-white/50 sm:block">Loading...</span>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
