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
        className={`pt- 1 relative rounded-3xl text-xl font-medium ${
          text == "Close"
            ? "1 -mr-3 h-[35px] w-20 bg-backgroundw px-1 pt-[3px] text-backgroundb"
            : "-mr-2 -mt-[1px] text-backgroundw"
        } `}
      >
        <TextFlip className="bg- red-300 text-xl font-bold">{text}</TextFlip>
      </MotionDiv>
    </div>
  );
}

export default ButtonLink;
