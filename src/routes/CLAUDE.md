# src/routes/

Express route definitions mapping URL paths to controller handlers.

## Files

| File | Description |
|------|-------------|
| `index.js` | Central route configuration, mounts all API routes |

## index.js

### `setRoutes(app)`

**Purpose:** Configures Express router and mounts it under `/api` prefix.

**Routes:**

| Method | Path | Handler | Description |
|--------|------|---------|-------------|
| POST | `/api/process-xml-files` | `hostController.processXmlFiles` | Process XML files and send to external API |

## Code Style

- CommonJS modules
- Factory pattern: exports a function that receives Express `app` instance
- Uses `express.Router()` for route grouping
- All routes prefixed with `/api`

## Adding New Routes

```javascript
const newController = require('../controllers/newController');

function setRoutes(app) {
    const router = express.Router();

    // Existing routes
    router.post('/process-xml-files', hostController.processXmlFiles);

    // Add new routes here
    router.get('/new-endpoint', newController.handler);

    app.use('/api', router);
}
```
