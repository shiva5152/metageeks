import React from "react";

const Services = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-center px-16 pt-14 pb-8 text-center min-h-[1242px] max-md:px-5">
      <div className="flex relative flex-col items-center max-w-full w-[1048px]">
        <div className="text-5xl font-bold leading-[65.36px] text-zinc-700">
          Our Services
        </div>
        <div className="mt-14 text-lg leading-7 text-gray-600 max-md:mt-10 max-md:max-w-full">
          We handle everything from design to deployment to get your website
          shipped
          <br />
          and ready to go!
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/852cbf8ec4ecef8ca43adc1c799ffca0d63a967a333a5ca742853e1f87ad51f1?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="self-stretch mt-11 w-full aspect-[1.08] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default Services;
