import { test, expect } from '@playwright/test';

test.describe('Smoke Tests - Core Functionality', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Civic Safety Advisors/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('all main pages are accessible', async ({ page }) => {
    const pages = [
      { url: '/', heading: /Expert security consulting/i },
      { url: '/about', heading: /About Civic Safety Advisors/i },
      { url: '/services', heading: /Our Services/i },
      { url: '/industries', heading: /Industries We Serve/i },
      { url: '/blog', heading: /Security Insights & Resources/i },
      { url: '/contact', heading: /Contact Us/i },
      { url: '/privacy', heading: /Privacy Policy/i },
      { url: '/terms', heading: /Terms of Service/i },
    ];

    for (const { url, heading } of pages) {
      await page.goto(url);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    }
  });

  test('service pages load correctly', async ({ page }) => {
    await page.goto('/services/threat-vulnerability-assessment');
    await expect(page.getByRole('heading', { name: /Threat & Vulnerability Assessment/i })).toBeVisible();

    await page.goto('/services/active-shooter-training');
    await expect(page.getByRole('heading', { name: /Active Shooter Training/i })).toBeVisible();
  });

  test('blog post pages load correctly', async ({ page }) => {
    await page.goto('/blog/5-security-priorities-houses-of-worship');
    await expect(page).toHaveURL(/\/blog\/5-security-priorities-houses-of-worship/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigation between pages works', async ({ page }) => {
    await page.goto('/');

    // Click header nav link
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    await expect(page).toHaveURL('/services');

    // Click another nav link
    await page.getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL('/about');
  });

  test('contact form is present and functional', async ({ page }) => {
    await page.goto('/contact');

    // Check form exists
    await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible();

    // Try to submit empty form - should show validation
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText(/required/i).first()).toBeVisible();
  });
});
