import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const entryPoints = {
  // main
  main: path.resolve(__dirname, 'index.html'),
  // background service
  background: path.resolve(__dirname, 'src/background_service.ts'),

  // content scripts
  GetElementXPath: path.resolve(__dirname, 'src/content_scripts/GetXPathForElement.ts'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: entryPoints,
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        chunkFileNames: '[name].js',
      }
    }
  }
})
