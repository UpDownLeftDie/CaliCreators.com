/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  swcMinify: true,
  env: {
    ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
