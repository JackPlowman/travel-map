# Copilot instructions (travel-map)

## Big picture

- This repo is a static site built with Vite.
- `website/` is the app (vanilla JS + `jsvectormap`). Deployment targets GitHub Pages.
- `tests/` is a Python Playwright E2E suite (pytest + pytest-playwright) that exercises the deployed site URL.

## Repo map (start here)

- `website/src/travel-map.js`: main entry; defines the visited-country list (`places`) and initializes `jsVectorMap` on `#map`.
- `website/index.html`: page shell; includes the map container (`<div id="map">`) and loads `security.js` + `travel-map.js`.
- `website/src/security.js`: client-side frame-busting to prevent clickjacking.
- `website/vite.config.js`: GitHub Pages `base: "/travel-map/"` and dev-server security headers.
- `tests/test_website.py`: minimal smoke test (asserts page title).

## Commands & workflows (prefer `just`)

- Root `Justfile` wires two modules: `website/website.just` and `tests/tests.just`.
- Website (run from repo root):
  - `just website::install` / `just website::install-ci`
  - `just website::dev` (Vite dev server)
  - `just website::build` / `just website::preview`
  - `just website::lint` / `just website::eslint-with-sarif`
  - `just website::prettier-check` / `just website::prettier-format`
- Tests:
  - `just tests::install` (uses `uv sync --all-extras`)
  - `just tests::playwright-install` (browser deps)
  - `just tests::run [PROJECT_URL] [browser]` (defaults to GitHub Pages URL; browsers: `chromium`, `firefox`, `webkit`)
  - `just tests::ruff-checks` / `just tests::ruff-fix`
  - `just tests::ty-check`
- Git hooks / repo checks:
  - `just install-git-hooks` installs `prek` hooks from `.pre-commit-config.yaml`.

## Project-specific conventions

- Country list uses ISO 3166-2 alpha-2 codes in `places` (see `website/src/travel-map.js`). Keep comments grouped by continent.
- The map is driven by DOM ids: keep `#map` consistent between `website/index.html` and `website/src/travel-map.js`.
- Security hardening is intentionally duplicated:
  - meta tags in `website/index.html` and headers in `website/vite.config.js`.
  - If you introduce new external resources (scripts/styles/fonts/images), update the CSP accordingly.

## Formatting/linting expectations

- Website JS is ESM and uses ESLint flat config (`website/eslint.config.js`) + Prettier (`website/prettier.config.js`, `semi: false`).
- Python test tooling is configured in `tests/pyproject.toml` (Python `~=3.14`, Ruff target `py314`).
