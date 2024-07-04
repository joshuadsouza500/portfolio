import React from "react";

function Features() {
  return (
    <section className="">
      <div
        className="sticky mx-auto border-t border-y-white/20 px-4 pb-10 pt-6 text-white/70 lg:w-[85%]"
        style={{ top: `calc(20vh + 0em)`, marginBottom: "17.25em" }}
      >
        <h1 className="pb-6 text-[2rem] font-semibold tracking-tight md:pb-8 md:text-5xl">
          Web Development
        </h1>

        <p className="pb-4 pl-1 text-base sm:w-[90%] md:text-lg lg:w-[70%]">
          Bringing the designs to life, I create unique websites that are
          tailored to your brand with a focus on scalability, performance and
          engaging animations for a memorable experience.
        </p>
        <div>
          <h4 className="border-b border-white/20 pb-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Web Animations
          </h4>
          <h4 className="py-2 text-2xl font-semibold md:text-3xl">
            CMS Integration
          </h4>
        </div>
      </div>

      <div
        className="sticky mx-auto border-t border-y-white/20 bg-backgroundb px-4 pb-10 pt-6 text-white/70 lg:w-[85%] lg:pb-6"
        style={{ top: `calc(20vh + 5.75em)`, marginBottom: "11.75em" }}
      >
        <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
        <h1 className="pb-6 text-[2rem] font-semibold tracking-normal md:pb-8 md:text-5xl">
          Web Design
        </h1>

        <p className="pb-4 pl-1 text-base sm:w-[90%] md:text-lg lg:w-[70%]">
          I design user-centric websites that enhance your brand and drive
          business goals. My goal is to create designs that catch the eye and
          inspire others.
        </p>
        <div>
          <h4 className="border-b border-white/20 pb-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Responsive Design
          </h4>
          <h4 className="py-2 text-2xl font-semibold md:text-3xl">
            UI/UX Design
          </h4>
        </div>
      </div>
      <div
        className="sticky mx-auto border-t border-y-white/20 bg-backgroundb px-4 pb-10 pt-6 text-white/70 lg:w-[85%]"
        style={{ top: `calc(20vh + 11.5em)`, marginBottom: "5.75em" }}
      >
        <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
        <h1 className="pb-6 text-[2rem] font-semibold tracking-normal md:pb-8 md:text-5xl">
          SEO
        </h1>

        <p className="pb-4 pl-1 text-base sm:w-[90%] md:text-lg lg:w-[70%]">
          I also optimize your websites to rank higher in search engine results
          by driving more organic traffic and increasing your online visibility,
          .
        </p>
        <div>
          <h4 className="border-b border-white/20 pb-4 text-2xl font-semibold tracking-tight md:text-3xl">
            On-Page Optimization
          </h4>
          <h4 className="py-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Technical SEO and Meta Data
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Features;
