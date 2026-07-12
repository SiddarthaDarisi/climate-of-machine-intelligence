/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // For GitHub Pages project sites (https://<user>.github.io/<repo>/), uncomment
  // and set basePath/assetPrefix to your repo name:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;
