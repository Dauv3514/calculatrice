// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    // options de configuration de vitest
    // environment: 'node' 'jsdom',
    environment: 'jsdom',
    globals: true, // pour utiliser les fonctions expect, describe, etc. sans les importer
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['e2e/**', 'node_modules/**', 'dist/**'],
  },
})