import { test, expect } from '@playwright/test';

test('has Download MySudo text', async ({ page }) => {
  await page.goto('https://www.anonyome.com');

  // Verify that "Download MySudo" text is present on the page (using first occurrence since there are multiple)
  await expect(page.getByText('Download MySudo').first()).toBeVisible();
});
