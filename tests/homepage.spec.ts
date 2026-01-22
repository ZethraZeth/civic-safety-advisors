import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Civic Safety Advisors/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Check for main headline
    await expect(page.getByRole('heading', {
      name: /Expert security consulting for organizations/i
    })).toBeVisible();

    // Check for CTA buttons
    await expect(page.getByRole('link', { name: /Schedule a Consultation/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /View Our Services/i })).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    await page.goto('/');

    // Check for Trust Indicators
    await expect(page.getByText(/Trusted Security Expertise/i)).toBeVisible();

    // Check for Services Overview
    await expect(page.getByText(/How We Help Protect Your Organization/i)).toBeVisible();

    // Check for Industries section
    await expect(page.getByText(/Dedicated to Organizations That Serve Others/i)).toBeVisible();
  });

  test('should navigate to services page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /View Our Services/i }).first().click();
    await expect(page).toHaveURL('/services');
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Schedule a Consultation/i }).first().click();
    await expect(page).toHaveURL('/contact');
  });
});
