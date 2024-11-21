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
        className={`relative rounded-3xl pt-1 text-xl font-medium ${
          text == "Close"
            ? "-mr-2 w-20 bg-backgroundw px-1 text-backgroundb"
            : "-mt-1 text-backgroundw"
        } `}
      >
        <TextFlip className="text-xl font-bold">{text}</TextFlip>
      </MotionDiv>
    </div>
  );
}

export default ButtonLink;
