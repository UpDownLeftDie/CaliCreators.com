/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true
  },
  env: {
    ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
