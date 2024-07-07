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
          borderBottomLeftRadius: "1000px",
          borderBottomRightRadius: "1000px",
        }}
        transition={{
          delay: 1,
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
            borderBottomLeftRadius: "1000px",
            borderBottomRightRadius: "1000px",
          }}
          transition={{
            delay: 1,
            duration: 1,
            type: "tween",
            ease: [0.76, 0.1, 0.34, 1.3],
          }}
          className="absolute inset-0 mb-6 bg-black bg-[url('/noise-light.png')] opacity-15"
        />
        <div className="flex h-full flex-col justify-between p-4 md:p-10">
          <span className="font-semibold text-white/40">
            {"Joshua D'souza"}
          </span>
          <section className="flex items-end justify-between">
            <div className="flex flex-col">
              <motion.h1 className="overflow-hidden text-[2rem] font-bold text-backgroundw/55 max-sm:leading-none sm:text-4xl md:text-7xl">
                <motion.span
                  className="inline-block overflow-hidden"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    type: "tween",
                    ease: [0.76, 0.1, 0.34, 1],
                  }}
                >
                  {" "}
                  Web Developer
                </motion.span>
              </motion.h1>
              <motion.h1 className="overflow-hidden text-[2rem] font-bold text-backgroundw/55 max-sm:leading-none sm:text-4xl md:text-7xl">
                <motion.span
                  className="inline-block overflow-hidden"
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    type: "tween",
                    ease: [0.76, 0.1, 0.34, 1],
                  }}
                >
                  {" "}
                  Based In Bahrain
                </motion.span>
              </motion.h1>
            </div>

            <span className="text-text">Loading...</span>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
