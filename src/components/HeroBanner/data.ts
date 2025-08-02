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
      variant: "primary",
    },
  ],
  images: {
    colorLayers: "/images/colorLayers.png",
    mobileColorLayers: "/images/mobileColorLayers.png",
    centerLogo: "/images/middleTrophyText.png",
    mobileCenterLogo: "/images/mobileMiddleTrophyText.png",
    players: "/images/players.png",
    mobilePlayers: "/images/mobilePlayers.png",
  },
};
