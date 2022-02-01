/** @type {import('next').NextConfig} */

const nextConfig = {
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
