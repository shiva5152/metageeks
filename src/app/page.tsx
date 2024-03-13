import Certificates from "@/components/landing/Certificates";
import GetInTouch from "@/components/landing/GetInTouch";
import Hero from "@/components/landing/Hero";
import Join from "@/components/landing/Join";
import HeroScroll from "@/components/landing/ScrollCard";
import Services from "@/components/landing/Services";
import Technology from "@/components/landing/Technology";
import TextMarquee from "@/components/landing/TextMarquee";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-x-hidden items-center w-full bg-white">
      {/* <Header /> */}
      <Hero />
      {/* <TextMarquee direction="right" />
      <TextMarquee direction="left" /> */}
      <Certificates />
      {/* <Services />
      <Technology /> */}
      {/* <Cards /> */}
      {/* <HeroScroll />
      <Join />
      <GetInTouch />
      <Footer /> */}
      {/* <Faq /> */}
    </main>
  );
}
