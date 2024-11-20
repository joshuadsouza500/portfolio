import React from "react";
import Link from "next/link";

import { TextFlip } from "../magicui/TextFlip";

export const Footer = () => {
  return (
    <footer
      className="mx-auto border-t border-black/10 bg-backgroundw lg:pt-1"
      aria-label="footer"
    >
      <div className="mx-auto flex items-center justify-between px-4 pb-1 pt-2 md:px-6 lg:pb-1 xl:max-w-6xl 2xl:max-w-8xl">
        <div className="grid cursor-pointer grid-flow-col gap-4">
          <ul
            tabIndex={0}
            className="flex flex-row gap-2 py-2 text-sm text-black/100 lg:gap-4 lg:text-lg"
          >
            <li>
              <Link href="https://x.com/jdscodes04" target="_blank">
                <TextFlip className="font-medium max-md:text-xs">
                  Twitter
                </TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://www.Linkedin.com/" target="_blank">
                <TextFlip className="font-medium max-md:text-xs">
                  Linkedin
                </TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/joshuadsouza500/" target="_blank">
                <TextFlip className="font-medium max-md:text-xs">
                  Github
                </TextFlip>
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/97336158093`} target="_blank">
                <TextFlip className="font-medium max-md:text-xs">
                  Whatsapp
                </TextFlip>
              </Link>
            </li>
          </ul>
        </div>
        <h6 className="text-xs font-light tracking-wide text-black/80 md:text-sm">
          JoshuaDsouza
          <span
            className="text-xs md:text-xs"
            style={{ verticalAlign: "super" }}
          >
            &copy;
          </span>
          2024
        </h6>
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
