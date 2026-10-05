import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // Locale paths used by the previous version of the site.
      { source: "/pt-BR", destination: "/pt", permanent: true },
      { source: "/pt-BR/:path*", destination: "/pt", permanent: true },
    ];
  },
};

export default nextConfig;
