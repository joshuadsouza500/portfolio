"use client";

import FeatureTitle from "./FeatureTitle";
import { Colors, Happy, Music, Todo } from "./FeatureCard";
import TextRevealByWord from "../magicui/text-reveal";
import Bounded from "../Bounded";
import SmallScroll from "../SmallScroll";

const features = [
  {
    id: "Portfolio",
    title: "Project 1",
    type: "Photography Portfolio",
    name: "John Doe Photogrpahy",
    live: "https://photographybh.vercel.app/",
    link: "https://github.com/joshuadsouza500/Photography",
    cover: "/Image8.jpeg",
    vid: "/Photography.mp4",
    tool1: "Nextjs",
    tool2: "Cotentful",
    tool3: "Framer Motion",

    card: Todo,
  },
  {
    id: "Restaurant",
    title: "Project 2",
    type: "Restaurant Website",
    name: "Little Lemon Restaurant",
    live: "https://little-lemonbh.vercel.app/",
    link: "https://github.com/joshuadsouza500/little-lemon",
    cover: "/Image5.webp",
    vid: "/Littlelemon.mp4",
    tool1: "Reactjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",

    card: Colors,
  },
  {
    id: "Chatbot",
    title: "Project 3",
    type: "AI Chatbot",
    name: "Aurora ai",
    live: "https://aurora-ai-b.vercel.app/",
    link: "https://github.com/joshuadsouza500/aurora-ai",
    cover: "/Image6.jpeg",
    vid: "/Aurora.mp4",
    tool1: "Nextjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",

    card: Music,
  },
  {
    id: "Marketing Agency",
    title: "Project 4",
    type: "Marketing Agency",
    name: "Elevate-app",
    live: "https://elevate-app-bh.vercel.app/",
    link: "https://github.com/joshuadsouza500/Elevate-app",
    cover: "/Image3.jpg",
    vid: "/Elevate.mp4",
    tool1: "Reactjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",

    card: Happy,
  },
];

const StickyScroll = () => {
  return (
    <section className="relative bg-backgroundb px-4">
      <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
      <Bounded className="-mb-16 lg:-mb-20">
        <TextRevealByWord
          text="Selected Works"
          className="pr-10 sm:-ml-6 md:-ml-10"
          Colour="text-white/90"
        />
      </Bounded>
      <div className="relative mx-auto hidden w-full max-w-6xl items-start gap-1 lg:flex">
        <div className="w-10/12 py-[50vh]">
          <ul className="flex flex-col gap-80">
            {features.map((feature) => (
              <li className="-mb-2" key={feature.id}>
                <FeatureTitle
                  id={feature.id}
                  title={feature.title}
                  type={feature.type}
                  called={feature.name}
                  live={feature.live}
                  link={feature.link}
                  tool1={feature.tool1}
                  tool2={feature.tool2}
                  tool3={feature.tool3}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square h-[600px] w-full rounded-2xl bg-slate-200">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
      {features.map((feature) => (
        <ul key={feature.id}>
          <li className="lg:hidden">
            <SmallScroll
              id={feature.id}
              title={feature.title}
              type={feature.type}
              called={feature.name}
              live={feature.live}
              link={feature.link}
              cover={feature.cover}
              vid={feature.vid}
              tool1={feature.tool1}
              tool2={feature.tool2}
              tool3={feature.tool3}
            />
          </li>
        </ul>
      ))}
    </section>
  );
};

export default StickyScroll;
