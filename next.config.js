/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Landing khóa học tĩnh: brandtalk.asia/MKTclaude
  async rewrites() {
    return [
      { source: '/MKTclaude', destination: '/MKTclaude/index.html' },
      { source: '/mktclaude', destination: '/MKTclaude/index.html' },
    ]
  },
}

module.exports = nextConfig
