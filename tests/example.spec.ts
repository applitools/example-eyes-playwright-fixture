import { test, expect } from '@applitools/eyes-playwright/fixture';

test('iframe @nice', async ({ page }) => {
  await page.setContent('Hello, world! '+randEmoji())
  await expect(page).toHaveScreenshot()
});

function randEmoji() {
  const emojis = ['😀', '😂', '😎', '😍', '🤔', '🙃', '😴', '🤖', '👻', '🎃'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
