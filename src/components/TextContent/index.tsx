import React from "react";
import { TextContentProps } from "./types";
const TextContent: React.FC<TextContentProps> = ({
  title,
  subtitle,
  description,
  isMobile,
}) => (
  <div
    className={`max-w-2xl flex flex-col items-start justify-center space-y-4 ${
      isMobile ? "my-auto text-start tablet:-ml-24" : "md:ps-8 text-start"
    }`}
  >
    <h1
      className={`text-white font-bold leading-tight mb-1 ${
        isMobile
          ? "mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl desktop-lg:text-7xl"
          : "laptop:text-4xl laptop-lg:text-5xl"
      }`}
    >
      {title}
    </h1>
    <h2
      className={`text-white font-bold leading-tight mb-3 ${
        isMobile
          ? "mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl desktop-lg:text-6xl tablet:mb-4"
          : "laptop:text-4xl laptop-lg:text-5xl mb-1"
      }`}
    >
      {subtitle}
    </h2>
    <p
      className={`text-white leading-relaxed ${
        isMobile
          ? "mb-4 tablet:mb-6 max-w-lg opacity-95 mobile-xs:text-xs mobile-sm:text-sm mobile-md:text-base mobile-lg:text-lg"
          : "mb-4 laptop:mb-8 md:max-w-sm xl:max-w-md opacity-95 laptop:text-base laptop-lg:text-lg laptop-xl:text-xl desktop:text-2xld"
      }`}
    >
      {description}
    </p>
  </div>
);

export default TextContent;
