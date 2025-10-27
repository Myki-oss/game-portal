/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // matiin eslint pas build di vercel biar gak blok deploy
  eslint: {
    ignoreDuringBuilds: true,
  },

  // opsional: kalau kamu pakai <Image /> dan belum set domains dll, ini aman dibiarkan
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;
