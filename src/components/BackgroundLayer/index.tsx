import React from "react";
import Image from "next/image";
import { BackgroundLayerProps } from "./types";

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({
  isMobile,
  isTablet,
  mobileImage,
  desktopImage,
}) => (
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
      src={isMobile ? mobileImage : desktopImage}
      alt="Background"
      fill
      className="object-cover object-center"
      priority
      style={{ objectFit: "cover" }}
    />
  </div>
);

export default BackgroundLayer;
