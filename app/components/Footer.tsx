import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TextFlip } from "./magicui/TextFlip";

export const Footer = () => {
  return (
    <footer
      className="border-t border-black/40 bg-backgroundw lg:pt-2"
      aria-label="footer"
    >
      <div className="flex items-center justify-between px-6 pb-1 pt-4 md:px-4 lg:px-20">
        <div>
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
        </div>
        <div className="grid cursor-pointer grid-flow-col gap-4">
          <ul
            tabIndex={0}
            className="flex flex-col gap-1 py-2 text-black/80 md:flex-row md:gap-2 lg:gap-4 lg:text-xl"
          >
            <li>
              <Link href="https://wwwinstagramcom/ufc/" target="_blank">
                <TextFlip className="font-medium">Instagram</TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://wwwinstagramcom/ufc/" target="_blank">
                <TextFlip className="font-medium">Linkedin</TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://wwwinstagramcom/ufc/" target="_blank">
                <TextFlip className="font-medium">Github</TextFlip>
              </Link>
            </li>
            <li>
              <Link href="https://wwwinstagramcom/ufc/" target="_blank">
                <TextFlip className="font-medium">Whatsapp</TextFlip>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="white opacity-50" />
      <div className="flex items-center justify-between px-2 py-4 text-black text-opacity-80 md:px-8">
        <h6 className="text-xs"> © 2024 JoshuaDS </h6>
      </div>
    </footer>
  );
};
