/** @type {import('next').NextConfig} */

import path from 'path';

const dirname = path.resolve('./src');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(dirname, '**')],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /stories|tests/,
    });

    return config;
  },
};

export default nextConfig;
