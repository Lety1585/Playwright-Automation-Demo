import { test, expect } from '@playwright/test';
import { HealthHomePage } from '../pages/healthHome.page';

test('WHO home page loads and has a WHO/World Health Organization title', async ({ page }) => {
  const home = new HealthHomePage(page);
  await home.navigate();

  // Title often contains "World Health Organization" or "WHO"
  await expect(page).toHaveTitle(/World Health Organization|WHO/i);
});