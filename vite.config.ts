import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Warn early if a chunk creeps back up in size.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Keep the rarely-changing libraries in their own long-lived chunks so
        // a content edit does not invalidate the whole bundle for returning
        // visitors.
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
