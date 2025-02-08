import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: { turbo: { treeShaking: true } },
  basePath: NODE_ENV === 'development' ? '' : '/broca',
  distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
  images: { unoptimized: true },
};

export default nextConfig;
