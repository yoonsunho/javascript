import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {//@는 ./src로 볼거야(baseDir 과 유사 역할)
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
