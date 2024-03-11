import React from "react";
import Button from "./Button";
import { cn } from "@/utils/cn";
import { containerStyle } from "@/styles";

const Header = () => {
  console.log(containerStyle);
  return (
    <div
      className={cn(
        containerStyle,
        "flex gap-5 justify-between items-center px-5 py-6 max-md:flex-wrap"
      )}
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[159px]"
      />
      <ul className="flex gap-5 justify-between self-stretch my-auto text-sm font-medium leading-5 text-zinc-600 max-md:flex-wrap max-md:max-w-full">
        <li className="grow hello whitespace-nowrap">About us</li>
        <li>Services</li>
        <li>Products</li>
        <li>Case Studies</li>
        <li className="grow whitespace-nowrap">Contact Us</li>
      </ul>
      <Button className="px-6 py-2.5 text-xs max-md:px-5">Book a call</Button>
    </div>
  );
};

export default Header;
