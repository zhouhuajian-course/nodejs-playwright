import { test, expect } from '@playwright/test';

// 钩子 hooks 测试前的准备工作 测试后的清理工作
test.beforeEach(async ({ page }) => {
  await page.goto('/feedback');
});

// 分组
test.describe('测试基础', () => {
  test('测试页面基础', async ({ page }) => {
    // await page.goto('/feedback');
    await expect(page.getByRole('heading')).toContainText('用户反馈');
    await expect(page.getByText('（接收处理结果）')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toHaveValue('user@email.com');
    // expect page
    await expect(page).toHaveTitle("用户反馈")
    // expect locator
    await expect(page.locator('input[name="email"]')).toHaveAttribute("value", "user@email.com")
    // expect value
    expect(3 - 2).toBe(1)
    expect("playwright test").toContain("test")
    // 区别
    await expect(page.locator("form div")).toHaveCount(5)
    expect(await page.locator("form div").count()).toBe(5)
  });
});

test.describe('测试反馈失败', () => {

  test('测试字数不够', async ({ page }) => {
    // await page.goto('http://localhost/feedback');
    await page.locator('textarea[name="content"]').fill('111');
    await page.getByRole('button', { name: '提交' }).click();
    await expect(page.getByText('请输入10个字以上的反馈内容！')).toBeVisible();
  });



  test('测试使用默认邮箱', async ({ page }) => {
    // await page.goto('http://localhost/feedback');
    await page.locator('textarea[name="content"]').fill('111111111111111111');
    await page.getByRole('button', { name: '提交' }).click();
    await expect(page.getByText('请勿使用默认邮箱地址 user@email.com ！')).toBeVisible();
  });

});

test.describe('测试反馈成功', () => {
  test('测试反馈成功', async ({ page }) => {
    // await page.goto('http://localhost/feedback');
    await page.locator('textarea[name="content"]').fill('111111111111111111');
    await page.locator('input[name="email"]').fill('user@email.c1om');
    await page.getByRole('button', { name: '提交' }).click();
    await expect(page.getByText('反馈成功！处理结果，我们将通过邮件发送给您！')).toBeVisible();
  });
});






