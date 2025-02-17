/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ Disable Image Optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent ESLint errors from breaking deployment
  },
};

module.exports = nextConfig;
