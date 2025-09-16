// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
};

export default nextConfig;  // ✅ Use export default instead of module.exports
