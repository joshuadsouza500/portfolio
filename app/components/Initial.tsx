"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { AnimatePresence } from "framer-motion";

export default function Initial() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1600);
  }, []);

  return (
    //Using the wait makes the exit animation happen before the element is loaded///
    <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
  );
}
