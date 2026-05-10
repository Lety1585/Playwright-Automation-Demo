Playwright Starter (Public Page)

What this is:
- A Playwright + TypeScript project to test a public health site (World Health Organization).

What you get:
- A clean folder structure with a Page Object (HealthHomePage) and a simple test.
- Cross-browser projects (Chromium, Firefox, WebKit) configured in playwright.config.ts.

How to run (PowerShell on Windows):
1. Install dependencies
   npm i -D @playwright/test typescript

2. Install browsers
   npx playwright install

3. Run tests
   npx playwright test

4. (Optional) Run in UI mode
   npx playwright test --ui

5. (Optional) Generate code
   npx playwright codegen https://www.who.int

Notes:
- The test navigates to the WHO homepage and asserts the title contains "World Health Organization" or "WHO".
