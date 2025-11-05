
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    allowedDevOrigins: [
      '6000-firebase-studio-1762192148188.cluster-ikslh4rdsnbqsvu5nw3v4dqjj2.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
