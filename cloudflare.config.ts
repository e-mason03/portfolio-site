import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "portfolio-site",
    "compatibilityDate": "2026-10-06",
    "observability": {
      "enabled": true
    }
  }
});
