import { test, expect } from '@playwright/test';

test('测试页面基础', async ({ browser, context, page }) => {
  await page.goto('http://localhost/login');
  await expect(page.locator('input[name="username"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.getByRole('button')).toContainText('登录');
});

test('测试登录成功', async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.locator('input[name="username"]').fill('zhouhuajian');
  await page.locator('input[name="password"]').fill('zhouhuajian');
  await page.getByRole('button', { name: '登录' }).click();
  await expect(page.getByText('zhouhuajian, 欢迎回来！')).toBeVisible();
});


// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
