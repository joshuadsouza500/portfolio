"use client";
import { motion } from "framer-motion";
import React from "react";
import { TextFlip } from "./magicui/TextFlip";

function ButtonLink({ text, handleButton, active }: any) {
  return (
    <div className="absolute right-5 top-1">
      <motion.div
        onClick={handleButton}
        className={
          text == "Close"
            ? "relative -mr-2 w-20 rounded-3xl bg-backgroundb py-1 text-xl font-medium text-backgroundw"
            : "relative rounded-3xl pt-[2px] text-xl font-medium text-backgroundw"
        }
      >
        <TextFlip className="text-xl font-bold">{text}</TextFlip>
      </motion.div>
    </div>
  );
}

export default ButtonLink;
