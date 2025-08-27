import React from "react";
import Link from "next/link";

import { TextFlip } from "../magicui/TextFlip";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      className="pt-` mx-auto border-t border-black/10 bg-backgroundw max-md:pb-1"
      aria-label="footer"
    >
      <div className="mx-auto flex items-center justify-between px-4 pb-2 pt-2 lg:pb-1 xl:max-w-6xl xl:px-2 2xl:max-w-8xl">
        <div className="w-full items-center justify-between md:flex">
          {/**Mobile footer */}
          <ul
            tabIndex={0}
            className="flex flex-row items-center justify-center gap-1 py-2 text-xs font-semibold text-black md:hidden"
          >
            <li>
              <Link href="https://x.com/battoasty" target="_blank">
                Twitter •
              </Link>
            </li>
            <li>
              <Link
                href="https://bh.linkedin.com/in/joshua-dsouza-92968735b"
                target="_blank"
              >
                Linkedin •
              </Link>
            </li>
            <li>
              <Link href="https://github.com/joshuadsouza500/" target="_blank">
                Github •
              </Link>
            </li>
            <li>
              <Link href={`https://instagram.com`} target="_blank">
                Instagram
              </Link>
            </li>
          </ul>
          {/**Md: footer */}
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
              <Link
                href="https://bh.linkedin.com/in/joshua-dsouza-92968735b"
                target="_blank"
              >
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
              <Link href={`https://instagram.com`} target="_blank">
                <TextFlip className="font-semibold max-md:text-xs">
                  Instagram
                </TextFlip>
              </Link>
            </li>
          </ul>

          <h6 className="hidden font-semibold tracking-wide text-backgroundb/95 md:block">
            JoshuaDs
            <span className="text-xs" style={{ verticalAlign: "super" }}>
              &copy;
            </span>
            {currentYear}
          </h6>
        </div>
      </div>
    </footer>
  );
};
