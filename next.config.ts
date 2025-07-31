import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const mdxConfig = withMDX({
  extension: /\.mdx$/,
  options: {},
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = mdxConfig(nextConfig);
