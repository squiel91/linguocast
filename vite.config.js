import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [remix()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'), // Change this to the path of your app folder
    },
  },
});