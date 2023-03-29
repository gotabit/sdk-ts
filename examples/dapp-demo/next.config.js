/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TEST_MNEMONIC: process.env.TEST_MNEMONIC,
  },
}

module.exports = nextConfig
