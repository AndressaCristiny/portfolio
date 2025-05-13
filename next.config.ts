import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    domains: ["s3-us-west-2.amazonaws.com", "media.licdn.com"],
  },
};

export default nextConfig;
