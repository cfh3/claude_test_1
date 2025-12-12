# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Playwright test automation project written in TypeScript. It contains end-to-end tests for web applications.

## Common Commands

### Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in a specific file
npx playwright test tests/example.spec.ts

# Run a single test by line number
npx playwright test tests/example.spec.ts:3

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run tests in debug mode
npx playwright test --debug

# Run a single test in debug mode
npx playwright test tests/example.spec.ts --debug
```

### Viewing Test Reports

```bash
# Show last HTML report
npx playwright show-report
```

### Code Generation

```bash
# Generate test code by recording interactions
npx playwright codegen <url>
```

## Test Structure

- `tests/` - Main test directory containing test spec files
- `tests-examples/` - Example tests (e.g., demo-todo-app.spec.ts)
- `playwright.config.ts` - Playwright configuration

## Configuration Details

- Tests run in parallel by default (`fullyParallel: true`)
- Configured to test across Chromium, Firefox, and WebKit browsers
- Traces are captured on first retry (`trace: 'on-first-retry'`)
- HTML reporter is used by default
- On CI: retries set to 2, workers set to 1, and `test.only` is forbidden
