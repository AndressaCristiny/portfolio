// next.config.js ou next.config.ts
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true,
    domains: ["s3-us-west-2.amazonaws.com", "media.licdn.com"],
  },
};

export default nextConfig;
