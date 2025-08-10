import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["www.hlads.club"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hlads.club",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
