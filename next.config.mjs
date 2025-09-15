/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    https: {
      key: './cert/localhost+2-key.pem',
      cert: './cert/localhost+2.pem',
    },
  },
};


export default nextConfig;
