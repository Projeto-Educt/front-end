/** @type {import('next').NextConfig} */

import path from 'path';

const dirname = path.resolve('./src');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(dirname, '**')],
  },
};

export default nextConfig;
