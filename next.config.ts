import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.stunda.be" }],
        destination: "https://stunda.be/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
