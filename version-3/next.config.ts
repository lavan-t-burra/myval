import type { NextConfig } from "next";
    
    const nextConfig: NextConfig = {
      // Your Next.js config
      output: 'export',
      basePath: '/myval/version-3',
      images: { unoptimized: true },
    };
    
    export default nextConfig;
