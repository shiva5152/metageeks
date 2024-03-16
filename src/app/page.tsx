"use client";
import Certificates from "@/components/landing/Certificates";
import GetInTouch from "@/components/landing/GetInTouch";
import Hero from "@/components/landing/Hero";
import Join from "@/components/landing/Join";
import NewHero from "@/components/landing/NewHero";
import HeroScroll from "@/components/landing/ScrollCard";
import Services from "@/components/landing/Services";
import Technology from "@/components/landing/Technology";
import TextMarquee from "@/components/landing/TextMarquee";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden items-center w-full bg-white">
      <Hero />
      {/* <NewHero /> */}
      <Certificates />
      <TextMarquee direction="right" />
      <TextMarquee direction="left" />
      <Services />
      <Technology />
      {/* <Cards /> */}
      <HeroScroll />
      <Testimonials />
      <Join />
      <GetInTouch />
      <Footer />
      {/* <Faq /> */}
    </main>
  );
}
