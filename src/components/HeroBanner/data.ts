import { HeroBannerData } from "./types";

export const heroBannerData: HeroBannerData = {
  title: "Score Big with Our",
  subtitle: "Exclusive Packages",
  description:
    "Immerse yourself in the ultimate celebration of sports and culture with official hospitality packages featuring premium seats, entertainment, cuisine, and more - across 16 North American cities.",
  buttons: [
    {
      text: "Book Package",
      action: "book-package",
      variant: "primary",
    },
    {
      text: "Register Interest",
      action: "register-interest",
      variant: "secondary",
    },
  ],
  images: {
    leftBackground: "/images/leftSide.png",
    centerLogo: "/images/middleTrophyText.png",
    rightPlayers: "/images/rightSide.png",
    fullBackground: "/images/fullBackground.png",
  },
};
