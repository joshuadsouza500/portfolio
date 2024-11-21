"use client";
import React, { useContext, useEffect, useState } from "react";
import Loader from "./ui/Loader";
import { AnimatePresence } from "framer-motion";
import { useLoader } from "../utils/LoaderContext";

export default function Initial() {
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1600); // Loader duration

    return () => clearTimeout(timer);
  }, [setIsLoading]);
  return (
    //Using the wait makes the exit animation happen before the element is loaded///
    <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
  );
}
