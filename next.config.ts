import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,

  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'framer-motion'],
  },

  async headers() {
    return [
      {
        source: '/MobinaMoghadamCV.pdf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
