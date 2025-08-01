import HeroBanner from "@/src/components/HeroBanner";
import { heroBannerData } from "@/src/components/HeroBanner/data";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner data={heroBannerData} />
    </div>
  );
};

export default HomePage;
