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
        setScreenType("mobile");
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
              : "top-0 left-0 w-1/2 h-1/2"
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
      <div className="relative z-10 h-full bg-transparent ">
        {/* Mobile/Tablet Layout (Column) */}
        {isMobile && (
          <div className="flex flex-col h-full">
            {/* Top Section with Text Content */}
            <div className="flex-1 px-4 flex justify-center items-center pt-0 mobile-xs:px-3 mobile-sm:px-4 mobile-md:px-5 mobile-lg:px-6">
              <div className="max-w-2xl flex flex-col items-start justify-center space-y-4 my-auto text-start tablet:-ml-24">
                {/* Main Title */}
                <h1 className="text-white font-bold leading-tight mb-1 mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl desktop-lg:text-7xl">
                  {data.title}
                </h1>

                {/* Subtitle with White Color */}
                <h2 className="text-white font-bold leading-tight mb-3 tablet:mb-4 mobile-xs:text-xl mobile-sm:text-2xl mobile-md:text-3xl mobile-lg:text-4xl mobile-xl:text-5xl desktop-lg:text-6xl">
                  {data.subtitle}
                </h2>

                {/* Description */}
                <p className="text-white leading-relaxed mb-4 tablet:mb-6 max-w-lg opacity-95 mobile-xs:text-xs mobile-sm:text-sm mobile-md:text-base mobile-lg:text-lg">
                  {data.description}
                </p>

                {/* Action Buttons - Responsive Layout */}
                <div className="flex flex-row gap-2 tablet:gap-3 w-full justify-start">
                  {data.buttons.map((button, index) => (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(button.action)}
                      className={`
                        flex-1 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                        mobile-xs:px-2 mobile-xs:py-1 mobile-sm:px-3 mobile-sm:py-2 mobile-md:px-4 mobile-md:py-2 mobile-lg:px-5 mobile-lg:py-3 mobile-xs:text-xs mobile-sm:text-sm mobile-md:text-base                         
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

              {/* FIFA Trophy Logo - Mobile/Tablet */}
              <div className="absolute z-30 mobile-xs:top-[26rem] mobile-xs:right-0 mobile-sm:top-[25rem] mobile-md:top-[25rem] mobile-lg:top-[26rem] mobile-xl:top-[28rem] tablet-sm:top-[30rem] tablet:top-[20rem] tablet-lg:top-[34rem] mobile-xs:w-24 mobile-xs:h-24 mobile-sm:w-32 mobile-sm:h-32 mobile-md:w-36 mobile-md:h-36 mobile-lg:w-40 mobile-lg:h-40 tablet-sm:w-44 tablet-sm:h-44 tablet:w-48 tablet:h-48 tablet-lg:w-52 tablet-lg:h-52">
                <div className="rounded-xl p-0">
                  <div className="relative mobile-xs:w-24 mobile-xs:h-24 mobile-sm:w-32 mobile-sm:h-32 mobile-md:w-36 mobile-md:h-36 mobile-lg:w-40 mobile-lg:h-40 tablet-sm:w-44 tablet-sm:h-44 tablet:w-48 tablet:h-48 tablet-lg:w-52 tablet-lg:h-52">
                    <Image
                      src={
                        isMobile
                          ? data.images.mobileCenterLogo ||
                            data.images.centerLogo
                          : data.images.centerLogo
                      }
                      alt="FIFA Trophy"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Players Image - Mobile/Tablet */}
            <div className="relative flex-1 mobile-xs:min-h-[200px] mobile-sm:min-h-[250px] mobile-md:min-h-[300px] mobile-lg:min-h-[350px] mobile-xl:min-h-[400px] tablet-sm:min-h-[450px] tablet:min-h-[500px] tablet-lg:min-h-[550px]">
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
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Enhanced overlay for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-5"></div>
          </div>
        )}

        {/* Desktop Layout (Row) - Above 1024px */}
        {!isMobile && (
          <div className="flex flex-row h-full bg-transparent">
            {/* Left Section - Text Content */}
            <div className="flex-1 flex justify-start items-center md:items-start pt-8 laptop:pt-12 desktop:pt-16">
              <div className="max-w-2xl flex flex-col items-start justify-center space-y-4 md:ps-8 text-start">
                {/* Main Title */}
                <h1 className="text-white font-bold leading-tight mb-1 laptop:text-4xl laptop-lg:text-5xl">
                  {data.title}
                </h1>

                {/* Subtitle with White Color */}
                <h2 className="text-white font-bold leading-tight mb-1 laptop:text-4xl laptop-lg:text-5xl">
                  {data.subtitle}
                </h2>

                {/* Description */}
                <p className="text-white leading-relaxed mb-4 laptop:mb-8 md:max-w-sm xl:max-w-md opacity-95 laptop:text-base laptop-lg:text-lg laptop-xl:text-xl desktop:text-2xld">
                  {data.description}
                </p>

                {/* Action Buttons - Desktop Layout */}
                <div className="flex flex-row gap-4 w-auto">
                  {data.buttons.map((button, index) => (
                    <button
                      key={index}
                      onClick={() => handleButtonClick(button.action)}
                      className={`
                        flex-none font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                        laptop:px-6 laptop:py-3 laptop-lg:px-8 laptop-lg:py-4 laptop-xl:px-10 laptop-xl:py-5 desktop:px-12 desktop:py-6 laptop:text-base laptop-lg:text-lg desktop:text-xl
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
            </div>

            {/* Right Section - Players Image */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 w-full h-1/2 bg-transparent">
                <Image
                  src={data.images.players}
                  alt="Players Celebrating"
                  fill
                  className="object-cover object-center w-full"
                  sizes="50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
              </div>
            </div>

            {/* FIFA Trophy Logo - Desktop */}
            <div className="absolute top-[10%] start-[40%] 4k:start-[43%]  z-30 flex items-center justify-center bg-transparent">
              <div>
                <div className="relative laptop:w-52 laptop:h-52 desktop:w-80 desktop:h-80">
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
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
