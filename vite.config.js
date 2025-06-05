import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  srcDir: 'src',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        info: resolve(__dirname, 'info.html'),
        info: resolve(__dirname, 'manual.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src'),
      '@scripts': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
}) 
