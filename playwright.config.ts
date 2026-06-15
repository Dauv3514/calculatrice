import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e', // dossier contenant les tests
  fullyParallel: true, // execution parallele des tests
  retries: 1, // nombre de reessais en cas d'echec (CI: 2)
  reporter: 'html', // format du rapport : 'list', 'html', 'dot'
  use: {
    baseURL: 'http://localhost:5173', // URL de base pour page.goto('/')
    trace: 'on-first-retry', // enregistre une trace en cas d'echec
    screenshot: 'only-on-failure', // capture d'ecran sur echec
    video: 'off', // enregistrement video
    headless: true, // pas d'interface graphique (CI)
  },

  // Navigateurs testes
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // Mobile
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  ],

  // Demarrage automatique du serveur de developpement
  webServer: {
    command: 'npx vite',
    url: 'http://localhost:5173',
    reuseExistingServer: true, // reutilise le serveur si deja lance
    timeout: 10_000,
  },
})
