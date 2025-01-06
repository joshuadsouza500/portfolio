"use client";

import { cn } from "@/app/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { useFeatureStore } from "../extra/store";
import Link from "next/link";
import useMouse from "@react-hook/mouse-position";
import { MotionDiv } from "./Motion";

//Now we pass the live url to the featurecard comp and then use it in the link

type FeatureProps = {
  color: string;
  children: React.ReactNode;
  className?: string;
} & CardProps;

type CardProps = {
  id: string;
  live?: string | any;
};

const FeatureCard = ({
  color,
  children,
  id,
  className,
  live,
}: FeatureProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  const box = useRef<HTMLDivElement>(null);
  const mouse = useMouse(box, { enterDelay: 50, leaveDelay: 50 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const handleMouseEnter = () => setCursorVariant("Variant");
  const handleMouseLeave = () => setCursorVariant("default");
  const [postX, setPostX] = useState(0);
  const [postY, setPostY] = useState(0);

  const variants = {
    default: {
      opacity: 0,
      backgroundColor: "black",
      transition: { duration: 0.3 },
      height: "0px",
      width: "0px",
      display: "none",
    },
    Variant: {
      backgroundColor: "#00806E", //Green:#00806E  or //F8F8FF
      opacity: 1,
      transition: { type: "spring", mass: 0.6, duration: 0.3 },
      height: "100px",
      width: "100px",
      display: "flex",
    },
  };

  useEffect(() => {
    if (mouse && mouse.x !== null && mouse.y !== null) {
      setPostX(mouse.x);
      setPostY(mouse.y);
    }
  }, [mouse]);

  return (
    <div
      ref={box}
      className={cn(
        "relative inset-0 h-full w-full rounded-lg transition-opacity",
        color,
        className,
        inViewFeature === id ? "" : "hidden",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {live && (
        <Link href={live} target="_blank" passHref>
          <MotionDiv
            className="absolute z-20 flex cursor-pointer items-center justify-center rounded-full shadow-xl"
            animate={cursorVariant}
            variants={variants}
            initial="default"
            style={{
              position: "absolute",
              top: postY,
              left: postX,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-center text-lg font-medium text-backgroundw">
              View
            </span>
          </MotionDiv>
        </Link>
      )}
    </div>
  );
};

export const Photography = ({ id, live }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      live={live}
      className="relative flex cursor-pointer items-center justify-center bg-[url('/Image8.jpeg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-5" />
      <Link href={live} target="_blank" className="h-[70%] w-[90%] rounded-md">
        <video
          width="200"
          height="600"
          preload="none"
          autoPlay
          muted
          loop
          style={{ objectFit: "fill" }}
          className="h-full w-full rounded-md shadow-2xl shadow-black"
        >
          <source src="/Photography.mp4" type="video/mp4" />
        </video>
      </Link>
    </FeatureCard>
  );
};

export const Restaurant = ({ id, live }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      live={live}
      className="flex cursor-pointer items-center justify-center bg-[url('/Image5.webp')] bg-cover bg-no-repeat"
    >
      <Link href={live} target="_blank" className="h-[70%] w-[90%] rounded-md">
        <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-20" />
        <video
          width="200"
          height="600"
          preload="none"
          autoPlay
          muted
          loop
          style={{ objectFit: "fill" }}
          className="h-full w-full rounded-md shadow-2xl shadow-black"
        >
          <source src="/Littlelemon.mp4" type="video/mp4" />
        </video>
      </Link>
    </FeatureCard>
  );
};
export const Aurora = ({ id, live }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      live={live}
      className="flex cursor-pointer items-center justify-center bg-[url('/Image6.jpeg')] bg-cover bg-no-repeat"
    >
      <Link href={live} target="_blank" className="h-[70%] w-[90%] rounded-md">
        <video
          width="200"
          height="600"
          preload="none"
          autoPlay
          muted
          loop
          style={{ objectFit: "fill" }}
          className="h-full w-full rounded-md shadow-2xl shadow-black"
        >
          <source src="/Aurora.mp4" type="video/mp4" />
        </video>
      </Link>
    </FeatureCard>
  );
};

export const Elevate = ({ id, live }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      live={live}
      className="flex cursor-pointer items-center justify-center bg-[url('/Image3.jpg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-10" />
      <Link href={live} target="_blank" className="h-[70%] w-[90%] rounded-md">
        <video
          width="400"
          height="600"
          preload="none"
          autoPlay
          muted
          loop
          style={{ objectFit: "fill" }}
          className="h-full w-full rounded-md shadow-2xl shadow-black"
        >
          <source src="/Elevate2.mp4" type="video/mp4" />
        </video>
      </Link>
    </FeatureCard>
  );
};

export const NextClothing = ({ id, live }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      live={live}
      className="flex cursor-pointer items-center justify-center bg-[url('/Image3.jpg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-10" />
      <Link href={live} target="_blank" className="h-[70%] w-[90%] rounded-md">
        <video
          width="400"
          height="600"
          preload="none"
          autoPlay
          muted
          loop
          style={{ objectFit: "fill" }}
          className="h-full w-full rounded-md shadow-2xl shadow-black"
        >
          <source src="/NextClothing.mp4" type="video/mp4" />
        </video>
      </Link>
    </FeatureCard>
  );
};
