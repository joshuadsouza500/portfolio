import React from "react";
import Bounded from "../Bounded";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  type: string;
  called: string;
  live: string;
  link: string;
  cover: string;
  vid: string;
  tool1: string;
  tool2: string;
  tool3: string;
};

function SmallScroll({
  id,
  title,
  type,
  called,
  live,
  link,
  cover,
  vid,
  tool1,
  tool2,
  tool3,
}: Props) {
  return (
    <Bounded className="">
      <div
        className="relative flex w-full flex-col max-sm:-mt-4 md:px-4"
        id="Services"
      >
        <div
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex aspect-square h-[350px] cursor-pointer items-center justify-center rounded-md sm:h-[400px] sm:max-w-[650px] md:h-[550px] md:max-w-[840px]"
        >
          <video
            width="50"
            height="50"
            preload="none"
            autoPlay
            muted
            loop
            style={{ objectFit: "fill" }}
            className="h-[65%] w-[85%] rounded-md shadow-xl shadow-black sm:h-[80%]"
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>

        <h6 className="pt-4 font-medium tracking-wide text-white/40 max-sm:pl-1 max-sm:text-sm">
          {type}
        </h6>
        <section className="items-center justify-between sm:flex md:w-[95%]">
          {" "}
          <div className="pt-1">
            <h4 className="text-3xl font-semibold text-white/80 md:text-4xl">
              {called}
            </h4>
          </div>
          <div
            className={cn(
              "flex gap-2 pl-1 pt-2 text-xs text-white/60 max-sm:w-full max-sm:justify-start md:text-sm",
            )}
          >
            <h6
              className={cn(
                "rounded-2xl border border-white/40 px-2 py-1 md:px-3",
              )}
            >
              {tool1}
            </h6>
            <h6
              className={cn(
                "rounded-2xl border border-white/40 px-2 py-1 md:px-3",
              )}
            >
              {tool2}
            </h6>
            <h6
              className={cn(
                "rounded-2xl border border-white/40 px-2 py-1 md:px-3",
              )}
            >
              {tool3}
            </h6>
          </div>
        </section>
      </div>
    </Bounded>
  );
}

export default SmallScroll;

{
  /**
   <Link
              href={live}
              target="_blank"
              style={{ color: "gray", fontSize: "30px", fontWeight: "400" }}
              className="rounded-md hover:bg-white/10"
            >
              🔗
            </Link> */
}
