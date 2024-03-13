"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-tech";

export default function TechMarquee({
  direction,
}: {
  direction: "right" | "left" | undefined;
}) {
  return (
    <InfiniteMovingCards
      pauseOnHover={false}
      items={technologies}
      direction={direction}
      speed="slow"
    />
  );
}
const technologies = [
  {
    id: 1,
    src: "/images/aws.webp",
    logoClassName: "w-[60px] h-auto",
  },
  {
    id: 2,
    src: "/images/figma2.svg",
    logoClassName: "w-[80px] h-[80px]",
  },
  {
    id: 3,
    src: "/images/framer.webp",
    logoClassName: "w-[60px] h-[60px]",
  },
  {
    id: 4,
    src: "/images/nextjs2.svg",
    logoClassName: "w-[120px] h-[120px]",
  },
  {
    id: 5,
    src: "/images/node.webp",
    logoClassName: "w-[120px] h-auto",
  },
  {
    id: 6,
    src: "/images/react.webp",
    logoClassName: "w-[60px] h-[60px]",
  },
  {
    id: 7,
    src: "/images/sanity.svg",
    logoClassName: "w-[120px] h-auto",
  },
  {
    id: 8,
    src: "/images/tailwind.webp",
    logoClassName: "w-[120] h-auto",
  },
  {
    id: 9,
    src: "/images/vercel.webp",
    logoClassName: "w-[120px] h-auto",
  },
];
