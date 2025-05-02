import React, { Children } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";
import { MotionSpan } from "../ui/Motion";

const DURATION = 0.25;
const STAGGER = 0.02;

type Props = {
  children: string;
  href?: string;
  className?: string;
};
export const TextFlip = ({ children, href, className }: Props) => {
  return (
    <MotionSpan
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative inline-block overflow-hidden whitespace-nowrap font-black",
        className,
      )}
    >
      <div>
        {/* We use the split method on empty string and then map over each letter to perform animations */}
        {children?.split("").map((l, i) => {
          return (
            <MotionSpan
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
            </MotionSpan>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <MotionSpan
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
            </MotionSpan>
          );
        })}
      </div>
    </MotionSpan>
  );
};
