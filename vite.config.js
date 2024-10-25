import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   base: "/swcfd-website/",
   resolve: {
      alias: {
         "@toolpad/core": "/path/to/toolpad/core",
      },
   },
});
