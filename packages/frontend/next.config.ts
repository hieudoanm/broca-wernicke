import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
};

export default nextConfig;
