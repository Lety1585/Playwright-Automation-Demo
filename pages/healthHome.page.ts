import { Page } from '@playwright/test';

export class HealthHomePage {
  readonly page: Page;
  // A generic locator for a common site element; adjust as needed
  readonly searchInput = 'input[name="q"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  // Optional: attempt a search if the site has a search box
  async search(term: string) {
    const searchBox = this.page.locator(this.searchInput);
    if (await searchBox.count() > 0) {
      await searchBox.fill(term);
      await searchBox.press('Enter');
    }
  }
}