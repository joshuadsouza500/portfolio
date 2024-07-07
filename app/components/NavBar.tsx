"use client";
import Link from "next/link";
import Image from "next/image";
import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import {
  easeInOut,
  motion,
  MotionValue,
  motionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import ButtonLink from "./ButtonLink";
import { TextFlip } from "./magicui/TextFlip";

const menu = {
  open: {
    width: "270px",
    height: "380px",
    top: "15px",
    right: "12px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "15px",
    right: "12px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

//Create mobile menu//

export default function NavBar() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [text, setText] = useState<string>("Menu");

  const { scrollY } = useScroll();

  //The motion value event shows when anything changes so when the scroll position changes it is notified.//
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: number = scrollY.getPrevious() ?? 0;

    // As we scroll down the number increases//
    if (latest > previous && active == false) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  function handleButton() {
    setActive(!active);
    setText(text === "Menu" ? "Close" : "Menu");
  }

  return (
    <>
      {/*Big screen nav*/}

      <motion.nav
        className="sticky inset-x-0 top-0 z-20 mx-auto flex items-center justify-between gap-4 border-b border-green bg-[#e2e8f00a] px-2 py-3 text-green backdrop-blur-sm md:flex-row md:px-20 2xl:px-36"
        variants={{
          hidden: {
            y: -100,
          },
          visible: {
            y: 0,
          },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <Link
          href={"/"}
          className="flex flex-col justify-center py-2 text-center"
        >
          <h4 className="pl-2 text-xl font-semibold sm:text-2xl">JDs</h4>
        </Link>

        <motion.div
          className="fixed right-1 top-2 z-20 cursor-pointer rounded-3xl bg-green text-center"
          variants={menu}
          animate={active ? "open" : "closed"}
        >
          <ButtonLink text={text} active={active} handleButton={handleButton} />
          {active && (
            <>
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: "easeIn",
                }}
                className="left-2 pt-14 text-white sm:pt-20"
              >
                <motion.ul className="text-left text-4xl font-medium">
                  <li className="py-2 pl-8">
                    <Link href={"/"}>
                      <TextFlip className="font-bold leading-[0.95]">
                        Home
                      </TextFlip>
                    </Link>
                  </li>
                  <li className="py-2 pl-8">
                    <Link href={"#Services"}>
                      {" "}
                      <TextFlip className="font-bold leading-[0.95]">
                        Services
                      </TextFlip>
                    </Link>
                  </li>
                  <li className="py-2 pl-8">
                    <Link href={"#Works"}>
                      {" "}
                      <TextFlip className="font-bold leading-[0.95]">
                        Works
                      </TextFlip>
                    </Link>
                  </li>
                  <li className="py-2 pl-8">
                    <Link href={"#CTA"}>
                      {" "}
                      <TextFlip className="font-bold leading-[0.95]">
                        Contact
                      </TextFlip>
                    </Link>
                  </li>
                </motion.ul>
              </motion.nav>
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.4,
                }}
                className="mx-2 pt-8 text-white/80"
              >
                <ul className="grid cursor-pointer grid-cols-2 gap-1">
                  <Link
                    className="hover:scale-[1.02]"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <TextFlip className="font-normal">Instagram</TextFlip>
                  </Link>
                  <Link
                    className="hover:scale-[1.02]"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <TextFlip className="font-normal">Linkedin</TextFlip>
                  </Link>
                  <Link
                    className="hover:scale-[1.02]"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    <TextFlip className="-ml-6 font-normal">Github</TextFlip>
                  </Link>
                  <Link
                    className="hover:scale-[1.02]"
                    target="_blank"
                    href="https://www.youtube.com/"
                  >
                    <TextFlip className="font-normal">Twitter</TextFlip>
                  </Link>
                </ul>
              </motion.nav>
            </>
          )}
        </motion.div>

        {/**   
              
                */}
      </motion.nav>
    </>
  );
}
