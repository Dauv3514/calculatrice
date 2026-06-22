import { World, Before, After, setWorldConstructor } from '@cucumber/cucumber';
import type { IWorldOptions } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { Browser, Page } from 'playwright';

export class CalculatorWorld extends World {
  browser!: Browser;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CalculatorWorld);

Before(async function (this: CalculatorWorld) {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
  await this.page.goto('http://localhost:5173');
});

After(async function (this: CalculatorWorld) {
  await this.browser?.close();
});