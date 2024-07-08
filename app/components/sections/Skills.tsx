import React from "react";
import Bounded from "../Bounded";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

import Scroller from "../extra/Scroller";
import TextRevealByWord from "../magicui/text-reveal";

function Skills() {
  return (
    <div className="relative rounded-2xl max-md:pt-24 md:pb-32">
      <div className="absolute inset-0 mb-6 rounded-b-3xl bg-black bg-[url('/noise-light.png')] opacity-15" />
      <Bounded className="-mb-16 lg:-mb-20">
        <TextRevealByWord text="My Digital ToolBox" Colour="text-white/80" />
      </Bounded>
      {/*  <Scroller skilldata={skilldata} />**/}

      <div className="mx-2 md:mx-4">
        <VelocityScroll
          text="HTML.   TAILWIND.   REACTJS. TYPESCRIPT.  NEXTJS. "
          default_velocity={2}
          className=""
        >
          {"FIGMA. FRAMER MOTION.   CONTENTFUL. GIT."}
        </VelocityScroll>{" "}
      </div>
    </div>
  );
}

export default Skills;
