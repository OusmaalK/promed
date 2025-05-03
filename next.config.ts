/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Pour les SVG
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.jsx'
        },
        // Pour les images PNG
        '*.png': {
          loaders: ['next-image-loader'],
          as: '*.js'
        }
      }
    }
  },
  images: {
    disableStaticImages: true // Important pour Turbopack
  }
};

module.exports = nextConfig;