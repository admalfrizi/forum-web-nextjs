import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  serverExternalPackages: [
    "pino", "pino-pretty"
  ],
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: ""
      },

    ],
  },
};

export default nextConfig;
