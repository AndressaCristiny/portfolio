const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["s3-us-west-2.amazonaws.com", "media.licdn.com"],
  },
};

export default nextConfig;
