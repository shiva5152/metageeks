import Cards from "@/components/landing/Cards";
import Certificates from "@/components/landing/Certificates";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Technology from "@/components/landing/Technology";
import Faq from "@/components/landing/Faq";
import Join from "@/components/landing/Join";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden items-center w-full bg-white">
      {/* <Header /> */}
      <Hero />
      <Certificates />
      <Services />
      <Technology />
      <Cards />
      <Join />
      <Faq />
    </main>
  );
}
