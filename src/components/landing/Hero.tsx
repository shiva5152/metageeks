import React from "react";
import Button from "../ui/Button";
import { cn } from "@/utils/cn";
import { containerStyle, gradientTextStyle } from "@/styles";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const Hero = () => {
  console.log(gradientTextStyle);
  return (
    <BackgroundGradientAnimation
      gradientBackgroundEnd="#ffffff"
      gradientBackgroundStart="#ffffff"
      interactive={true}
      className=" w-full flex flex-col items-center"
    >
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
        <Button className="px-8 mt-10 py-5 text-xl max-md:px-5">
          {" "}
          Book a call
        </Button>
      </div>
      {/* blobs */}
      {/* <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Gradients X Animations
          </p>
        </div>
      </BackgroundGradientAnimation> */}
    </BackgroundGradientAnimation>
  );
};

export default Hero;
