import { Page, expect } from '@playwright/test';

export class WikipediaHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.wikipedia.org/');
  }

  async search(term: string) {
    const searchBox = this.page.getByRole('searchbox', { name: 'Search Wikipedia' });

    await searchBox.click();

    await searchBox.press('CapsLock');

    await searchBox.fill(term.charAt(0));

    await searchBox.press('CapsLock');

    await searchBox.fill(term);

    await this.page.locator('xpath=//*[@id="search-form"]/fieldset/button').click();

    await expect(this.page.locator('xpath=//*[@id="mw-content-subtitle"]/span/a')).toBeVisible();
  }

  async goToCreateAccount() {
    await this.page.getByRole('link', { name: 'Create account' }).click();
  }
}
