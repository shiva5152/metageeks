import React from "react";

const Certificates = () => {
  return (
    <section className="flex flex-col items-center w-full py-16 max-md:pt-0">
      <div className="flex flex-col px-5 max-w-[915px]">
        <div className="self-center text-lg font-bold leading-7 text-center text-neutral-500">
          You are with a good company
        </div>
        <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 flex-wrap max-md:justify-center max-md:gap-5">
            <div className="flex flex-col w-[21%] max-md:ml-0 ">
              <img
                loading="lazy"
                src="/images/certificate1.svg"
                className="grow shrink-0 max-md:w-[85px] aspect-[0.81] w-[156px] max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 ">
              <img
                loading="lazy"
                src="/images/certificate2.svg"
                className="grow shrink-0 max-md:w-[75px] aspect-[1.25] w-[116px] max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0">
              <img
                loading="lazy"
                src="/images/certificate5.svg"
                className="grow mx-auto  max-md:w-[40px] aspect-[1.25] w-[80px] max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 ">
              <img
                loading="lazy"
                src="/images/certificate4.svg"
                className="grow  max-md:w-[80px] aspect-[1.25] w-[146px] max-md:mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
