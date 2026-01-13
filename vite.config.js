import fs from 'fs';

import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDevHTTPSEnabled =
    typeof env.HTTPS_CERT === 'string' && typeof env.HTTPS_KEY === 'string';
  return {
    server: isDevHTTPSEnabled
      ? {
          https: {
            key: fs.readFileSync(env.HTTPS_KEY),
            cert: fs.readFileSync(env.HTTPS_CERT),
          },
        }
      : undefined,
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/testing/setup.js',
      include: ['src/**/*.{spec,test}.js'],
    },
    plugins: [
      eslint(),
      {
        name: 'csp',
        transformIndexHtml(html) {
          const csp = `default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' https://avatars.githubusercontent.com; style-src 'self'; form-action 'self'; object-src 'none'; media-src 'self'; base-uri 'none'; upgrade-insecure-requests;`;
          html = html.replace(
            /<head>/,
            `<head>\n<meta http-equiv="Content-Security-Policy" content="${csp}">`
          );
          return html;
        },
      },
    ],
    build: {
      outDir: 'dist/browser',
      rollupOptions: {
        output: {
          entryFileNames: '[name].[hash].js',
          chunkFileNames: '[name].[hash].js',
          assetFileNames: '[name].[hash].[ext]',
        },
      },
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        format: {
          comments: false,
        },
        parse: {
          html5_comments: false,
        },
        sourceMap: false,
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
});
