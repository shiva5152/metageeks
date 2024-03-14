import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Button from "../ui/Button";

const GetInTouch = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 max-md:pt-0 bg-white max-md:px-0">
      <div className="pl-20 mt-14  max-w-full nax-md:rounded-3xl rounded-none shadow-none md:shadow-2xl w-full md:w-[1280px] max-md:pl-5 max-md:mt-10">
        <div className="flex gap-5  max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 max-md:pb-6 md:px-0 self-stretch my-auto max-md:mt-10 justify-center items-center">
              <img
                loading="lazy"
                src="/images/metageeks-logo.png"
                className="w-10 aspect-square"
              />
              <div className="mt-6 mr-8 text-4xl font-bold max-md:text-center tracking-tighter leading-10 text-neutral-600 max-md:mr-2.5">
                Want a website that
                <br className="hidden md:block" />
                converts? Get in touch!
              </div>
              <div className="mt-10 text-lg leading-8 max-md:text-center text-neutral-600">
                Experience the magic of a stunning website
                <br className="hidden md:block" />
                designed and developed just for you! ✨
              </div>
              <Button className="px-8 mt-10 py-4 text-xl w-fit max-md:w-full max-md:px-5">
                {" "}
                Book a call
              </Button>
              <div className="flex gap-2 items-center justify-start mt-10">
                <div className="flex flex-row items-start justify-start  w-fit">
                  <AnimatedTooltip items={people} />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58670119efe2733db8619bd9ef180a97222949026af01e94f5833b2eefdbd2b3?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 self-stretch ms-4 my-auto w-4 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12da9335f748bc753f2dc5a7f623bda27950e5a75f03dd905f4a323a32079c1c?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/520208ae0f5c84cf8337bc583aa8fb8c10ea5f1db9334e985fdd9150537c8996?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fcda159a25a2c95e9e425678828c6b696b827c0aa5942454f19a4d487fdcc1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e016280ae1ebed12e156061a99d8a6368e0505a0e18cc9bf62468c7589df25?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                  className="shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex max-md:hidden flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e20f1967236b5ae5d41b52a344ee37624a9e01e616398fc286a926634e1cedf0?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="grow w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
