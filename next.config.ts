import type { NextConfig } from "next";
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
