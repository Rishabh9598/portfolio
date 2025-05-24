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
  // Add trailing slashes to ensure consistent routing
  trailingSlash: true,
  // Ensure proper static generation
  staticPageGenerationTimeout: 120,
  // Enable strict mode for better error detection
  reactStrictMode: true,
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig; 