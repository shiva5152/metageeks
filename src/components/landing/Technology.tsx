import React from "react";
import TechMarquee from "@/components/landing/TechMarquee";

const Technology = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col px-5 text-5xl font-extralight text-center leading-[65.36px] text-zinc-700">
        <div className="self-center max-md:text-4xl max-md:max-w-full">
          Technologies We Work With
        </div>
        <div className="my-10 text-lg leading-7 font-normal text-gray-600 max-md:my-4 max-md:max-w-full">
          We handle everything from design to deployment to get your website
          shipped
          <br />
          and ready to go!
        </div>
        <TechMarquee direction="right" />
      </div>
    </section>
  );
};

export default Technology;

const technologies = [
  {
    id: 1,
    src: "/images/aws.webp",
  },
  {
    id: 2,
    src: "/images/figma2.svg",
  },
  {
    id: 3,
    src: "/images/framer.webp",
  },
  {
    id: 4,
    src: "/images/nextjs2.svg",
  },
  {
    id: 5,
    src: "/images/node.webp",
  },
  {
    id: 6,
    src: "/images/react.webp",
  },
  {
    id: 7,
    src: "/images/sanity.webp",
  },
  {
    id: 8,
    src: "/images/tailwind.webp",
  },
  {
    id: 9,
    src: "/images/vercel.webp",
  },
];
