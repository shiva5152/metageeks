"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function TextMarquee({
  direction,
}: {
  direction: "right" | "left" | undefined;
}) {
  const itServices: string[] = [
    "Software Development",
    ".",
    "Web Development",
    ".",
    "Mobile Application Development",
    ".",
    "Cloud Services",
    ".",
    "IT Consulting",
    ".",
    "Cybersecurity Services",
    ".",
    "Data Analytics",
    ".",
    "IT Support",
    ".",
    "Network Management",
    ".",
    "IT Infrastructure Management",
    ".",
    "Database Management",
    ".",
    "IT Training",
    ".",
    "Managed IT Services",
    ".",
    "IT Project Management",
    ".",
    "Business Continuity Planning",
    ".",
  ];
  return (
    <InfiniteMovingCards
      pauseOnHover={false}
      items={itServices}
      direction={direction}
      speed="slow"
    />
  );
}
