# src/controllers/

Express request handlers containing business logic for API endpoints.

## Files

| File | Description |
|------|-------------|
| `hostController.js` | Handles XML file processing and external API calls |

## hostController.js

### `processXmlFiles(req, res)`

**Purpose:** Reads all XML files from `asset/`, sanitizes them, converts to BSON, and POSTs to external replication API.

**Request:**
```json
{
  "token": "Bearer token for external API auth"
}
```

**Response:**
- `200` - All POST calls succeeded
- `500` - Error processing files or API call failed

**Flow:**
1. Read all `*.xml` files from `asset/` directory
2. For each file:
   - Strip XML comments (`<!--...-->`)
   - Collapse whitespace
   - Build payload object with `Type`, `Message`, `HostInterfaceCode`, `UserOperation`
3. Serialize entire payload array to BSON
4. POST to `https://dev.fuelfacsapp.dev/api/replication/upload/210/generic-message`

## Code Style

- CommonJS modules (`require`/`module.exports`)
- Async/await with try-catch error handling
- Controller functions exported as object properties

## Dependencies

- `axios` - HTTP client for external API calls
- `fs` - File system operations (sync)
- `path` - Path resolution
- `bson` - BSON serialization
