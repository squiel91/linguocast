import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [remix()],
  // server: {
  //   proxy: {
  //     // '/foo': 'http://localhost:3001',
  //     '/api': {
  //       target: 'http://localhost:3001',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'), // Change this to the path of your app folder
    },
  },
});