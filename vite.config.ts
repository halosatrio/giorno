import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": Bun.fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Source - https://stackoverflow.com/a/75839023
  // Posted by ForcedFakeLaugh, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-08-17, License - CC BY-SA 4.0
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  // OR
  // build: {
  //   target: 'esnext' //browsers can handle the latest ES features
  // }
});
