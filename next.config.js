/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    path: '/_next/image',
    loader: 'default',
    domains: ['res.cloudinary.com'],
  },  
}

module.exports = nextConfig

