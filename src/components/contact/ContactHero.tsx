import { cn } from "@/utils/cn";
import Header from "../ui/Header";
const gradientTextStyle =
  "bg-clip-text text-transparent bg-[linear-gradient(0deg,#06CDD6_-1.56%,#2A7DDC_98.44%)]";

const ContactHero = () => {
  return (
    <div
      style={{ background: "linear-gradient(to top,white 0%, #dfe9f3 100%)" }}
      className=" w-full mb-16 flex flex-col items-center"
    >
      <Header />
      <div
        className={cn(
          "flex container relative z-10 flex-col justify-center items-center pt-10"
        )}
      >
        <div className="flex flex-col px-5">
          <div className="w-full text-sm font-medium leading-6 text-violet-600 max-md:max-w-full">
            Contact
          </div>
          <div className="mt-9 w-full text-6xl font-bold tracking-tighter leading-[72.32px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
            How can we help?
          </div>
          <div className="mt-6 w-full text-lg leading-7 text-gray-600 max-md:max-w-full">
            Get in touch with our sales and support teams for demos,
            <br />
            onboarding support, or product questions.
          </div>
          <div className="flex overflow-hidden relative flex-col px-20 pt-20 mt-16 w-full shadow min-h-[463px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/843979bc7d021c4e3629b6b50870f7809e8d509fa25d8fca9e225d5b7a949e0a?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative mt-2 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow items-center text-center max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl font-semibold tracking-tight leading-8 text-neutral-900">
                      Sales
                    </div>
                    <div className="self-stretch mt-5 text-sm leading-6 text-gray-600 max-md:max-w-full">
                      Connect with our sales team to talk about pricing,
                      enterprise
                      <br />
                      contracts, or to request a demo
                    </div>
                    <div className="flex flex-col justify-center mt-7 max-w-full text-xs font-medium leading-6 text-white rounded-md shadow-sm bg-neutral-800 w-[129px]">
                      <div className="flex gap-2 px-3.5 py-2.5 rounded-md">
                        <div className="grow">Talk to sales</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60931b4a45e43f2d4dfa0f4fcef33775e4c032706c469ec003d6eaaba2cb4f91?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="shrink-0 w-2.5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow items-center text-center max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl font-semibold tracking-tight leading-8 text-neutral-900">
                      Help and support
                    </div>
                    <div className="self-stretch mt-4 text-sm leading-6 text-gray-600 max-md:max-w-full">
                      Submit a ticket to our support team or email
                      support@clerk.dev
                      <br />
                      directly
                    </div>
                    <div className="flex flex-col justify-center mt-7 max-w-full text-sm font-medium leading-6 text-white rounded-md shadow-sm bg-neutral-800 w-[146px]">
                      <div className="flex gap-2 px-3.5 py-2.5 rounded-md">
                        <div className="grow">Submit a ticket</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/092b3d66ccd35ccafd61520acf84aae16b34993660e8430a477e2d88a16273b9?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                          className="shrink-0 w-2.5 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow px-6 py-7 mx-auto w-full text-sm font-medium bg-gray-50 rounded-2xl text-neutral-900 max-md:px-5 max-md:mt-6">
                    <div className="flex gap-2 leading-[158%]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bffb0c1e737ee51fbac0e1000a6a71ee8936ea609c30b994810b1c23477ea2c9?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">
                        Join the community
                      </div>
                    </div>
                    <div className="mt-3.5 text-xs leading-5 text-gray-600">
                      Chat with us directly and become a part of the
                      <br />
                      Clerk community
                    </div>
                    <div className="flex gap-2.5 mt-8 leading-[186%] max-md:pr-5">
                      <div>Join Discord</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc30b9c15d8988c02ab1a7bd4c19958c8c8dec2259761344d83061f954da5a6b?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="shrink-0 self-start w-2.5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow px-6 py-7 mx-auto w-full text-sm font-medium bg-gray-50 rounded-2xl text-neutral-900 max-md:px-5 max-md:mt-6">
                    <div className="flex gap-2 whitespace-nowrap leading-[156%]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d39a40e573be257bc47757f7f2997fdc63aa2cdeda3a229aca410bf8dc6ac29?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">Documentation</div>
                    </div>
                    <div className="mt-3.5 text-xs leading-5 text-gray-600">
                      Gain deeper understanding of Clerk's features,
                      <br />
                      APIs, and SDKs
                    </div>
                    <div className="flex gap-2.5 mt-8 leading-[188%] max-md:pr-5">
                      <div>Clerk Docs</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b798868e48d54fd357353db5d62150d021f071971120f3c6415e0dad595421?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="shrink-0 w-2.5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow px-6 py-7 mx-auto w-full text-sm font-medium bg-gray-50 rounded-2xl text-neutral-900 max-md:px-5 max-md:mt-6">
                    <div className="flex gap-2 leading-[159%]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24a6632a50db22ab85481a5017dd8b6f701e6715c35a4276ec50bcf352760a88?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">Follow us on X</div>
                    </div>
                    <div className="mt-3 text-xs leading-5 text-gray-600">
                      Find @clerkdev on X - or is it still called Twitter?
                    </div>
                    <div className="flex gap-2.5 mt-14 leading-[191%] max-md:pr-5 max-md:mt-10">
                      <div>Follow on X</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0464ff2cec2c299b69f1ba9fa6cd0682d0796864160819f5b40c1ab92fe2977b?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                        className="shrink-0 w-2.5 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

const words = [
  {
    text: "Custom",
  },
  {
    text: "Software",
  },
  {
    text: " Solutions",
  },
  {
    text: "with",
  },
  {
    text: "Blockchain & AI.",
    className: `${gradientTextStyle} shrink text-[53px] basis-auto grow-0 leading-[83.16px] max-md:text-4xl`,
  },
];
