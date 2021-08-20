import { test, expect } from '../fixtures/fixture';

test("takes me to docs page", async ({ landingPage }) => {
  await landingPage.clickOnDocs();
  await expect((await landingPage.getPage()).locator('header h1')).toHaveText('Getting Started');
});
