import Hero from "@/components/landing/Hero";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden items-center w-full bg-white">
      {/* <Header /> */}
      <Hero />
      <div className="mt-16 text-xl font-bold leading-7 text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
        On-demand Technical Team for SaaS Products and Midsize Businesses
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33258e37db038d7c7ec6b24b97a73ad9d18290b4b1bfa93deb506cb223e9f6f0?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="self-stretch mt-2 w-full aspect-[14.29] max-md:max-w-full"
      />
    </main>
  );
}
