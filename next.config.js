/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    assetPrefix: isProd ? "/tgfnds.github.io" : "",
    reactStrictMode: true,
    images: {
        loader: "custom",
        domains: ["images.ctfassets.net"]
    },
    env: {
        CONTENTFUL_BASE_URL: "https://cdn.contentful.com",
    },
}

module.exports = nextConfig
