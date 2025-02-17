import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  
  images: {
    unoptimized: true, // ✅ Disable Image Optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent ESLint errors from breaking deployment
  },
  /**
   * Extend the default webpack configuration.
   *
   * @param {Configuration} config - The current webpack configuration.
   * @param {object} options - Build options.
   * @param {boolean} options.isServer - Whether the build is for the server.
   * @returns {Configuration} The modified webpack configuration.
   */
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // ✅ Ensure config.module exists
    if (!config.module) {
      config.module = { rules: [] as RuleSetRule[] };
    }

    // ✅ Ensure config.module.rules exists before modifying it
    if (!config.module.rules) {
      config.module.rules = [];
    }

    if (isServer) {
      config.module.rules.push({
        test: /\.node$/,
        use: "node-loader",
      });
    }

    return config;
  },
};

export default nextConfig;
