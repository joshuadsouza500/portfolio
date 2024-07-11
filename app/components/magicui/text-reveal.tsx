"use client";

import { cn } from "@/app/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  Colour: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  Colour,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });
  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative -mt-10 h-[30vh] w-full", className)}
    >
      <div
        className={
          "sticky top-0 flex h-[5%] max-w-4xl items-center bg-transparent py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-5xl font-bold text-white/20 sm:text-6xl md:text-7xl lg:p-1 xl:text-8xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                Colour={Colour}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  Colour: string;
}

const Word: FC<WordProps> = ({ children, progress, range, Colour }) => {
  const opacity = useTransform(progress, range, [0.1, 1.5]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={Colour}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
