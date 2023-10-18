/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  // webpack(config) {
  //   config.experimental = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
