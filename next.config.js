/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    IMGUR_CLIENT_ID: process.env.IMGUR_CLIENT_ID,
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
