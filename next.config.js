// @ts-nocheck
 
/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'
 
const nextConfig = {
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? '/github-pages/' : undefined,
  basePath: '/github-pages',
  assetPrefix: '/github-pages/',
}
 
module.exports = nextConfig