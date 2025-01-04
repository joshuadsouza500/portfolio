"use client";
import Link from "next/link";

import React, { useState } from "react";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import ButtonLink from "./ButtonLink";
import { TextFlip } from "../magicui/TextFlip";
import { MotionDiv, MotionNav, MotionUl } from "./Motion";
import { usePathname } from "next/navigation";

const menu = {
  open: {
    width: "250px",
    height: "340px",
    top: "2px",
    right: "2px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "90px",
    height: "35px",
    top: "2px",
    right: "2px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function NavBar() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [text, setText] = useState<string>("Menu");

  const { scrollY } = useScroll();
  const pathName = usePathname();
  // Helper function to check if the route matches the current page

  const isCurrentPage = (path: string) => pathName === path;

  //The motion value event shows when anything changes so when the scroll position changes it is notified.//
  {
    /**
    useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: number = scrollY.getPrevious() ?? 0;

    // As we scroll down the number increases//
    if (latest > previous && active == false) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }); */
  }

  function handleButton() {
    setActive(!active);
    setText(text === "Menu" ? "Close" : "Menu");
  }

  return (
    <>
      {/*Big screen nav*/}

      <MotionNav
        className="inset-x-0 top-0 z-20 mx-auto px-2 py-2 text-white backdrop-blur-sm max-md:sticky 2xl:py-2"
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 py-2 max-md:pb-4 md:px-1 xl:max-w-6xl 2xl:max-w-[1600px]">
          <Link
            href={"/"}
            className="flex flex-col justify-center pl-2 text-center"
          >
            <h6 className="text-base font-bold text-black max-md:-tracking-tight">
              Joshua Dsouza
              <span
                className="text-xs md:text-xs"
                style={{ verticalAlign: "super" }}
              >
                &copy;
              </span>
            </h6>
          </Link>

          {/**Based on active state the animate prop loads */}

          <MotionDiv
            className="absolute z-20 cursor-pointer rounded-3xl bg-backgroundb text-center md:hidden"
            variants={menu}
            animate={active ? "open" : "closed"}
          >
            <ButtonLink
              text={text}
              active={active}
              handleButton={handleButton}
            />
            {active && (
              <>
                <MotionNav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeIn",
                  }}
                  className="pt-16 text-white sm:pt-20"
                >
                  <MotionUl className="ml-4 space-y-2 text-left text-3xl font-medium">
                    <li className="">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="">
                      <Link href={"/about"}> About</Link>
                    </li>
                    <li className="">
                      <Link href={"#Services"}> Services</Link>
                    </li>
                    <li className="">
                      <Link href={"#CTA"}> Contact</Link>
                    </li>
                  </MotionUl>
                </MotionNav>
                <MotionNav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.4,
                  }}
                  className="mx-1 pt-6 text-white/80"
                >
                  <ul className="ml-4 grid cursor-pointer grid-cols-2 gap-1 text-left">
                    <Link
                      className="hover:scale-[.98]"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <TextFlip className="font-normal">Instagram</TextFlip>
                    </Link>
                    <Link
                      className="hover:scale-[.98]"
                      target="_blank"
                      href="https://www.Linkedin.com/"
                    >
                      <TextFlip className="font-normal">Linkedin</TextFlip>
                    </Link>
                    <Link
                      className="hover:scale-[.98]"
                      target="_blank"
                      href="https://github.com/joshuadsouza500/"
                    >
                      <TextFlip className="font-normal">Github</TextFlip>
                    </Link>
                    <Link
                      className="hover:scale-[.98]"
                      target="_blank"
                      href="https://x.com/battoasty"
                    >
                      <TextFlip className="font-normal">Twitter</TextFlip>
                    </Link>
                  </ul>
                </MotionNav>
              </>
            )}
          </MotionDiv>

          {/**Large screen home, about and contact */}
          <ul className="hidden items-center gap-x-6 text-left text-lg text-backgroundb md:flex">
            <li
              className={`${isCurrentPage("/") ? "border-b-2 border-black" : ""}`}
            >
              <Link href={"/"} className="">
                <TextFlip className="font-semibold leading-[0.85]">
                  Home
                </TextFlip>
              </Link>
            </li>
            <li
              className={`${
                isCurrentPage("/about") ? "border-b-2 border-black" : ""
              }`}
            >
              <Link href={"/about"}>
                {" "}
                <TextFlip className="font-semibold leading-[0.85]">
                  About
                </TextFlip>
              </Link>
            </li>

            <li className="rounded-3xl bg-backgroundb px-4 py-[10px] font-semibold leading-none text-backgroundw hover:scale-[.97] hover:shadow-lg 2xl:px-5 2xl:py-3">
              <Link href={"/#CTA"}>Contact</Link>
            </li>
          </ul>
        </div>
      </MotionNav>
    </>
  );
}

{
  /**
    <>
   

      <MotionNav
        className="sticky inset-x-0 top-0 z-20 mx-auto flex items-center justify-between gap-4 border-b border-black bg-[#e2e8f00a] px-2 py-3 text-black backdrop-blur-sm md:flex-row md:px-20 2xl:px-36"
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
          className="flex flex-col justify-center pl-2 text-center"
        >
          <div className="h-10 w-8 bg-[url('/Logo.svg')] bg-no-repeat" />
        </Link>



        <MotionDiv
          className="fixed right-1 top-2 z-20 cursor-pointer rounded-3xl bg-black text-center"
          variants={menu}
          animate={active ? "open" : "closed"}
        >
          <ButtonLink text={text} active={active} handleButton={handleButton} />
          {active && (
            <>
              <MotionNav
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
                  <li className="">
                    <Link href={"/"}>
                      <TextFlip className="font-semibold leading-[0.95]">
                        Home
                      </TextFlip>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={"#Services"}>
                      {" "}
                      <TextFlip className="font-semibold leading-[0.95]">
                        Services
                      </TextFlip>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={"#Works"}>
                      {" "}
                      <TextFlip className="font-semibold leading-[0.95]">
                        Works
                      </TextFlip>
                    </Link>
                  </li>
                  <li className="">
                    <Link href={"#CTA"}>
                      {" "}
                      <TextFlip className="font-semibold leading-[0.95]">
                        Contact
                      </TextFlip>
                    </Link>
                  </li>
                </motion.ul>
              </MotionNav>
              <MotionNav
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
                    className="hover:scale-[.98]"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <TextFlip className="font-normal">Instagram</TextFlip>
                  </Link>
                  <Link
                    className="hover:scale-[.98]"
                    target="_blank"
                    href="https://www.Linkedin.com/"
                  >
                    <TextFlip className="font-normal">Linkedin</TextFlip>
                  </Link>
                  <Link
                    className="hover:scale-[.98]"
                    target="_blank"
                    href="https://github.com/joshuadsouza500/"
                  >
                    <TextFlip className="-ml-6 font-normal">Github</TextFlip>
                  </Link>
                  <Link
                    className="hover:scale-[.98]"
                    target="_blank"
                    href="https://x.com/jdscodes04"
                  >
                    <TextFlip className="font-normal">Twitter</TextFlip>
                  </Link>
                </ul>
              </MotionNav>
            </>
          )}
        </MotionDiv>

      
      </MotionNav>
    </>
  */
}
