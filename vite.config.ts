import {defineConfig} from 'vite';
import {tanstackStart} from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  // React-github-fork-ribbon assigns to Node's `global`
  define: {
    global: 'globalThis',
  },
  build: {
    cssCodeSplit: true,
    modulePreload: {
      resolveDependencies(_filename, deps) {
        // Avoid eagerly preloading every lazy chunk from the shell
        return deps.filter(
          (dep) => !dep.includes('group-card') && !dep.includes('extralife'),
        );
      },
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Full HTML at build time. Not runtime SSR.
      pages: [{path: '/'}, {path: '/oc/extralife'}],
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
    }),
    viteReact(),
  ],
});
