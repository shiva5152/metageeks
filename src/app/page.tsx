"use client";
import Certificates from "@/components/landing/Certificates";
import GetInTouch from "@/components/landing/GetInTouch";
import Hero from "@/components/landing/Hero";
import Join from "@/components/landing/Join";
import HeroScroll from "@/components/landing/ScrollCard";
import Services from "@/components/landing/Services";
import Technology from "@/components/landing/Technology";
import Testimonials from "@/components/landing/Testimonials";
import TextMarquee from "@/components/landing/TextMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Certificates />
      <TextMarquee direction="right" />
      <TextMarquee direction="left" />
      <Services />
      <Technology />
      <HeroScroll />
      <Testimonials />
      <Join />
      <GetInTouch />
    </>
  );
}
