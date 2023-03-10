/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://scraping.preferee21.workers.dev/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
