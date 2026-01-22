import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('should display blog index page', async ({ page }) => {
    await expect(page.getByRole('heading', {
      name: /Security Insights & Resources/i
    })).toBeVisible();
  });

  test('should display category filters', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'All Posts' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Houses of Worship' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Schools & Education' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Emergency Preparedness' })).toBeVisible();
  });

  test('should display blog post cards', async ({ page }) => {
    // Check for blog post titles
    await expect(page.getByText(/5 Security Priorities Every House of Worship/i)).toBeVisible();
    await expect(page.getByText(/What to Look for When Hiring Security Guards/i)).toBeVisible();
    await expect(page.getByText(/Creating an Emergency Response Plan/i)).toBeVisible();
  });

  test('should filter posts by category', async ({ page }) => {
    // Click on Houses of Worship category
    await page.getByRole('button', { name: 'Houses of Worship' }).click();

    // Should show the worship post
    await expect(page.getByText(/5 Security Priorities Every House of Worship/i)).toBeVisible();

    // Click on Training Tips category
    await page.getByRole('button', { name: 'Training Tips' }).click();

    // Should show the hiring post
    await expect(page.getByText(/What to Look for When Hiring Security Guards/i)).toBeVisible();
  });

  test('should navigate to individual blog post', async ({ page }) => {
    await page.getByText(/5 Security Priorities Every House of Worship/i).click();

    await expect(page).toHaveURL(/\/blog\/5-security-priorities-houses-of-worship/);
    await expect(page.getByRole('heading', {
      name: /5 Security Priorities Every House of Worship Should Address/i
    })).toBeVisible();
  });
});

test.describe('Blog Post Page', () => {
  test('should display full blog post content', async ({ page }) => {
    await page.goto('/blog/5-security-priorities-houses-of-worship');

    // Check for category badge
    await expect(page.getByText(/Houses of Worship/i)).toBeVisible();

    // Check for post title
    await expect(page.getByRole('heading', {
      name: /5 Security Priorities Every House of Worship Should Address/i
    })).toBeVisible();

    // Check for read time
    await expect(page.getByText(/6 min read/i)).toBeVisible();

    // Check for content sections (these are in the HTML content)
    const content = page.locator('.prose');
    await expect(content).toBeVisible();
  });

  test('should display CTA section', async ({ page }) => {
    await page.goto('/blog/emergency-response-plan-where-to-start');

    await expect(page.getByRole('heading', {
      name: /Need Expert Security Guidance/i
    })).toBeVisible();

    await expect(page.getByRole('link', { name: /Schedule a Consultation/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /View All Articles/i })).toBeVisible();
  });
});
