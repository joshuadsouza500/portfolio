import React from "react";
import Bounded from "./Bounded";
import { cn } from "../utils/cn";
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
      <div className="relative flex w-full flex-col max-sm:-mt-10">
        <h1 className="pb-4 pt-2 text-4xl font-bold text-green sm:pb-6 sm:text-5xl md:text-5xl">
          {title}
        </h1>
        <div
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex aspect-square h-[350px] items-center justify-center rounded-lg sm:h-[450px] sm:max-w-[600px] md:max-w-[800px]"
        >
          <video
            width="100"
            height="100"
            controls
            preload="none"
            autoPlay
            muted
            loop
            style={{ objectFit: "fill" }}
            className="h-[75%] w-[80%] rounded-lg shadow-2xl shadow-black sm:h-[80%]"
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <h6 className="pt-6 text-sm text-white/20 md:pt-8">{type}</h6>
        <div className="flex items-end justify-between sm:pr-6 md:pr-14">
          <h4 className="text-3xl font-semibold text-white/80 md:text-4xl">
            {called}
          </h4>
          <div className="flex gap-2">
            <Link
              href={live}
              target="_blank"
              style={{ color: "gray", fontSize: "25px", fontWeight: "400" }}
              className="rounded-md hover:bg-white/10"
            >
              🔗
            </Link>

            <Link href={link} target="_blank">
              <Image
                alt="Github Logo"
                src="/github.svg"
                width={50}
                height={50}
                className="h-9 hover:scale-[1.05]"
              />
            </Link>
          </div>
        </div>
        <div
          className={cn(
            "flex gap-2 pt-4 text-sm text-white/40 max-sm:w-full max-sm:justify-start sm:text-base",
          )}
        >
          <h6
            className={cn(
              "rounded-2xl border-2 border-white/60 px-2 py-1 md:px-4 md:py-[2px]",
            )}
          >
            {tool1}
          </h6>
          <h6
            className={cn(
              "rounded-2xl border-2 border-white/60 px-2 py-1 md:px-4 md:py-[2px]",
            )}
          >
            {tool2}
          </h6>
          <h6
            className={cn(
              "px- rounded-2xl border-2 border-white/60 px-2 py-1 md:px-4 md:py-[2px]",
            )}
          >
            {tool3}
          </h6>
        </div>
      </div>
    </Bounded>
  );
}

export default SmallScroll;
