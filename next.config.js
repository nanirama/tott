/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['res.cloudinary.com'],
  },  
}

module.exports = nextConfig

