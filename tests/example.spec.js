import { test, expect } from '@playwright/test';

test('Minh họa sức mạnh vượt trội của Playwright', async ({ page }) => {

  await page.goto('https://example.com/demo');
  await page.locator('.menu-item').hover();
  await page.getByRole('button', { name: 'Đăng ký ngay' }).click();


  const shadowInput = page.locator('settings-ui >> input#search');
  await shadowInput.fill('Playwright is awesome');


  await expect(page.locator('.status-message')).toHaveText('Thành công', { timeout: 5000 });
  await expect(page).toHaveURL(/.*dashboard/);


});