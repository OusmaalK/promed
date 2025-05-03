/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }, { isServer }: any) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;