import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/ms-draft/' : '',
  basePath: isProd ? '/ms-draft' : '',
  trailingSlash: true,
}

export default nextConfig
