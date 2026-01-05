# src/

Main application source code following a layered Express.js architecture.

## Structure

```
src/
├── app.js           # Application entry point
├── controllers/     # Request handlers (business logic)
└── routes/          # URL → handler mapping
```

## app.js (Entry Point)

**Purpose:** Initializes Express server, configures middleware, mounts routes.

**Flow:**
1. Create Express app instance
2. Configure body-parser middleware (JSON + URL-encoded)
3. Mount routes via `setRoutes(app)`
4. Listen on `PORT` (default: 3000)

**Environment Variables:**
| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server listen port |

## Architecture

```
Request → Routes (index.js) → Controllers (hostController.js) → Response
                                      ↓
                              External API (axios)
                                      ↓
                              asset/*.xml files
```

## Code Style

- **Module System:** CommonJS (`require`/`module.exports`)
- **Async Pattern:** async/await with try-catch
- **Naming:** camelCase for variables/functions, PascalCase for classes
- **Error Handling:** Try-catch blocks with JSON error responses

## Commands

```bash
# Start server (production)
npm start

# Start with hot reload (development)
npm run dev
```

## Adding Features

1. **New Controller:** Create `src/controllers/newController.js`
2. **New Route:** Add to `src/routes/index.js`
3. **New Middleware:** Add to `app.js` before `setRoutes(app)`
