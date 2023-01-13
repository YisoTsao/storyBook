/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    SG_API: process.env.SG_API,
  },
  publicRuntimeConfig: {
    SG_API: process.env.SG_API,
  },
};

module.exports = nextConfig;
