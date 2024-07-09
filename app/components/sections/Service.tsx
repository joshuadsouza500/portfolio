import React from "react";
import Bounded from "../Bounded";
import TextRevealByWord from "../magicui/text-reveal";
import Services from "../ui/Services";

function Service() {
  return (
    <Bounded className="relative h-full rounded-t-3xl bg-backgroundb">
      <div
        className="absolute inset-0 rounded-t-3xl bg-black bg-[url('/noise-light.png')] opacity-15"
        id="Services"
      />
      <TextRevealByWord text="What I Do" Colour="text-white/80" />
      <Services />
    </Bounded>
  );
}

export default Service;
