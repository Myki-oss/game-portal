// next.config.js
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // MATIKAN TURBOPACK
  turbo: false,
  turbopack: false,

  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd()),
    };
    return config;
  },
};

export default nextConfig;
