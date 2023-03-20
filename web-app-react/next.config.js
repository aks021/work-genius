/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSOCKET_HOST:process.env.WEBSOCKET_HOST,
    WEBSOCKET_PORT:process.env.WEBSOCKET_PORT
  },
}

module.exports = nextConfig
