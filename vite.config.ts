import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  plugins: [
    vue(),

    // @ts-ignore
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
})
