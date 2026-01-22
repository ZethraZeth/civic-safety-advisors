import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Send Us a Message/i })).toBeVisible();
    await expect(page.getByLabel(/^Name/i)).toBeVisible();
    await expect(page.getByLabel(/Organization Name/i)).toBeVisible();
    await expect(page.getByLabel(/^Email/i)).toBeVisible();
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Click submit without filling form
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Check for error messages
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Organization name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.getByLabel(/Email/i).fill('invalid-email');
    await page.getByRole('button', { name: /Send Message/i }).click();

    await expect(page.getByText(/Please enter a valid email address/i)).toBeVisible();
  });

  test('should allow form submission with valid data', async ({ page }) => {
    // Fill out the form
    await page.getByLabel(/^Name/i).fill('John Doe');
    await page.getByLabel(/Organization Name/i).fill('Test Church');
    await page.getByLabel(/^Email/i).fill('john@example.com');
    await page.getByLabel(/Phone/i).fill('555-1234');
    await page.getByLabel(/Organization Type/i).selectOption('house-of-worship');
    await page.getByLabel(/How Can We Help/i).selectOption('consultation');
    await page.getByLabel(/^Message/i).fill('I need help with security assessment');

    // Submit form
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Check for success message (appears after simulated submission)
    await expect(page.getByText(/Thank you for your message/i)).toBeVisible({ timeout: 3000 });
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.getByText(/info@civicsafetyadvisors.com/i)).toBeVisible();
    await expect(page.getByText(/Monday – Friday/i)).toBeVisible();
  });

  test('should display FAQs', async ({ page }) => {
    await expect(page.getByText(/How much do your services cost/i)).toBeVisible();
    await expect(page.getByText(/Do you work with organizations outside/i)).toBeVisible();
  });
});
