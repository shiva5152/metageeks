import React from "react";
import { cn } from "@/utils/cn";

const Join = () => {
  return (
    <div className="h-screen flex justify-center flex-col gap-5 bg-black text-white items-center">
      <div className="bg-clip-text text-6xl font-bold text-transparent bg-[linear-gradient(0deg,#c4c5c7_0%,#dcdddf_52%)]">
        Join wishlist
      </div>
      <p className=" text-center max-w-[60%] font-medium text-xl text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, corporis
        pariatur nulla assumenda beatae, alias cumque porro libero, distinctio
        consequuntur laboriosam? Non ex corporis cumque autem, sapiente quos
        atque exercitationem.
      </p>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-3 py-2 border-2 text-gray-500 bg-black border-gray-500 rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-black "
        />
        <button>submit</button>
      </div>
    </div>
  );
};

export default Join;
