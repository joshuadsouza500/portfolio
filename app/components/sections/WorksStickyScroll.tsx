import WorksTitle from "../ui/WorksTitle";
import { Photography, Restaurant, Aurora, Elevate } from "../ui/WorksCard";
import TextRevealByWord from "../magicui/text-reveal";
import Bounded from "../Bounded";
import SmallScroll from "../ui/SmallScroll";

const features = [
  {
    id: "Portfolio",
    title: "Project 01",
    type: "Photography Portfolio",
    name: "John Doe Photogrpahy",
    live: "https://photographybh.vercel.app/",
    link: "https://github.com/joshuadsouza500/Photography",
    cover: "/Image8.jpeg",
    vid: "/Photography.mp4",
    tool1: "Nextjs",
    tool2: "Cotentful",
    tool3: "Framer Motion",
    card: Photography,
  },
  {
    id: "Restaurant",
    title: "Project 02",
    type: "Restaurant Website",
    name: "Little Lemon Restaurant",
    live: "https://little-lemonbh.vercel.app/",
    link: "https://github.com/joshuadsouza500/little-lemon",
    cover: "/Image5.webp",
    vid: "/Littlelemon.mp4",
    tool1: "Reactjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",
    card: Restaurant,
  },
  {
    id: "Chatbot",
    title: "Project 03",
    type: "AI Chatbot",
    name: "Aurora ai",
    live: "https://aurora-ai-b.vercel.app/",
    link: "https://github.com/joshuadsouza500/aurora-ai",
    cover: "/Image6.jpeg",
    vid: "/Aurora.mp4",
    tool1: "Nextjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",
    card: Aurora,
  },
  {
    id: "Marketing Agency",
    title: "Project 04",
    type: "Marketing Agency",
    name: "Elevate-app",
    live: "https://elevate-app-bh.vercel.app/",
    link: "https://github.com/joshuadsouza500/Elevate-app",
    cover: "/Image3.jpg",
    vid: "/Elevate.mp4",
    tool1: "Reactjs",
    tool2: "TailwindCSS",
    tool3: "Framer Motion",
    card: Elevate,
  },
];

const WorksStickyScroll = () => {
  return (
    <section id="Works" className="relative bg-backgroundb px-1">
      <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
      <Bounded className="py-8 md:py-8">
        <div className="grid h-fit gap-2 lg:gap-8">
          <h2
            style={{ lineHeight: "1.08" }}
            className="text-5xl font-bold tracking-tight text-backgroundw/80 md:text-6xl lg:text-7xl 2xl:text-8xl"
          >
            Selected <br className="xl:hidden" />
            Works/
          </h2>
          <p className="col-span-2 mt-2 w-[75%] place-self-end text-xs font-medium text-[#f7f7f7]/70 sm:w-[60%] sm:text-sm md:mt-10 md:pb-6 lg:ml-2 lg:w-[70%] lg:text-lg xl:w-[60%] xl:text-xl 2xl:w-[50%]">
            Here are few of my featured project0s that showcase my skill and
            expertise difference in reaching your objectives and setting your
          </p>
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

export default WorksStickyScroll;
