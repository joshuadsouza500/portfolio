import React from "react";
import Link from "next/link";

import { TextFlip } from "../magicui/TextFlip";

export const Footer = () => {
  return (
    <footer
      className="pt-` mx-auto border-t border-black/10 bg-backgroundw max-md:pb-1"
      aria-label="footer"
    >
      <div className="mx-auto flex items-center justify-between px-4 pb-1 pt-2 lg:pb-1 xl:max-w-6xl xl:px-2 2xl:max-w-8xl">
        <div className="w-full items-center justify-between md:flex">
          {/**Mobile footer */}
          <ul
            tabIndex={0}
            className="flex flex-row gap-1 py-2 text-xs font-medium text-black/100 md:hidden"
          >
            <li>
              <Link href="https://x.com/jdscodes04" target="_blank">
                Twitter •
              </Link>
            </li>
            <li>
              <Link href="https://www.Linkedin.com/" target="_blank">
                Linkedin •
              </Link>
            </li>
            <li>
              <Link href="https://github.com/joshuadsouza500/" target="_blank">
                Github •
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/97336158093`} target="_blank">
                Whatsapp
              </Link>
            </li>
          </ul>
          {/**Md: foote */}
          <ul
            tabIndex={0}
            className="hidden flex-row gap-2 py-2 text-sm text-black/100 md:flex lg:gap-4 lg:text-lg"
          >
            <li>
              <Link href="https://x.com/jdscodes04" target="_blank">
                <TextFlip className="font-semibold max-md:text-xs">
                  Twitter
                </TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://www.Linkedin.com/" target="_blank">
                <TextFlip className="font-semibold max-md:text-xs">
                  Linkedin
                </TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/joshuadsouza500/" target="_blank">
                <TextFlip className="font-semibold max-md:text-xs">
                  Github
                </TextFlip>
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/97336158093`} target="_blank">
                <TextFlip className="font-semibold max-md:text-xs">
                  Whatsapp
                </TextFlip>
              </Link>
            </li>
          </ul>

          <h6 className="text-[10px] font-medium tracking-wide text-backgroundb/95 md:hidden">
            &copy; JoshuaDs 2024
          </h6>
          <h6 className="hidden text-xs font-semibold tracking-wide text-backgroundb/95 md:block 2xl:text-sm">
            JoshuaDs
            <span className="text-xs" style={{ verticalAlign: "super" }}>
              &copy;
            </span>
            2024
          </h6>
        </div>
      </div>
    </footer>
  );
};

{
  /** <div className="hidden">
          <ul
            tabIndex={0}
            className="flex flex-col gap-1 py-2 text-black/80 md:flex-row md:gap-2 lg:gap-4 lg:text-xl"
          >
            <li>
              <Link href="/">
                {" "}
                <TextFlip className="font-medium">Home</TextFlip>
              </Link>
            </li>
            <li>
              <Link href="/about">
                {" "}
                <TextFlip className="font-medium">Services</TextFlip>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                {" "}
                <TextFlip className="font-medium">Works</TextFlip>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <TextFlip className="font-medium">Contact</TextFlip>
              </Link>
            </li>
          </ul>
        </div> */
}
