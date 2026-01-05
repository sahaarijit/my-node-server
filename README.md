# My Node Server

This is a simple Node.js server using Express to handle POST API calls.

## Project Structure

```
my-node-server
├── asset
│   ├── HostXML-1.xml      # Sample XML file 1
│   └── HostXML-2.xml      # Sample XML file 2
├── src
│   ├── app.js             # Entry point of the application
│   ├── routes
│   │   └── index.js       # Route definitions
│   └── controllers
│       └── hostController.js # Logic for handling POST requests
├── .github                # GitHub Actions workflows
│   ├── claude.yml         # Claude Code Action for @claude mentions
│   └── claude-code-review.yml # Automated PR code review
├── package.json           # NPM configuration file
├── nodemon.json           # Nodemon configuration for dev mode
├── .gitignore             # Files and directories to ignore by Git
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-node-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
npm start
```

For development with hot reload:
```
npm run dev
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **POST /api/process-xml-files**: Process XML files and send to external replication API.

  **Request Body:**
  ```json
  {
    "token": "your-bearer-token"
  }
  ```

## License

This project is licensed under the MIT License.