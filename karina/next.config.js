/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
      API_KEY: `940b46cd1ee7213b55c2b72f2e0d3acf`
  }, 
  images: {
      domains: ["image.tmdb.org"]
  }
};