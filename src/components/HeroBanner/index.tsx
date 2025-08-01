"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeroBannerData } from "./types";

interface HeroBannerProps {
  data: HeroBannerData;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ data }) => {
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">(
    "mobile",
  );

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setScreenType("mobile"); // Both mobile and tablet use mobile design
      } else {
        setScreenType("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleButtonClick = (action: string) => {
    console.log(`Button clicked: ${action}`);
    // Add your button click logic here
  };

  const isMobile = screenType === "mobile";
  const isTablet = screenType === "tablet";

  return (
    <div className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      {/* Background Color Layers - Fully Responsive */}
      <div
        className={`absolute z-0 ${
          isMobile
            ? "inset-0 h-1/2 w-full"
            : isTablet
              ? "top-0 left-0 w-3/5 h-full"
              : "top-0 left-0 w-1/2 h-full"
        }`}
      >
        <Image
          src={
            isMobile ? data.images.mobileColorLayers : data.images.colorLayers
          }
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Section with Text Content */}
        <div
          className={`flex-1 px-4 ${
            isMobile
              ? "flex justify-center items-center pt-0 mobile-xs:px-3 mobile-sm:px-4 mobile-md:px-5 mobile-lg:px-6"
              : isTablet
                ? "flex justify-start items-center pl-6 tablet:pl-8 pt-8"
                : "flex justify-start items-center pl-8 laptop:pl-12 laptop-lg:pl-16 desktop:pl-20 pt-8 laptop:pt-12 desktop:pt-16"
          }`}
        >
          <div
            className={`max-w-2xl flex flex-col items-start justify-center space-y-4 ${
              isMobile ? "my-auto text-start tablet:-ml-24" : "text-start"
            }`}
          >
            {/* Main Title */}
            <h1
              className={`text-white font-bold leading-tight mb-1 ${
                isMobile
                  ? "mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl"
                  : isTablet
                    ? "tablet-sm:text-3xl tablet:text-4xl tablet-lg:text-5xl"
                    : "laptop:text-4xl laptop-lg:text-5xl laptop-xl:text-6xl desktop:text-7xl desktop-lg:text-8xl"
              }`}
            >
              {data.title}
            </h1>

            {/* Subtitle with White Color */}
            <h2
              className={`text-white font-bold leading-tight mb-3 tablet:mb-4 laptop:mb-6 ${
                isMobile
                  ? "mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl"
                  : isTablet
                    ? "tablet-sm:text-3xl tablet:text-4xl tablet-lg:text-5xl"
                    : "laptop:text-4xl laptop-lg:text-5xl laptop-xl:text-6xl desktop:text-7xl desktop-lg:text-8xl"
              }`}
            >
              {data.subtitle}
            </h2>

            {/* Description */}
            <p
              className={`text-white leading-relaxed mb-4 tablet:mb-6 laptop:mb-8 max-w-lg opacity-95 ${
                isMobile
                  ? "mobile-xs:text-xs mobile-sm:text-sm mobile-md:text-base mobile-lg:text-lg"
                  : isTablet
                    ? "tablet-sm:text-sm tablet:text-base tablet-lg:text-lg"
                    : "laptop:text-base laptop-lg:text-lg laptop-xl:text-xl desktop:text-2xl"
              }`}
            >
              {data.description}
            </p>

            {/* Action Buttons - Responsive Layout */}
            <div
              className={`flex flex-row gap-2 tablet:gap-3 laptop:gap-4 ${
                isMobile ? "w-full justify-start" : "w-auto"
              }`}
            >
              {data.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.action)}
                  className={`
                                        font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                                        ${
                                          isMobile
                                            ? "flex-1 mobile-xs:px-2 mobile-xs:py-1 mobile-sm:px-3 mobile-sm:py-2 mobile-md:px-4 mobile-md:py-2 mobile-lg:px-5 mobile-lg:py-3 mobile-xs:text-xs mobile-sm:text-sm mobile-md:text-base"
                                            : isTablet
                                              ? "flex-none tablet-sm:px-4 tablet-sm:py-2 tablet:px-5 tablet:py-3 tablet-lg:px-6 tablet-lg:py-3 tablet-sm:text-sm tablet:text-base"
                                              : "flex-none laptop:px-6 laptop:py-3 laptop-lg:px-8 laptop-lg:py-4 laptop-xl:px-10 laptop-xl:py-5 desktop:px-12 desktop:py-6 laptop:text-base laptop-lg:text-lg desktop:text-xl"
                                        } 
                                        ${
                                          button.variant === "primary"
                                            ? "bg-black hover:bg-gray-800 text-white border-2 border-black hover:border-gray-800"
                                            : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                                        }
                                    `}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* FIFA Trophy Logo - Fully Responsive Positioning */}
          <div
            className={`absolute z-30 ${
              isMobile
                ? "mobile-xs:top-[26rem] mobile-xs:right-0 mobile-sm:top-[25rem] mobile-md:top-[25rem] mobile-lg:top-[26rem] mobile-xl:top-[28rem] tablet-sm:top-[30rem] tablet:top-[20rem] tablet-lg:top-[34rem] mobile-xs:w-24 mobile-xs:h-24 mobile-sm:w-32 mobile-sm:h-32 mobile-md:w-36 mobile-md:h-36 mobile-lg:w-40 mobile-lg:h-40 tablet-sm:w-44 tablet-sm:h-44 tablet:w-48 tablet:h-48 tablet-lg:w-52 tablet-lg:h-52"
                : "laptop:top-20 laptop-lg:top-32 laptop-xl:top-40 desktop:top-48 laptop:right-8 laptop-lg:right-12 desktop:right-16"
            }`}
          >
            <div
              className={`${isMobile ? "" : "bg-white"} rounded-xl ${isMobile ? "p-0" : "p-3"} ${isMobile ? "" : "shadow-2xl"}`}
            >
              <div
                className={`relative ${
                  isMobile
                    ? "mobile-xs:w-24 mobile-xs:h-24 mobile-sm:w-32 mobile-sm:h-32 mobile-md:w-36 mobile-md:h-36 mobile-lg:w-40 mobile-lg:h-40 tablet-sm:w-44 tablet-sm:h-44 tablet:w-48 tablet:h-48 tablet-lg:w-52 tablet-lg:h-52"
                    : "laptop:w-20 laptop:h-20 laptop-lg:w-24 laptop-lg:h-24 laptop-xl:w-28 laptop-xl:h-28 desktop:w-32 desktop:h-32"
                }`}
              >
                <Image
                  src={data.images.centerLogo}
                  alt="FIFA Trophy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Players Image - Fully Responsive Positioning */}
        <div
          className={`relative ${
            isMobile
              ? "flex-1 mobile-xs:min-h-[200px] mobile-sm:min-h-[250px] mobile-md:min-h-[300px] mobile-lg:min-h-[350px] mobile-xl:min-h-[400px] tablet-sm:min-h-[450px] tablet:min-h-[500px] tablet-lg:min-h-[550px]"
              : "absolute bottom-0 right-0 w-1/2 laptop:h-3/5 laptop-lg:h-2/3 desktop:h-3/4"
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={
                isMobile
                  ? data.images.mobilePlayers || data.images.players
                  : data.images.players
              }
              alt="Players Celebrating"
              fill
              className="object-cover object-center"
              sizes={isMobile ? "100vw" : "50vw"}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* Gradient overlay for better text readability */}
            <div
              className={`absolute inset-0 ${
                isMobile
                  ? "bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  : "bg-gradient-to-l from-transparent via-transparent to-black/20"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Enhanced overlay for mobile readability */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-5"></div>
      )}
    </div>
  );
};

export default HeroBanner;
