import React from "react";
import Button from "../ui/Button";
import { cn } from "@/utils/cn";
import { containerStyle } from "@/tailwindStyles";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Header from "../ui/Header";
const gradientTextStyle =
  "bg-clip-text text-transparent bg-[linear-gradient(0deg,#06CDD6_-1.56%,#2A7DDC_98.44%)]";

const Hero = () => {
  // console.log(gradientTextStyle);
  return (
    <BackgroundGradientAnimation
      gradientBackgroundEnd="#ffffff"
      gradientBackgroundStart="#edf2fb"
      interactive={false}
      secondColor="154, 234, 117"
      fifthColor="none"
      fourthColor="none"
      className=" w-full flex flex-col items-center"
    >
      <div className="absolute z-50 inset-0 flex flex-col items-center pointer-events-none">
        <Header />
        <div
          className={cn(
            containerStyle,
            "flex relative z-10 flex-col justify-center items-center pt-32"
          )}
        >
          <div className=" text-[53px] font-bold text-center leading-[83.16px] text-zinc-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Innovate.Iterate.Illuminate
          </div>
          <div className="font-bold text-center flex max-md:flex-wrap flex-auto text-[53px] leading-[82.94px] text-zinc-700 max-md:max-w-full max-md:text-4xl">
            Custom Software Solutions with
            <span
              className={cn(
                gradientTextStyle,
                "shrink text-[53px] basis-auto grow-0 leading-[83.16px] max-md:text-4xl ml-2"
              )}
            >
              {" "}
              Blockchain & AI
            </span>
          </div>
          <div className=" text-xl tracking-wide leading-7 text-center text-zinc-500 max-md:max-w-full">
            We build software that works, so you can focus on growth.
            <br />
            Simplify complexity with our tailored solutions
          </div>
          <Button className="px-8 mt-10 py-4 text-xl max-md:px-5">
            {" "}
            Book a call
          </Button>
          <div className="mt-16 text-xl font-bold leading-7 text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
            On-demand Technical Team for SaaS Products and Midsize Businesses
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Hero;
