import React from "react";
import { CustomButtonProps } from "./types";

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "primary",
  onClick,
}) => {
  const variantClasses: Record<"primary" | "secondary", string> = {
    primary:
      "bg-black hover:bg-gray-800 text-white border-2 border-black hover:border-gray-800",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
  };

  const sizeClasses = `
        font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
        mobile-xs:px-3 mobile-xs:py-1.5 mobile-xs:text-sm
        mobile-sm:px-4 mobile-sm:py-2 mobile-sm:text-sm
        mobile-md:px-4 mobile-md:py-2 mobile-md:text-base
        mobile-lg:px-5 mobile-lg:py-2.5 mobile-lg:text-base
        mobile-xl:px-5 mobile-xl:py-2.5 mobile-xl:text-base
        tablet-sm:px-5 tablet-sm:py-2 tablet-sm:text-base
        tablet:px-5 tablet:py-2 tablet:text-base
        tablet-lg:px-6 tablet-lg:py-3 tablet-lg:text-lg
        laptop:px-6 laptop:py-3 laptop:text-lg
        laptop-lg:px-7 laptop-lg:py-3 laptop-lg:text-lg
        laptop-xl:px-8 laptop-xl:py-3 laptop-xl:text-lg
        desktop:px-8 desktop:py-3 desktop:text-lg
        desktop-lg:px-9 desktop-lg:py-4 desktop-lg:text-xl
        4k:px-10 4k:py-4 4k:text-xl
    `;

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} ${variantClasses[variant]}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
