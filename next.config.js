/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api_v1: process.env.API_V1,
  },
};

module.exports = nextConfig;
