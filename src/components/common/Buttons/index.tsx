import React from "react";
import { CustomButtonProps } from "./types";

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const variantClasses: Record<"primary" | "secondary", string> = {
    primary:
      "bg-black hover:bg-gray-800 text-white border-2 border-black hover:border-gray-800",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
  };

  const baseClasses = `
    font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
  `;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
