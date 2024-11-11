"use client";
import { motion } from "framer-motion";
import React from "react";
import { TextFlip } from "../magicui/TextFlip";
import { MotionDiv } from "./Motion";

function ButtonLink({ text, handleButton, active }: any) {
  return (
    <div className="absolute right-5 top-1">
      <MotionDiv
        onClick={handleButton}
        className={
          text == "Close"
            ? "relative -mr-2 w-20 rounded-3xl bg-backgroundw py-1 text-xl font-medium text-backgroundb"
            : "relative rounded-3xl pt-[2px] text-xl font-medium text-backgroundw"
        }
      >
        <TextFlip className="text-xl font-bold">{text}</TextFlip>
      </MotionDiv>
    </div>
  );
}

export default ButtonLink;
