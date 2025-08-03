"use client";

import React, { useState, useEffect } from "react";
import { HeroBannerData } from "./types";
import BackgroundLayer from "../BackgroundLayer";
import TextContent from "../TextContent";
import ActionButtons from "../ActionButtons";
import TrophyLogo from "../TrophyLogo";
import PlayersImage from "../PlayersImage";

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

  // Default images to avoid undefined errors
  const defaultImage = "/default-image.png";

  return (
    <div className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      <BackgroundLayer
        isMobile={isMobile}
        isTablet={isTablet}
        mobileImage={data.images.mobileColorLayers || defaultImage}
        desktopImage={data.images.colorLayers || defaultImage}
      />

      <div className="relative z-10 h-full bg-transparent">
        {isMobile ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 px-4 flex justify-center items-center pt-0 mobile-xs:px-3 mobile-sm:px-4 mobile-md:px-5 mobile-lg:px-6">
              <div>
                <TextContent
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                  isMobile={isMobile}
                />
                <ActionButtons
                  buttons={data.buttons}
                  isMobile={isMobile}
                  onButtonClick={handleButtonClick}
                />
              </div>
              <TrophyLogo
                isMobile={isMobile}
                mobileImage={
                  data.images.mobileCenterLogo ||
                  data.images.centerLogo ||
                  defaultImage
                }
                desktopImage={data.images.centerLogo || defaultImage}
              />
            </div>
            <PlayersImage
              isMobile={isMobile}
              mobileImage={
                data.images.mobilePlayers || data.images.players || defaultImage
              }
              desktopImage={data.images.players || defaultImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-5"></div>
          </div>
        ) : (
          <div className="flex flex-row h-full bg-transparent">
            <div className="flex-1 flex justify-start items-center md:items-start pt-8 laptop:pt-12 desktop:pt-16">
              <div>
                <TextContent
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                  isMobile={isMobile}
                />
                <ActionButtons
                  buttons={data.buttons}
                  isMobile={isMobile}
                  onButtonClick={handleButtonClick}
                />
              </div>
            </div>
            <PlayersImage
              isMobile={isMobile}
              mobileImage={
                data.images.mobilePlayers || data.images.players || defaultImage
              }
              desktopImage={data.images.players || defaultImage}
            />
            <TrophyLogo
              isMobile={isMobile}
              mobileImage={
                data.images.mobileCenterLogo ||
                data.images.centerLogo ||
                defaultImage
              }
              desktopImage={data.images.centerLogo || defaultImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
