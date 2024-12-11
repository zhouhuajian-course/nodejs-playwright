import { test, expect } from '@playwright/test';

test('测试页面基础', async ({ page }) => {
  await page.goto('/feedback');
  await expect(page.getByRole('heading')).toContainText('用户反馈');
  await expect(page.getByText('（接收处理结果）')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toHaveValue('user@email.com');
});