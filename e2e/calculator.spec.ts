import { expect, test, type Page } from '@playwright/test'

async function clickBtn(page: Page, label: string) {
  await page.getByRole('button', { name: label, exact: true }).click()
}

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Calculatrice', () => {
  test('affiche 0 au chargement', async ({ page }) => {
    await expect(page.locator('.display-value')).toHaveText('0')
  })

  test('addition : 3 + 4 = 7', async ({ page }) => {
    await clickBtn(page, '3')
    await clickBtn(page, '+')
    await clickBtn(page, '4')
    await clickBtn(page, '=')

    await expect(page.locator('.display-value')).toHaveText('7')
  })
})
