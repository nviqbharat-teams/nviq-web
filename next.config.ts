import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "naviqbharat.com",
          },
        ],
        destination: "https://www.naviqbharat.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
          {
            type: "host",
            value: "www.naviqbharat.com",
          },
        ],
        destination: "https://www.naviqbharat.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
