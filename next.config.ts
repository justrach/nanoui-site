import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // No Cache Components: they hang on Workers (its setTimeout), and every
  // page here is prerendered anyway.
  // The images are WebP already, sized for the page: served as they are.
  images: { unoptimized: true },
  turbopack: {
    // This folder, not a lockfile further up (one sits in the home folder).
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

// Cloudflare's bindings in `next dev`, as on Workers.
initOpenNextCloudflareForDev();
