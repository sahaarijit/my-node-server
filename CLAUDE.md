# my-node-server

Node.js Express server for processing XML transaction files and forwarding to an external replication API.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js 4.x
- **HTTP Client:** axios
- **Serialization:** BSON
- **Dev Tools:** nodemon (hot reload)

## Project Structure

```
my-node-server/
├── asset/              # XML data files (input)
├── src/
│   ├── app.js          # Entry point
│   ├── controllers/    # Business logic
│   └── routes/         # API routing
├── .github/            # CI/CD workflows
├── package.json
├── nodemon.json
└── README.md
```

## Quick Start

```bash
# Install dependencies
npm install

# Development (hot reload)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:3000` (or `PORT` env var).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/process-xml-files` | Process XML files and send to replication API |

**Request Body:**
```json
{
  "token": "your-bearer-token"
}
```

## Code Conventions

### Style
- CommonJS modules (`require`/`module.exports`)
- camelCase for variables/functions
- Async/await with try-catch error handling
- No semicolons optional (project uses semicolons)

### File Organization
- Controllers: `src/controllers/<domain>Controller.js`
- Routes: `src/routes/index.js` (centralized)
- Static data: `asset/`

### Error Handling
- Return JSON error responses with `message` and `error` fields
- Use appropriate HTTP status codes (200, 500)

## Dependencies

| Package | Purpose |
|---------|---------|
| express | Web framework |
| axios | HTTP client |
| bson | Binary JSON serialization |
| qs | Query string parsing |

## Development

### Adding a New Endpoint

1. Create controller in `src/controllers/`
2. Add route in `src/routes/index.js`
3. Test endpoint

### Hot Reload

nodemon watches `src/` for `.js` and `.json` changes.

## External Integration

**Target API:** `https://dev.fuelfacsapp.dev/api/replication/upload/210/generic-message`

- Auth: Bearer token (passed in request body)
- Content-Type: `application/bson`
- Payload: BSON-serialized array of message objects

## GitHub Actions

- `claude.yml` - Responds to `@claude` mentions in issues/PRs
- `claude-code-review.yml` - Automated PR reviews

## Security Notes

- Bearer tokens passed via request body (not stored)
- No secrets in codebase
- External API endpoint hardcoded (consider env config for production)
