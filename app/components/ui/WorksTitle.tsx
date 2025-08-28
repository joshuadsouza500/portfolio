import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useFeatureStore } from "../extra/store";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  id: string;
  title: string;
  type: string;
  called: string;
  live: string;
  link: string;
  tool1: string;
  tool2: string;
  tool3: string;
};

function WorksTitle({
  children,
  id,
  title,
  type,
  called,
  live,
  link,
  tool1,
  tool2,
  tool3,
}: Props) {
  const ref = useRef<HTMLParagraphElement>(null); //"-20% 0px -30% 0px"//  // -20 from ttop of the screen//

  const isInView = useInView(ref, { margin: "-25% 0px -30% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, setInViewFeature, id]);

  return (
    <div ref={ref} className="transition-colors">
      <h1
        className={cn(
          "text-8xl font-medium tracking-tight transition-colors duration-150 ease-in",
          isInView ? "text-white/80" : "text-white/5 opacity-40",
        )}
      >
        {title}
      </h1>

      <h6
        className={cn(
          "pl-1 pt-8 text-base font-medium tracking-wide 2xl:pt-10",
          isInView ? "text-white/40" : "text-transparent",
        )}
      >
        {type}
      </h6>
      <div className={cn("flex justify-between text-3xl font-semibold")}>
        <h6
          className={cn(
            "pt-1 text-3xl font-semibold transition-colors duration-150 ease-in xl:text-4xl 2xl:pl-1 2xl:text-5xl",
            isInView
              ? "cursor-pointer tracking-tight text-white/80 hover:text-white"
              : "text-transparent",
          )}
        >
          <Link href={live} aria-label="live url" target="_blank" className="">
            {called}
          </Link>
        </h6>
      </div>
      <div
        className={cn(
          "flex gap-2 pt-4 text-sm 2xl:pl-1 2xl:pt-6",
          isInView ? "text-white/40" : "text-transparent",
        )}
      >
        <h6
          className={cn(
            "rounded-2xl px-3 py-1",
            isInView ? "border border-white/40 px-4" : "",
          )}
        >
          {tool1}
        </h6>
        <h6
          className={cn(
            "rounded-2xl px-3 py-1",
            isInView ? "border border-white/40 px-4" : "",
          )}
        >
          {tool2}
        </h6>
        <h6
          className={cn(
            "rounded-2xl px-3 py-1",
            isInView ? "border border-white/40 px-4" : "",
          )}
        >
          {tool3}
        </h6>
      </div>
    </div>
  );
}

export default WorksTitle;
