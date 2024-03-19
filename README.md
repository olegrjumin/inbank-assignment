# Home assignment

A loan application.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## E2E Tests

Run the E2E tests:

```bash
"e2e": "npx playwright test",
"e2e:report": "npx playwright test --reporter dot",
"e2e:web": "npx playwright show-report"
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
