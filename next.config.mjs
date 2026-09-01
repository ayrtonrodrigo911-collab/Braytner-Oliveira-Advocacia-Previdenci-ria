/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite abrir o servidor de desenvolvimento pelo endereço da rede local.
  // Sem isso, o Next 16 bloqueia os chunks JS e a página fica em branco.
  allowedDevOrigins: ['192.168.15.44', 'localhost', '127.0.0.1'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
