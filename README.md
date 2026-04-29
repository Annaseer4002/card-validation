# Card Validation API

A Node.js + TypeScript Express API that validates payment card numbers using:

- request validation (DTO + middleware)
- input sanitization (removing spaces and dashes)
- Luhn checksum validation

## Tech Stack

- Node.js
- TypeScript (`strict: true`)
- Express
- `class-validator` + `class-transformer`
- Vitest + Supertest

## API Endpoint

### `POST /api/validate-card`

Validates a `cardNumber` from the request body.

### Request Body

```json
{
  "cardNumber": "4532-0151-1283-0366"
}
```

### Success Response (valid)

```json
{
  "message": "Success",
  "data": {
    "cardNumber": "4532-0151-1283-0366",
    "isValid": true
  }
}
```

### Success Response (checksum fails)

```json
{
  "message": "Success",
  "data": {
    "cardNumber": "4532015112830367",
    "isValid": false
  }
}
```

### Validation Error Response (bad/missing input)

```json
{
  "message": "Validation failed",
  "errors": [
    "Card number must contain only digits, spaces, or dashes"
  ]
}
```

## Validation Rules

Input is validated in two layers:

1. DTO/middleware validation:
- required field: `cardNumber`
- must be a string
- only digits, spaces, and dashes are allowed
- length between 13 and 22 characters (to allow separators)

2. Service validation:
- sanitize using `cardNumber.replace(/\D/g, "")`
- normalized length must be between 12 and 19 digits
- must pass the Luhn algorithm

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

### 3. Build

```bash
npm run build
```

### 4. Start production build

```bash
npm start
```

## Run Tests

```bash
npm test
```

The test suite currently covers:

- valid Luhn number
- invalid checksum (`isValid: false`)
- sanitized input with dashes
- invalid format rejected by middleware
- missing input rejected by middleware

## Project Scripts

```json
{
  "test": "vitest",
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node-dev src/index.ts"
}
```

## Notes

- The app currently listens in `src/index.ts` and exports `app` as default.
- Environment variables are loaded via `.env`.
- Commit history is split by feature areas (routing, middleware, service, tests, docs).
