import React from "react";
import Link from "next/link";
import { TextFlip } from "../magicui/TextFlip";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const socialLinks = [
    { href: "https://x.com/battoasty", label: "Twitter" },
    {
      href: "https://bh.linkedin.com/in/joshua-dsouza-92968735b",
      label: "LinkedIn",
    },
    { href: "https://github.com/joshuadsouza500/", label: "GitHub" },
    { href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer
      className="mx-auto w-full border-t border-black/10 bg-backgroundw max-md:pb-1"
      aria-label="footer"
      role="contentinfo"
    >
      <div className="mx-auto flex items-center justify-between px-4 pb-2 pt-2 lg:max-w-[clamp(62rem,calc(58.180rem+29.09vw),80rem)] xl:px-2 2xl:max-w-8xl">
        <div className="w-full items-center justify-between md:flex">
          {/* Social Links mobile */}
          <ul className="flex flex-row items-center justify-center gap-1 py-2 text-xs font-semibold text-black md:hidden">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} target="_blank" aria-label={link.label}>
                  {link.label} •
                </Link>
              </li>
            ))}
          </ul>

          <ul className="hidden flex-row gap-2 py-2 text-sm text-black/100 md:flex lg:gap-4 lg:text-lg">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} target="_blank" aria-label={link.label}>
                  <TextFlip className="font-semibold max-md:text-xs">
                    {link.label}
                  </TextFlip>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer Name */}
          <h6
            className="hidden font-semibold tracking-wide text-backgroundb/95 md:block"
            aria-label={`JoshuaDs © ${currentYear}`}
          >
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
