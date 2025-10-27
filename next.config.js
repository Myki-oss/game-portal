/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // biar Next.js bisa export ke HTML statis
  output: "export",

  // biar komponen <Image /> gak error pas di-export
  images: {
    unoptimized: true,
  },

  // perbaiki warning workspace root
  outputFileTracingRoot: __dirname,

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;
