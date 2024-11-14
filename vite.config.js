import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'] // Bu gibi dışa bağımlılıkları doğru şekilde ayarlayın.
    }
  }
});
