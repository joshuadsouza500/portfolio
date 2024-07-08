import React from "react";

function Features() {
  return (
    <section className="">
      <div
        className="sticky mx-auto border-t border-y-white/20 px-4 pb-10 pt-6 text-white/60 lg:w-[85%]"
        style={{ top: `calc(20vh + 0em)`, marginBottom: "17.25em" }}
      >
        <h1 className="pb-6 text-[2rem] font-semibold tracking-tight md:pb-6 md:text-5xl">
          Web Design
        </h1>

        <p className="pb-10 pl-1 text-base sm:w-[90%] md:text-lg lg:w-[70%]">
          I design websites that enhance your brand and drive business goals. My
          goal is to create responsive designs that catch the eye and ensure a
          consistent user experience.
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
        className="sticky mx-auto border-t border-y-white/20 bg-backgroundb px-4 pb-10 pt-6 text-white/60 lg:w-[85%] lg:pb-6"
        style={{ top: `calc(20vh + 5.75em)`, marginBottom: "11.5em" }}
      >
        <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
        <h1 className="pb-6 text-[2rem] font-semibold tracking-normal md:pb-8 md:text-5xl">
          Web Development
        </h1>

        <p className="pb-10 pl-1 text-base sm:w-[90%] md:text-lg lg:w-[70%]">
          I enjoy bringing ideas to life by creating unique websites that are
          tailored to your brand. I try to ensure that every project I work on
          is both visually stunning and technologically sound.
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
        className="sticky mx-auto border-t border-y-white/20 bg-backgroundb px-4 pb-10 pt-6 text-white/60 lg:w-[85%]"
        style={{ top: `calc(20vh + 11.5em)`, marginBottom: "5.75em" }}
      >
        <div className="absolute inset-0 bg-black bg-[url('/noise-light.png')] opacity-15" />
        <h1 className="pb-6 text-[2rem] font-semibold tracking-normal md:pb-8 md:text-5xl">
          Web Optimization
        </h1>

        <p className="pb-10 pl-1 text-base sm:w-[90%] md:text-lg lg:w-[70%]">
          {`I optimize websites to run smoothly, load quickly, and be easily found
          by search engines and users alike, increasing your online visibility
          and boosting your website's performance.`}
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
