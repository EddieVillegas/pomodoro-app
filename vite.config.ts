import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { test } from 'vitest';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    exclude: [
      ...configDefaults.exclude,
      "tests/*"
    ],
  },
  plugins: [react()],
})
