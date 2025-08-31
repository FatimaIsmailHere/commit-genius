# Commit Genius

Commit Genius is a tool to help developers generate perfect Git commit messages following the Conventional Commits standard. It consists of a web application and a Chrome extension.

## Web Application

The web application provides a user interface to generate commit messages.

### How to Run

1.  Open the `web-app/index.html` file in your browser.
2.  Use a Live Server extension in your code editor to serve the file.
3.  Enter the commit type, description, issue number, and breaking change information.
4.  Click the "Generate Commit Message" button to generate the commit message.
5.  Click the "Copy to Clipboard" button to copy the commit message to your clipboard.

## Chrome Extension

The Chrome extension injects a "🪄 Commit Genius" button into GitHub's commit textarea.

### How to Load

1.  Open Chrome and go to `chrome://extensions/`.
2.  Enable "Developer mode" in the top right corner.
3.  Click "Load unpacked" and select the `browser-extension` directory.

### How to Use

1.  Navigate to a GitHub repository.
2.  Find the commit textarea.
3.  Click the "🪄 Commit Genius" button next to the textarea.
4.  The Commit Genius popup will open.
5.  Enter the commit type, description, issue number, and breaking change information.
6.  The generated commit message will be automatically inserted into the commit textarea.

## Project Structure

```
commit-genius/
├── web-app/
│   └── index.html
├── browser-extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.css
│   ├── popup.js
│   └── contentScript.js
└── README.md