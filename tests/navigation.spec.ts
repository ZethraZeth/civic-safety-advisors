import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should display header with logo', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('CIVIC SAFETY ADVISORS')).toBeVisible();
  });

  test('should navigate to all main pages via header', async ({ page }) => {
    await page.goto('/');

    // Navigate to About
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: /About Civic Safety Advisors/i })).toBeVisible();

    // Navigate to Services
    await page.getByRole('link', { name: 'Services' }).click();
    await expect(page).toHaveURL('/services');
    await expect(page.getByRole('heading', { name: /Our Services/i })).toBeVisible();

    // Navigate to Industries
    await page.getByRole('link', { name: 'Industries' }).click();
    await expect(page).toHaveURL('/industries');
    await expect(page.getByRole('heading', { name: /Industries We Serve/i })).toBeVisible();

    // Navigate to Blog
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL('/blog');
    await expect(page.getByRole('heading', { name: /Security Insights & Resources/i })).toBeVisible();

    // Navigate to Contact
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /Contact Us/i })).toBeVisible();
  });

  test('should display footer with links', async ({ page }) => {
    await page.goto('/');

    // Check footer content
    await expect(page.getByText('© 2025 Civic Safety Advisors')).toBeVisible();

    // Check footer links exist
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Terms of Service' })).toBeVisible();
  });

  test('mobile menu should work', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Click hamburger menu button (force click to avoid interception issues)
    await page.getByRole('button', { name: /Open menu/i }).click({ force: true });

    // Check mobile menu is visible with links
    await expect(page.getByRole('link', { name: 'About' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' }).nth(1)).toBeVisible();
  });
});
