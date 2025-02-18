import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ Required for static export to work properly
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from stopping deployment
  },
  output: "export", // ✅ Ensures static export (REMOVE if using SSR)
  trailingSlash: true, // ✅ Fixes static route issues in some cases
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
