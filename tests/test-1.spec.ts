import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Generate unique email using timestamp to avoid duplicate registration errors
  const timestamp = Date.now();
  const uniqueEmail = `testuser${timestamp}@example.com`;

  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByText('Register here').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('ccc');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('hhh');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('email@example.com').fill(uniqueEmail);
  await page.getByPlaceholder('email@example.com').press('Tab');
  await page.getByPlaceholder('enter your number').fill('1234567890');
  await page.getByPlaceholder('enter your number').press('Tab');
  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByPlaceholder('Passsword', { exact: true }).click();
  await page.getByPlaceholder('Passsword', { exact: true }).fill('Passw0rd#1');
  await page.getByPlaceholder('Passsword', { exact: true }).press('Tab');
  await page.getByPlaceholder('Confirm Passsword').fill('Passw0rd#1');
  await page.getByPlaceholder('Confirm Passsword').press('Tab');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Register' }).click();

  // Wait for and verify the success message appears
  const successHeading = page.getByRole('heading', { name: 'Account Created Successfully' });
  await expect(successHeading).toBeVisible({ timeout: 10000 });
});