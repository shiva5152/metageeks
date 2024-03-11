import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyle } from "@/styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  console.log(buttonStyle);
  return (
    <button className={cn(buttonStyle, className)} {...props}>
      <div className="grow my-auto">{children}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a698019de2dd8d557ed9bbd7245f50bd416e6dabc2160fd0ff48aed67530a4c5?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  );
};

export default Button;
