import React from "react";
import Image from "next/image";
import { TrophyLogoProps } from "./types";

const TrophyLogo: React.FC<TrophyLogoProps> = ({
  isMobile,
  mobileImage,
  desktopImage,
}) => (
  <div
    className={`absolute z-30 ${
      isMobile
        ? "mobile-xs:top-[26rem] mobile-xs:right-0 mobile-sm:top-[25rem] mobile-md:top-[25rem] mobile-lg:top-[26rem] mobile-xl:top-[28rem] tablet-sm:top-[30rem] tablet:top-[20rem] tablet-lg:top-[34rem] mobile-xs:w-24 mobile-xs:h-24 mobile-sm:w-32 mobile-sm:h-32 mobile-md:w-36 mobile-md:h-36 mobile-lg:w-40 mobile-lg:h-40 tablet-sm:w-44 tablet-sm:h-44 tablet:w-48 tablet:h-48 tablet-lg:w-52 tablet-lg:h-52"
        : "top-[10%] start-[42%] 4k:start-[43%] flex items-center justify-center bg-transparent"
    }`}
  >
    <div className="rounded-xl p-0">
      <div
        className={`relative ${
          isMobile
            ? "mobile-xs:w-24 mobile-xs:h-24 mobile-sm:w-32 mobile-sm:h-32 mobile-md:w-36 mobile-md:h-36 mobile-lg:w-40 mobile-lg:h-40 tablet-sm:w-44 tablet-sm:h-44 tablet:w-48 tablet:h-48 tablet-lg:w-52 tablet-lg:h-52"
            : "laptop:w-52 laptop:h-52 desktop:w-80 desktop:h-80"
        }`}
      >
        <Image
          src={isMobile ? mobileImage : desktopImage}
          alt="FIFA Trophy"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
);

export default TrophyLogo;
