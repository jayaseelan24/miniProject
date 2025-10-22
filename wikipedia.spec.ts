import { test } from '@playwright/test';
import { WikipediaHomePage } from '../../pages/WikipediaHomePage';
import { WikipediaAccountPage } from '../../pages/WikipediaAccountPage';
import emailData from '../data/email-data.json';

for (const data of emailData) {
  test(`Wikipedia account creation with email: ${data.email}`, async ({ page }) => {
    test.setTimeout(90000);

    const homePage = new WikipediaHomePage(page);
    const accountPage = new WikipediaAccountPage(page);

    await test.step('Navigate and search Wikipedia', async () => {
      await homePage.navigate();
      await homePage.search('Testing');
    });

    await test.step('Go to Create Account page', async () => {
      await homePage.goToCreateAccount();
    });

    await test.step('Enter email and submit form', async () => {
      await accountPage.enterEmail(data.email);
      await accountPage.submitForm();
    });

    await test.step('Verify warning message', async () => {
      await accountPage.verifyWarningMessage();
    });
  });}