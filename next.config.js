/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'blog.socialchamp.com',
      'img.freepik.com',
      'images.unsplash.com',
      'static.wixstatic.com'
    ],
  },
};

module.exports = nextConfig; 