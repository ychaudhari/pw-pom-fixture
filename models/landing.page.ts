import { Page } from '@playwright/test';

export default class LandingPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<LandingPage> {
    await this.page.goto("http://www.playwright.dev");
    return this;
  }

  async clickOnDocs(): Promise<LandingPage> {
    await this.page.click('"Docs"');
    return this;
  }

  async getPage(): Promise<Page> {
    return this.page;
  }
}