import { defineConfig } from 'vite'
// import { resolve } from "node:path";
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,map}'],
      },
    }),
  ],
  // resolve: {
  //   alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  // },
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    open: false,
    port: 4000,
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    manifest: true,
    sourcemap: 'hidden',
    chunkSizeWarningLimit: 1024, // 1mb
    assetsInlineLimit: 5120, // 5kb
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
      onLog: (level, log, handler) => {
        if (log.cause && log.cause.message === `Can't resolve original location of error.`) {
          return;
        }
        handler(level, log);
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      legalComments: 'none',
    },
  },
})
