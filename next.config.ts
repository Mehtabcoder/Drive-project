// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint from breaking build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ disables TS errors from breaking build
  },
};

module.exports = nextConfig;