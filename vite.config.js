import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import terser from '@rollup/plugin-terser'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    minify: false, // wyłącz domyślny esbuild
    rollupOptions: {
      plugins: [
        terser({
          format: {
            comments: false, // usuń komentarze
          },
          compress: {
            drop_console: true, // usuń console.log
            drop_debugger: true
          },
          mangle: true // skróć nazwy zmiennych
        })
      ]
    }
  }
})
