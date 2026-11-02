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
  // Tạm thời: các trang còn lại của website chưa hoàn thiện, nên đưa mọi đường dẫn khác về landing.
  // Muốn mở lại website: xóa khối redirects này.
  async redirects() {
    return [
      {
        source: '/((?!MKTclaude|mktclaude|_next|api|favicon.ico).*)',
        destination: '/MKTclaude',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
