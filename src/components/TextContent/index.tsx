import React from "react";
import { TextContentProps } from "./types";

const TextContent: React.FC<TextContentProps> = ({
  title,
  subtitle,
  description,
  isMobile,
}) => (
  <div
    className={`w-full flex flex-col justify-center space-y-4 ${
      isMobile
        ? "my-auto text-start tablet:text-start tablet:items-center"
        : "md:ps-8 text-start"
    }`}
  >
    <h1
      className={`text-white font-bold leading-tight mb-1 ${
        isMobile
          ? "mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl tablet:text-5xl tablet:w-full desktop-lg:text-7xl 4k:text-8xl"
          : "laptop:text-4xl laptop-lg:text-5xl desktop-lg:text-7xl 4k:text-8xl"
      }`}
    >
      {title}
    </h1>
    <h2
      className={`text-white font-bold leading-tight mb-3 ${
        isMobile
          ? "mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl tablet:text-5xl tablet:w-full desktop-lg:text-7xl 4k:text-8xl"
          : "laptop:text-4xl laptop-lg:text-5xl desktop-lg:text-7xl 4k:text-8xl"
      }`}
    >
      {subtitle}
    </h2>
    <p
      className={`text-white leading-relaxed w-full laptop:w-10/12 text-justify ${
        isMobile
          ? "mb-4 tablet:mb-6 opacity-95 mobile-xs:text-base xl:text-3xl"
          : "mb-4 laptop:mb-8 md:max-w-1/2 opacity-95 laptop:text-lg laptop-lg:text-xl laptop-xl:text-2xl desktop:text-3xl 4k:text-4xl"
      }`}
    >
      {description}
    </p>
  </div>
);

export default TextContent;
