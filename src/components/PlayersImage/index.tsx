import React from "react";
import Image from "next/image";
import { PlayersImageProps } from "./types";

const PlayersImage: React.FC<PlayersImageProps> = ({
  isMobile,
  mobileImage,
  desktopImage,
}) => (
  <div
    className={`${
      isMobile
        ? "relative flex-1 mobile-xs:min-h-[200px] mobile-sm:min-h-[250px] mobile-md:min-h-[300px] mobile-lg:min-h-[350px] mobile-xl:min-h-[400px] tablet-sm:min-h-[450px] tablet:min-h-[500px] tablet-lg:min-h-[550px]"
        : "flex-1 relative  h-1/2"
    }`}
  >
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={isMobile ? mobileImage : desktopImage}
        alt="Players Celebrating"
        fill
        className="object-cover object-center"
        sizes={isMobile ? "100vw" : "50vw"}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-t from-black/30 via-transparent to-transparent"
            : "bg-gradient-to-l from-transparent via-transparent to-black/20"
        }`}
      ></div>
    </div>
  </div>
);

export default PlayersImage;
