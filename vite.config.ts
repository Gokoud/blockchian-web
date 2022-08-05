import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {// css 预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import"./src/style/common.scss";'
      }
    }
  }
})
