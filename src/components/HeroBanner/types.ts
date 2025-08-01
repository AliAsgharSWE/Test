// types.ts
export interface HeroBannerData {
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    text: string;
    action: string;
    variant: "primary" | "secondary";
  }[];
  images: {
    colorLayers: string;
    centerLogo: string;
    players: string;
    mobileColorLayers: string;
    mobilePlayers: string;
  };
}
