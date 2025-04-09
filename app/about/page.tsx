import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Bounded from "../components/Bounded";
import { MHeading } from "../components/ui/MotionText";
import {
  MotionB,
  MotionDiv,
  Motionh2,
  Motionh3,
  MotionP,
} from "../components/ui/Motion";

export default function About() {
  const imageVariants = {
    hidden: { opacity: 0, filter: "blur(2px)", y: 1 }, // Start small and transparent
    show: { opacity: 1, filter: "blur(0px)", y: 0 }, // Animate to full size and visible
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.6 } }, // Start slightly lower
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to visible and move up
  };

  const certificateVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const CitemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        // Delay between each child animation
      },
    }, // Animate to visible and its original position
  };

  return (
    <Bounded className="h-full bg-gradient-to-br from-white to-gray-50 px-4 max-md:py-6 md:py-6 lg:py-6">
      {/* About Me Section */}
      <section className="mb-16 2xl:mb-28 2xl:mt-8">
        <span className="inline-block overflow-hidden">
          <Motionh2
            initial={{ y: "100%", opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className={
              "pl-1 text-4xl font-bold tracking-tight md:text-5xl md:font-semibold lg:text-6xl xl:w-96 xl:pl-[6%] 2xl:text-6xl"
            }
          >
            About Me
          </Motionh2>
        </span>
        <MotionDiv
          className="mt-4 flex flex-col-reverse max-sm:gap-8 sm:grid sm:grid-cols-3 md:items-center lg:mt-8 lg:gap-6 2xl:pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <MotionDiv
            className="col-span-1 mx-auto h-full w-[80%] rounded-lg sm:w-full md:w-[80%] lg:w-[75%] 2xl:h-[95%] 2xl:w-[65%]"
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1, duration: 0.8, ease: "easeIn" }}
            variants={imageVariants}
          >
            <Image
              src="/Me2.jpg"
              width={300}
              height={400}
              alt="Profile photo"
              className="h-full w-full rounded-lg object-cover"
              priority
            />
          </MotionDiv>

          {/* Image for smaller screens */}

          <div className="col-span-2 w-[95%] space-y-4 text-balance font-medium tracking-wide max-md:mx-auto max-md:pb-2 max-md:leading-relaxed lg:w-[70%] xl:w-[80%] xl:text-lg 2xl:text-xl">
            <MotionP
              className="pb-1 text-backgroundb/70"
              variants={childVariants}
              transition={{ delay: 1, duration: 1 }}
            >
              Hello! {`I'm`} Joshua, a web developer based in Bahrain with a
              passion for crafting seamless and engaging user-friendly
              applications. With a solid foundation in front-end development and
              a keen eye for detail, I focus on creating websites that are not
              only visually appealing but also highly functional and designed to
              solve real-world problems.
            </MotionP>
            <MotionP
              className="hidden pb-[2px] text-backgroundb/70 md:flex"
              variants={childVariants}
            >
              I’m always eager to learn and expand my skill set, which is why{" "}
              {`I'm`} currently diving into back-end development to deepen my
              understanding of this area.
            </MotionP>
            <MotionB
              className="mt-4 flex items-center gap-2 rounded-3xl bg-gradient-to-br from-backgroundb to-zinc-800 px-4 py-2 text-backgroundw transition-colors hover:bg-backgroundb/90 hover:shadow-lg"
              variants={childVariants}
            >
              <Download size={20} />
              Resume
            </MotionB>
          </div>
        </MotionDiv>
      </section>

      {/* Courses & Certificates Section */}
      <section className="mb-10 w-full grid-cols-3 border-t border-black/10 pt-6 md:pt-10 lg:grid xl:mb-16">
        <span className="mb-4 inline-block overflow-hidden md:mb-6 lg:h-24 2xl:h-32">
          <Motionh2
            className="col-span-1 text-4xl font-bold tracking-tight md:text-5xl md:font-semibold xl:pl-[8%] 2xl:text-6xl"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
            }}
            viewport={{ once: true }}
          >
            Certificates <br className="hidden lg:block" /> & Courses
          </Motionh2>
        </span>

        <MotionDiv
          className="col-span-2 mx-2 space-y-4 2xl:w-[90%] 2xl:pt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <CertificateItem
            variants={CitemVariants}
            imageUrl={"/pdff/Meta.pdf"}
            number="(01)"
            title="Meta Front-end Developer"
          />
          <CertificateItem
            variants={CitemVariants}
            imageUrl={"/UIUX.pdf"}
            number="(02)"
            title="Principles of UX/UI Design"
          />
          <CertificateItem
            variants={CitemVariants}
            imageUrl={"/pdff/React.pdf"}
            number="(03)"
            title="Advanced React"
          />
          <CertificateItem
            variants={CitemVariants}
            imageUrl={"/pdff/MongoDB.pdf"}
            number="(04)"
            title="Introduction to MongoDB"
          />
        </MotionDiv>
      </section>
    </Bounded>
  );
}

function CertificateItem({
  number,
  title,
  variants,
  imageUrl,
}: {
  number: string;
  title: string;
  variants: any;
  imageUrl: string;
}) {
  return (
    <a
      href={imageUrl}
      target="_blank"
      rel="noopener noreferrer" // Recommended for security
      className="block" // Ensures the full area is clickable
    >
      <MotionDiv
        className="group mx-auto flex cursor-pointer items-center justify-between border-b border-gray-200 py-4 md:w-[80%] lg:w-full"
        variants={variants}
      >
        <div className="flex items-center">
          <span className="mr-3 text-sm text-gray-700">{number}</span>
          <span className="font-medium lg:text-lg 2xl:text-xl">{title}</span>
        </div>
        <button className="flex size-6 items-center justify-center rounded-full text-gray-700 ring-1 ring-gray-300 transition-colors duration-200 ease-in-out group-hover:bg-green group-hover:text-white md:size-8">
          <ArrowRight className="size-4 md:size-6" />
        </button>
      </MotionDiv>
    </a>
  );
}

{
  /**{
  /** <MotionDiv
            className="col-span-1 mx-auto h-[200px] w-[30%] rounded-lg bg-red-300 max-md:mr-10 md:h-full md:w-[80%] lg:w-[75%] 2xl:h-[95%] 2xl:w-[65%]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            variants={imageVariants}
          >
            <Image
              src="/me5.jpeg"
              width={300}
              height={400}
              alt="Profile photo"
              className="h-full w-full rounded-lg object-cover"
              priority
            />
          </MotionDiv> */
}
