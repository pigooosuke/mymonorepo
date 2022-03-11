/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  serverRuntimeConfig: {
    BACKEND_URI: process.env.SERVER_BACKEND_URI,
  },
  publicRuntimeConfig: {
    BACKEND_URI: process.env.PUBLIC_BACKEND_URI,
  },
};

module.exports = nextConfig;
