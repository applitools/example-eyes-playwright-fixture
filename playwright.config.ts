import type { FileLogHandlerPlain } from '@applitools/eyes-playwright';
import type { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig<EyesFixture>({
  testDir: './tests',
  reporter: '@applitools/eyes-playwright/reporter',
  use: {
    eyesConfig: {
      type: 'ufg',
      logConfig: {
        type: 'file',
        filename: 'applitools.log',
      } satisfies FileLogHandlerPlain,
      failTestsOnDiff: 'afterAll'
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
});
