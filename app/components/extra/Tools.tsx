import React from "react";
import Bounded from "../Bounded";

import Scroller from "./Scroller";
import { skilldata } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";

function Tools() {
  return (
    <Bounded className="relative h-full bg-backgroundb">
      <div className="grid w-[90%] grid-cols-6 gap-5 align-middle">
        {skilldata.map((skill) => (
          <div key={skill.id} className="mx-auto">
            <Image src={skill.img} alt="image" width={70} height={80} />
          </div>
        ))}
      </div>
    </Bounded>
  );
}

export default Tools;
