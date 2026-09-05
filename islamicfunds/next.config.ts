import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      // Allow Server Actions when the browser reaches the dev server via a
      // host that differs from the one Next expects (localhost vs 127.0.0.1,
      // LAN IP, or a proxy/tunnel). Add your specific host here if needed.
      allowedOrigins: ["localhost:3000", "127.0.0.1:3000"],
    },
  },
};

export default nextConfig;
