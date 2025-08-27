import WorksTitle from "../ui/WorksTitle";
import {
  Homespace,
  Restaurant,
  Elevate,
  NextClothing,
  Travelo,
} from "../ui/WorksCard";
import TextRevealByWord from "../magicui/text-reveal";
import Bounded from "../Bounded";
import SmallScroll from "../ui/SmallScroll";
import { Motionh2 } from "../ui/Motion";
import AnimatedText, { SlideP } from "../ui/MotionText";

const features = [
  {
    id: "Property Finder",
    title: "Project 01",
    type: "Property Finder",
    name: "Homespace",
    live: "https://homespace-bh.onrender.com",
    link: "https://github.com/joshuadsouza500/Homespace",
    cover: "/Image8.jpeg",
    vid: "/Videos/Homespace_demo.mp4",
    tool1: "MongoDB",
    tool2: "Expressjs",
    tool3: "Reactjs",
    tool4: "Nodejs",
    card: Homespace,
  },
  {
    id: "E-commerce Website",
    title: "Project 02",
    type: "E-commerce",
    name: "Next Clothing",
    live: "https://nextclothing.vercel.app/",
    link: "https://github.com/joshuadsouza500/e-commerce",
    cover: "/interior-min.jpg",
    vid: "/Videos/NextClothing.mp4",
    tool1: "MongoDB",
    tool2: "Expressjs",
    tool3: "Reactjs",
    tool4: "Nodejs",
    card: NextClothing,
  },

  {
    id: "Travel",
    title: "Project 03",
    type: "Travel & Tourism",
    name: "Travelo",
    live: "https://travelo-bh.vercel.app/",
    link: "https://github.com/joshuadsouza500/travelo",
    cover: "/Image6.jpeg",
    vid: "/Videos/Travelo.mp4",
    tool1: "Nextjs",
    tool2: "TailwindCSS",
    tool3: "Motion",
    card: Travelo,
  },
  {
    id: "Marketing Agency",
    title: "Project 04",
    type: "Marketing Agency",
    name: "Elevate-app",
    live: "https://elevate-app-bh.vercel.app/",
    link: "https://github.com/joshuadsouza500/Elevate-app",
    cover: "/Image3.jpg",
    vid: "/Videos/Elevate2.mp4",
    tool1: "Reactjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",
    card: Elevate,
  },
  {
    id: "Restaurant",
    title: "Project 05",
    type: "Restaurant Website",
    name: "Little Lemon Restaurant",
    live: "https://little-lemonbh.vercel.app/",
    link: "https://github.com/joshuadsouza500/little-lemon",
    cover: "/Image8.jpeg",
    vid: "/Videos/Littlelemon.mp4",
    tool1: "Reactjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",
    card: Restaurant,
  },
];

const WorksStickyScroll = () => {
  return (
    <section
      id="Works"
      aria-label="Recent projects"
      className="relative bg-backgroundb px-1 pb-6 xl:pb-10"
    >
      <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
      <Bounded className="px-2 py-8 md:mb-8 md:py-4 lg:py-8 xl:py-14 2xl:mb-0">
        <div className="grid h-fit w-full grid-cols-1 gap-2 lg:gap-6 xl:w-[90%]">
          <span className="inline-block overflow-hidden">
            <Motionh2
              style={{ lineHeight: "1.08" }}
              className="text-[clamp(3rem,3vw+2rem,4.5rem)] font-bold tracking-tight text-backgroundw/80 2xl:text-8xl"
              initial={{ y: "100%", opacity: 0.4 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              Selected <br className="sm:hidden" />
              Works
            </Motionh2>
          </span>
          <AnimatedText
            className="mt-2 w-[65%] place-self-end text-balance text-xs font-medium leading-3 text-backgroundw/70 sm:mt-3 sm:w-[50%] sm:text-sm sm:leading-none md:ml-[30%] md:place-self-center lg:ml-[35%] lg:text-lg lg:leading-tight 2xl:text-xl 2xl:leading-tight"
            text={
              "Here are some of my featured projects that showcase my skill and expertise in crafting user-friendly websites."
            }
            Y={`70%`}
            delay={0}
            STAGGER={0.01}
          />
        </div>
      </Bounded>

      <div className="relative mx-auto hidden w-full max-w-6xl items-start gap-1 lg:flex 2xl:max-w-8xl">
        <div className="w-10/12 py-[50vh]">
          <ul className="flex flex-col gap-80 xl:gap-96">
            {features.map((feature) => (
              <li className="-mb-2" key={feature.id}>
                <WorksTitle
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
          <div className="relative aspect-square h-[600px] w-full rounded-2xl bg-slate-200 2xl:h-[650px]">
            {features.map((feature) => (
              <feature.card
                id={feature.id}
                key={feature.id}
                live={feature.live}
              />
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

export default WorksStickyScroll;
