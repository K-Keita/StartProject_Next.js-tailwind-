/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s.yimg.com",
      "www.reuters.com",
      "media.wired.com",
      "www.androidcentral.com",
      "i.guim.co.uk",
      "images.macrumors.com",
    ],
  },
};

module.exports = nextConfig
