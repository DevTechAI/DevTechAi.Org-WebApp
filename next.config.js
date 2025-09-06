/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out this line:
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'devtechai.org',
          },
        ],
        destination: 'https://www.devtechai.org/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'http://devtechai.org',
          },
        ],
        destination: 'https://www.devtechai.org/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
