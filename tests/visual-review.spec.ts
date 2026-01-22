import { test } from '@playwright/test';

test.describe('Visual Review - Capture all pages', () => {
  test('capture all pages for review', async ({ page }) => {
    // Set consistent viewport
    await page.setViewportSize({ width: 1280, height: 800 });

    const pages = [
      { url: '/', name: 'home' },
      { url: '/about', name: 'about' },
      { url: '/services', name: 'services' },
      { url: '/services/threat-vulnerability-assessment', name: 'service-detail' },
      { url: '/industries', name: 'industries' },
      { url: '/blog', name: 'blog' },
      { url: '/blog/5-security-priorities-houses-of-worship', name: 'blog-post' },
      { url: '/contact', name: 'contact' },
      { url: '/privacy', name: 'privacy' },
      { url: '/terms', name: 'terms' },
    ];

    for (const { url, name } of pages) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');

      // Take full page screenshot
      await page.screenshot({
        path: `screenshots/${name}.png`,
        fullPage: true
      });

      console.log(`✓ Captured: ${name} (${url})`);
    }
  });
});
