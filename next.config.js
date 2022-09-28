/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
};

module.exports = nextConfig;
