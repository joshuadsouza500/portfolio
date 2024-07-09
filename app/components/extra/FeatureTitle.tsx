import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useFeatureStore } from "./store";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import Image from "next/image";
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

{
  /** */
}
function FeatureTitle({
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
  const ref = useRef<HTMLParagraphElement>(null); //"-20% 0px -30% 0px"//

  const isInView = useInView(ref, { margin: "-25% 0px -30% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, setInViewFeature, id]);

  return (
    <div ref={ref} className="transition-colors">
      <h1
        className={cn(
          "text-8xl font-semibold",
          isInView ? "text-green/80" : "text-white/5 opacity-50",
        )}
      >
        {title}
      </h1>

      <h6
        className={cn(
          "pl-1 pt-6 text-base",
          isInView ? "text-white/40" : "text-transparent",
        )}
      >
        {type}
      </h6>
      <div className={cn("flex justify-between text-3xl font-semibold")}>
        <h6
          className={cn(
            "text-3xl font-semibold",
            isInView ? "text-white/80" : "text-transparent",
          )}
        >
          {called}
        </h6>
        <div
          className={cn("flex gap-2 pr-10", isInView ? "visible" : "hidden")}
        >
          <Link
            href={live}
            target="_blank"
            className="rounded-md hover:scale-110"
            style={{ color: "gray", fontSize: "30px", fontWeight: "500" }}
          >
            🔗
          </Link>

          <Link href={link} target="_blank">
            <Image
              alt="Github Logo"
              src="/github.svg"
              width={30}
              height={30}
              className="hover:scale-[1.05]"
            />
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "flex gap-2 pt-4 text-base",
          isInView ? "text-white/40" : "text-transparent",
        )}
      >
        <h6
          className={cn(
            "rounded-2xl px-3",
            isInView ? "border-2 border-white/40" : "",
          )}
        >
          {tool1}
        </h6>
        <h6
          className={cn(
            "rounded-2xl px-2",
            isInView ? "border-2 border-white/60" : "",
          )}
        >
          {tool2}
        </h6>
        <h6
          className={cn(
            "rounded-2xl px-2",
            isInView ? "border-2 border-white/60" : "",
          )}
        >
          {tool3}
        </h6>
      </div>
    </div>
  );
}

export default FeatureTitle;
