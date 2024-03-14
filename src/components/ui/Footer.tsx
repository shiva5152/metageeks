import React from "react";

const Footer = () => {
  // border-t border-solid border-slate-900
  return (
    <div className="mx-auto w-full">
      <div className="border-t  border-solid border-slate-300"></div>
      <div className="px-10 w-full max-w-[1264px] mx-auto max-md:max-w-full  py-10 md:py-20 border-opacity-10 max-md:px-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-sm font-light leading-5 text-slate-500 max-md:mt-10">
              <div className="flex gap-2 text-base font-bold leading-6 whitespace-nowrap text-zinc-700">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[159px]"
                />
              </div>
              <div className="mt-6 leading-5">
                © 2024 Aceternity Solutions Private Limited.
                <br />
                All rights reserved.
              </div>
              <div className="mt-6">contact@metakeeks.tech</div>
              <div className="flex gap-2 self-start mt-5 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/434138cacc3a0b331efbb6cc9dec5ed524e043dcd622264943a83a242f4e143f?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div>/</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ead39769df0213542e6ccffe8f1282f9cabc169b21f1259b704a2c9b7f6441f7?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 flex-col md:flex-row  justify-evenly items-start mt-1.5 text-sm leading-5 text-neutral-600 max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col  whitespace-nowrap basis-0 md:mr-5">
                <div className="font-bold text-black">Company</div>
                <div className="mt-4">Work</div>
                <div className="mt-2">Services</div>
                <div className="mt-2">Pricing</div>
                <div className="mt-2">Templates</div>
                <div className="mt-2">Blog</div>
                <div className="mt-2">Contact</div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="font-bold text-black">Services</div>
                <div className="mt-4 whitespace-nowrap">
                  Landing Page Development
                </div>
                <div className="mt-2">SaaS App development</div>
                <div className="mt-2 whitespace-nowrap">
                  Custom Webapp Development
                </div>
                <div className="mt-2">AI App Development</div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="font-bold text-black">Legal</div>
                <div className="mt-4">Privacy Policy</div>
                <div className="mt-2 whitespace-nowrap">
                  Terms and Conditions
                </div>
                <div className="mt-2">Refund Policy</div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="font-bold text-black">Tools</div>
                <div className="mt-4 whitespace-nowrap">Awesome Components</div>
                <div className="mt-2 whitespace-nowrap">
                  Tailwindcss Buttons
                </div>
                <div className="mt-2 whitespace-nowrap">
                  Mechanical Keyboard
                </div>
                <div className="mt-2">Box Shadows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
