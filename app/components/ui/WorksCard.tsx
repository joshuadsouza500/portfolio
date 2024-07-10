"use client";

import { cn } from "@/app/utils/cn";
import React from "react";
import { useFeatureStore } from "../extra/store";

type FeatureProps = {
  color: string;
  children: React.ReactNode;
  className?: string;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ color, children, id, className }: FeatureProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-xl transition-opacity",
        color,
        className,
        inViewFeature === id ? "" : "hidden",
      )}
    >
      {" "}
      {children}
    </div>
  );
};

export const Photography = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      className="relative flex cursor-pointer items-center justify-center bg-[url('/Image8.jpeg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-5" />
      <video
        width="200"
        height="600"
        preload="none"
        autoPlay
        muted
        loop
        style={{ objectFit: "fill" }}
        className="h-[70%] w-[90%] rounded-lg shadow-2xl shadow-black"
      >
        <source src="/Photography.mp4" type="video/mp4" />
      </video>
    </FeatureCard>
  );
};

export const Restaurant = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      className="flex cursor-pointer items-center justify-center bg-[url('/Image5.webp')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-20" />
      <video
        width="200"
        height="600"
        preload="none"
        autoPlay
        muted
        loop
        style={{ objectFit: "fill" }}
        className="h-[70%] w-[90%] rounded-lg shadow-2xl shadow-black"
      >
        <source src="/Littlelemon.mp4" type="video/mp4" />
      </video>
    </FeatureCard>
  );
};
export const Aurora = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      className="flex cursor-pointer items-center justify-center bg-[url('/Image6.jpeg')] bg-cover bg-no-repeat"
    >
      <video
        width="200"
        height="600"
        preload="none"
        autoPlay
        muted
        loop
        style={{ objectFit: "fill" }}
        className="h-[70%] w-[90%] rounded-lg shadow-2xl shadow-black"
      >
        <source src="/Aurora.mp4" type="video/mp4" />
      </video>
    </FeatureCard>
  );
};

export const Elevate = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      color=""
      className="flex cursor-pointer items-center justify-center bg-[url('/Image3.jpg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 bg-[url('/noise-light.png')] opacity-10" />
      <video
        width="400"
        height="600"
        preload="none"
        autoPlay
        muted
        loop
        style={{ objectFit: "fill" }}
        className="h-[70%] w-[90%] rounded-lg shadow-2xl shadow-black"
      >
        <source src="/Elevate.mp4" type="video/mp4" />
      </video>
    </FeatureCard>
  );
};
