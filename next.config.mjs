/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // or specify exact hostname like 'images.unsplash.com'
      },
    ],
  },
};

export default nextConfig;
