"use client";

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body className="bg-backgroundw font-poppins">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
