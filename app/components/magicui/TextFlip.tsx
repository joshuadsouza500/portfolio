"use client";

import React, { Children } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

const DURATION = 0.25;
const STAGGER = 0.025;

type Props = {
  children: string;
  href?: string;
  className?: string;
};
export const TextFlip = ({ children, href, className }: Props) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative block overflow-hidden whitespace-nowrap font-black",
        className,
      )}
    >
      <div>
        {/* We use the split method on empty string and then map over each letter to perform animations */}
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};
