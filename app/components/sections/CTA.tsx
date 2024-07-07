"use client";
import React, { useState } from "react";
import Bounded from "../Bounded";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../extra/ContactForm";
import TextRevealByWord from "../magicui/text-reveal";

function CTA() {
  return (
    <div
      id="CTA"
      className="relative mx-4 mb-10 grid h-full bg-backgroundw py-20 sm:mx-6 md:grid-cols-2 lg:mx-auto lg:max-w-6xl"
    >
      <div className="pb-12 md:pb-2 md:pt-4">
        <div className="mx-auto pb-6 md:pb-2">
          <TextRevealByWord
            text="Get In Touch"
            Colour="text-black/90"
            className="-mb-6 max-sm:-mb-20 max-sm:pl-2"
          />
          <p className="hidden w-[85%] pl-4 text-left text-base text-black/70">
            Fill out the form below and let&apos;s discuss how I can help bring
            your vision to life
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 py-5 md:items-start lg:ml-4">
          <div className="flex w-[85%] cursor-pointer rounded-md bg-white/90 px-4 py-8 shadow-xl hover:scale-[1.01] md:w-[75%] lg:w-[70%]">
            <div className="">
              <Image
                src="/gmail.png"
                alt="contact-image"
                width={28}
                height={28}
                className=""
              />
            </div>

            <Link target="_blank" href={`https://www.$.com/`}>
              <div className="pl-3 text-black/80">
                <h6 className="text-lg">Email </h6>
                <h6 className="text-black/70">Joshuads@gmail.com</h6>
              </div>
            </Link>
          </div>
          <div className="flex w-[85%] cursor-pointer rounded-md bg-white/90 px-4 py-8 shadow-xl hover:scale-[1.01] md:w-[75%] lg:w-[70%]">
            <div className="">
              <Image
                src="/whatsapp.png"
                alt="contact-image"
                width={28}
                height={28}
                className=""
              />
            </div>

            <Link target="_blank" href={`https://www.$.com/`}>
              <div className="pl-3">
                <h6 className="text-lg">Whatsapp</h6>
                <h6 className="text-black/70">+973 36158093</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default CTA;
