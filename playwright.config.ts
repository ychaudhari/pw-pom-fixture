import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  timeout: 15000,
  outputDir: '../output',
  use: {
    headless: false,
  },
};
export default config;
