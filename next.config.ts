const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: isProd ? "/portfolio/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
