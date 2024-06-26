/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'firebasestorage.googleapis.com', 'lh3.googleusercontent.com', 'lorenzon.uz', 'www.lorenzon.uz', 'server.lorenzon.uz'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
