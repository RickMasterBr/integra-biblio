/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Desativa a otimização de imagens no modo export
  },
};

export default nextConfig;
