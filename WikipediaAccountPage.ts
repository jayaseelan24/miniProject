import { Page, expect } from '@playwright/test';
export class WikipediaAccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterEmail(email: string) {
    const emailBox = this.page.getByRole('textbox', { name: 'Email address (recommended)' });
    await emailBox.click();
    await emailBox.fill(email);
  }

  async submitForm() {
    await this.page.locator('xpath=//*[@id="wpCreateaccount"]').click();
  }

  async verifyWarningMessage() {
    // const warningMessage = this.page.locator('text=Please look for an email from us to verify your address.');
    // await expect(warningMessage).toBeVisible();
    const warningMessage = this.page.locator('text=Email is required to recover your account if you lose your password or log in from a unfamiliar location or new browser.');
await expect(warningMessage).toBeVisible();
  }}