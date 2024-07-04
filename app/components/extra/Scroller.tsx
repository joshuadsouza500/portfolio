import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type skill = {
  skilldata: Props[];
};
type Props = {
  id: number;
  img: string | any;
};
// Try and add a endless loop to the images here or in scroll velocity//
//2 text velocity//
//3 static skills//
function Scroller({ skilldata }: skill) {
  return (
    <main className="flex">
      <motion.div className="flex">
        {skilldata.map((skill) => (
          <div key={skill.id} className="overflow-hidden px-6">
            <Image src={skill.img} alt="image" width={150} height={150} />
          </div>
        ))}
      </motion.div>
    </main>
  );
}

export default Scroller;
