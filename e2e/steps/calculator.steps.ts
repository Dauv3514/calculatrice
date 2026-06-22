import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CalculatorWorld } from '../support/world';

Given("l'application est active", async function (this: CalculatorWorld) {
  await expect(this.page.locator('.calculator')).toBeVisible();
});

When('je clique sur {string}', async function (this: CalculatorWorld, label: string) {
  await this.page.getByRole('button', { name: label, exact: true }).click();
});

When('je saisis {string}', async function (this: CalculatorWorld, value: string) {
  for (const character of value) {
    await this.page.getByRole('button', { name: character, exact: true }).click();
  }
});

Then("l'expression est vide", async function (this: CalculatorWorld) {
  await expect(this.page.locator('.display-expression')).toHaveText('');
});

Then("l'affichage montre {string}", async function (this: CalculatorWorld, expectedValue: string) {
  await expect(this.page.locator('.display-value')).toHaveText(expectedValue);
});
