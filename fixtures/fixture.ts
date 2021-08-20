import { test as baseTest } from '@playwright/test';
import LandingPage from '../models/landing.page';

export const test = baseTest.extend<{ landingPage: LandingPage }>({
  landingPage: (async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.navigate();
    return landingPage;
  }),
});

export const expect = test.expect;