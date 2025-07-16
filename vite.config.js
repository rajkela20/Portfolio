import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          /* Only put global SCSS variables/mixins here */
          $primary-color: #6B46C1;
          $text-color: #2D3748;
          
          /* Optional - base styles if needed */
          body {
            margin: 0;
            padding: 0;
          }
        `
      }
    }
  }
});