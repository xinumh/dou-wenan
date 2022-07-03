import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icon')],
      symbolId: 'icon-[name]'
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 9000,
    proxy: {
      '/api': 'http://yapi.wonder.wang/mock/11/'
    },
    hmr: {
      overlay: false
    }
  }
})
