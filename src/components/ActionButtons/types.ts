import { HeroBannerData } from "../HeroBanner/types";

export interface ActionButtonsProps {
  buttons: HeroBannerData["buttons"];
  isMobile: boolean;
  onButtonClick: (action: string) => void;
}
