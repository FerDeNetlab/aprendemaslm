import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.clubaprendemas.com' }],
        destination: 'https://clubaprendemas.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
