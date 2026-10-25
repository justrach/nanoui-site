import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site is all prerendered pages: no incremental cache is needed.
export default defineCloudflareConfig();
