import React from "react";
import Button from "../ui/Button";
import { cn } from "@/utils/cn";
import { containerStyle } from "@/tailwindStyles";
import Header from "../ui/Header";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
const gradientTextStyle =
  "bg-clip-text text-transparent bg-[linear-gradient(0deg,#06CDD6_-1.56%,#2A7DDC_98.44%)]";

const Hero = () => {
  return (
    <div
      style={{ background: "linear-gradient(to top,white 0%, #dfe9f3 100%)" }}
      className=" w-full mb-16 flex flex-col items-center"
    >
      <Header />
      <div
        className={cn(
          "flex container relative z-10 flex-col justify-center items-center pt-32"
        )}
      >
        <div className="px-8 text-[53px] relative text-clip font-extralight text-center leading-[83.16px] text-zinc-700 max-md:mt-10 w-full max-md:text-4xl">
          Innovate Iterate Illuminate
        </div>
        <TypewriterEffectSmooth words={words} />
        <div className=" text-xl max-md:-mt-10 tracking-wide font-extralight leading-7 text-center text-zinc-500 max-md:max-w-full">
          We build software that works, so you can focus on growth.
          <br />
          Simplify complexity with our tailored solutions
        </div>
        <Button className="px-8 mt-10 py-4 max-md:py-2 max-md:text-xs text-xl max-md:px-5">
          {" "}
          Book a call
        </Button>
        {/* <div className="mt-16 text-xl font-bold leading-7 text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
          On-demand Technical Team for SaaS Products and Midsize Businesses
        </div> */}
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Hero;

const words = [
  {
    text: "Custom",
  },
  {
    text: "Software",
  },
  {
    text: " Solutions",
  },
  {
    text: "with",
  },
  {
    text: "Blockchain & AI.",
    className: `${gradientTextStyle} shrink text-[53px] basis-auto grow-0 leading-[83.16px] max-md:text-4xl`,
  },
];
