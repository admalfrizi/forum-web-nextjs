import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  serverExternalPackages: [
    "pino", "pino-pretty"
  ],
  devIndicators: false,
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: ""
      },
    ],
  },
};

export default nextConfig;
