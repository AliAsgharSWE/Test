export interface HeroBannerButton {
  text: string;
  action: string;
  variant?: "primary" | "secondary";
}

export interface HeroBannerImages {
  leftBackground: string;
  centerLogo: string;
  rightPlayers: string;
  fullBackground?: string;
}

export interface HeroBannerData {
  title: string;
  subtitle: string;
  description: string;
  buttons: HeroBannerButton[];
  images: HeroBannerImages;
}

export interface HeroBannerProps {
  data?: HeroBannerData;
  className?: string;
  onButtonClick?: (action: string) => void;
}
