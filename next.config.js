/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.29.131.14:3001/api/:path*", // ✅ Fix Backend API URL
      },
    ];
  },
};

module.exports = nextConfig;

