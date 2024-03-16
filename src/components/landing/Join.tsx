import React from "react";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";

const Join = () => {
  return (
    // <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
    //   <div className="max-w-2xl mx-auto p-4">
    //     <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
    //       Join the waitlist
    //     </h1>
    //     <p></p>
    //     <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
    //       Welcome to MailJet, the best transactional email service on the web.
    //       We provide reliable, scalable, and customizable email solutions for
    //       your business. Whether you&apos;re sending order confirmations,
    //       password reset emails, or promotional campaigns, MailJet has got you
    //       covered.
    //     </p>
    //     <input
    //       type="text"
    //       placeholder="hi@manuarora.in"
    //       className="rounded-lg border border-gray-500  focus:ring-teal-500 p-2 focus:ring-0  w-full relative z-10 mt-4  bg-white placeholder:text-neutral-700"
    //     />
    //   </div>
    // </div>
    <div className="h-[40rem] relative w-full max-md:px-6 overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="max-w-4xl flex flex-col justify-center mx-auto p-4">
        <h1 className="relative z-10  text-4xl md:text-7xl  text-black  text-center font-sans font-extralight">
          Join Our NewsLetter
        </h1>
        <p></p>
        <p className="text-neutral-500 max-md:text-black max-md:text-justify max-w-lg mx-auto my-5 text-lg md:text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="@metageeks.tech"
          className="rounded-lg border mx-auto border-gray-500  focus:ring-teal-500 p-2 focus:ring-0  w-[90%] relative z-10 mt-4  bg-white placeholder:text-neutral-700"
        />
      </div>
    </div>
  );
};

export default Join;
