import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: ["s3-us-west-2.amazonaws.com", "media.licdn.com"],
  },
};

export default nextConfig;
