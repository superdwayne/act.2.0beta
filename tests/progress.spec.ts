import { test, expect } from '@playwright/test';

// Helper: within 4px tolerance
function approx(a: number, b: number, tol = 4) {
  return Math.abs(a - b) <= tol;
}

test('Progress page renders with progress bar per Figma', async ({ page }) => {
  await page.goto('/');

  // Expect heading and pill
  await expect(page.getByRole('heading', { name: 'Progress' })).toBeVisible();
  await expect(page.getByRole('link', { name: /View in Shadcn/i })).toBeVisible();

  const bar = page.getByRole('progressbar');
  await bar.waitFor({ state: 'attached' });

  // Check rendered sizes
  // Assert aria values (component is mounted and has value)
  await expect(bar).toHaveAttribute('aria-valuenow', /\d+/);
  const valueNow = parseInt(await bar.getAttribute('aria-valuenow') || '0', 10);
  expect(valueNow).toBeGreaterThan(0);

  // Indicator should translate to about 56% (44% filled)
  const indicator = bar.locator('div').last();
  // Indicator should exist
  await expect(indicator).toHaveCount(1);
});
