import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Bounded from "../components/Bounded";

export default function About() {
  return (
    <Bounded className="g:py-6 h-full bg-white px-4 max-md:py-6 md:py-10">
      {/* About Me Section */}
      <section className="mb-16">
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:mb-8 md:text-6xl md:font-semibold xl:pl-[4%] 2xl:text-6xl">
          About me.
        </h2>
        <div className="flex flex-col-reverse max-sm:gap-8 md:grid md:grid-cols-3 md:items-center md:gap-8">
          <Image
            src="/me5.jpeg"
            width={300}
            height={400}
            alt="Profile photo"
            className="col-span-1 mx-auto h-full w-[80%] rounded-lg object-cover sm:hidden md:block lg:w-[75%] 2xl:h-[95%] 2xl:w-[60%]"
            priority
          />
          <Image
            src="/me5.jpeg"
            width={300}
            height={400}
            alt="Profile photo"
            className="col-span-1 mr-10 hidden h-[200px] w-[30%] self-end rounded-lg object-cover sm:block md:hidden"
            priority
          />

          <div className="col-span-2 w-[90%] space-y-4 font-medium tracking-wide max-md:pb-2 max-md:leading-relaxed max-sm:mx-2 sm:w-[70%] xl:w-[80%] xl:text-lg 2xl:text-xl">
            <p className="pb-1 text-backgroundb/70">
              Hello! {`I'm`}Joshua, a web developer based in Bahrain with a
              passion for crafting seamless and engaging user-friendly
              applications. With a solid foundation in front-end development and
              a keen eye for detail, I focus on creating websites that are not
              only visually appealing but also highly functional—designed to
              solve real-world problems.
            </p>
            <p className="hidden text-gray-600 md:flex">
              I’m always eager to learn and expand my skill set, which is why{" "}
              {`I'm`} currently diving into back-end development to deepen my
              understanding of this area.
            </p>
            <button className="mt-4 flex items-center gap-2 rounded-3xl bg-black px-4 py-2 text-white transition-colors hover:bg-backgroundb/80">
              <Download size={20} />
              Resume
            </button>
          </div>
        </div>
      </section>

      {/* Courses & Certificates Section */}
      <section className="mb-10 w-full grid-cols-3 border-t border-black/30 pt-6 lg:grid">
        <h2 className="col-span-1 mb-4 text-4xl font-bold tracking-tight md:mb-8 md:text-5xl md:font-semibold xl:pl-[8%] 2xl:text-6xl">
          Certificates <br className="hidden lg:block" /> & Courses
        </h2>
        <div className="col-span-2 mx-2 space-y-4 2xl:w-[90%] 2xl:pt-20">
          <CertificateItem number="(01)" title="Meta Front-end Developer" />
          <CertificateItem number="(02)" title="UI/UX Design" />
          <CertificateItem number="(03)" title="Advanced React" />
          <CertificateItem number="(04)" title="MongoDB" />
        </div>
      </section>
    </Bounded>
  );
}

function CertificateItem({ number, title }: { number: string; title: string }) {
  return (
    <Link
      href="#"
      className="group flex items-center justify-between border-b border-gray-200 py-4"
    >
      <div className="flex items-center">
        <span className="mr-3 text-sm text-gray-500">{number}</span>
        <span className="font-medium lg:text-lg 2xl:text-xl">{title}</span>
      </div>
      <ArrowRight
        className="text-gray-500 transition-colors group-hover:text-black"
        size={20}
      />
    </Link>
  );
}
