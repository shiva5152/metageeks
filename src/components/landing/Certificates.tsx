import React from "react";

const Certificates = () => {
  return (
    <section className="container flex flex-col items-center w-full py-16 max-md:pt-0">
      <div className="flex flex-col px-5 w-full">
        {/* <div className="self-center text-lg font-bold leading-7 text-center text-neutral-500">
          You are with a good company
        </div> */}
        <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 mad-md:flex-wrap justify-center max-md:gap-5">
            <div className="flex flex-col ">
              <img
                loading="lazy"
                src="/images/c2.png"
                className=" w-[180px] "
              />
            </div>
            <div className="flex flex-col  ">
              <img loading="lazy" src="/images/c1.png" className=" w-[180px]" />
            </div>
            <div className="flex flex-col ">
              <img
                loading="lazy"
                src="/images/c3.png"
                className=" w-[180px] "
              />
            </div>
            <div className="flex ml-5 ">
              <img
                loading="lazy"
                src="/images/c4.png"
                className="  h-[128px] w-auto max-md:mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
