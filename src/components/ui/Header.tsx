"use client";
import React, { useState } from "react";
import Button from "./Button";
import { cn } from "@/utils/cn";
// import { containerStyle } from "@/tailwindStyles";
const containerStyle = "w-full max-w-[1264px]  max-md:max-w-full ";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={cn(
        "flex container mx-auto gap-5 relative z-50  justify-between items-center px-5 py-6 max-md:flex-wrap"
      )}
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef97c80f5432f0efbaee7eb70729a0d10177a11dbf602ee94ad448fe27808b70?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[120px] md:w-[230px]"
      />
      {/* desktop menu */}
      <ul className="md:flex hidden gap-5 justify-between self-stretch my-auto text-sm font-medium leading-5 text-zinc-600 max-md:flex-wrap max-md:max-w-full">
        <li className="grow hello whitespace-nowrap">About us</li>
        <li>Services</li>
        <li>Products</li>
        <li>Case Studies</li>
        <li className="grow whitespace-nowrap">Contact Us</li>
      </ul>
      {/* mobile menu */}
      {isOpen ? (
        <div className="md:hidden flex justify-center items-center fixed inset-0 bg-white h-screen z-40">
          <button
            onClick={() => setIsOpen(false)}
            className=" absolute top-8 right-8 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex gap-[4rem] justify-center text-zinc-600 items-center  flex-col font-bold  text-xl leading-5 ">
            <li className="">About us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Case Studies</li>
            <li className="grow whitespace-nowrap">Contact Us</li>
          </ul>
        </div>
      ) : null}
      <Button className="px-6 hidden  md:flex py-2.5 text-xs max-md:px-5">
        Book a call
      </Button>
      <button className=" md:hidden ">
        <svg
          onClick={() => setIsOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-category"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4h6v6h-6z" />
          <path d="M14 4h6v6h-6z" />
          <path d="M4 14h6v6h-6z" />
          <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </svg>
      </button>
    </nav>
  );
};

export default Header;
