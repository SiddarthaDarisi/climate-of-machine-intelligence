/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // GitHub Pages project site: https://siddarthadarisi.github.io/climate-of-machine-intelligence/
  basePath: '/climate-of-machine-intelligence',
  assetPrefix: '/climate-of-machine-intelligence/',
};

module.exports = nextConfig;
