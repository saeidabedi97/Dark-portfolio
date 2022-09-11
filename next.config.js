/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
