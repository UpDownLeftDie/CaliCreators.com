/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
