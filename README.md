# Chrome Extension Own Library

A customizable Chrome extension boilerplate for building your own browser features, utilities, and enhancements. This project provides a solid foundation to create, manage, and distribute your own Chrome extensions with ease.

## Features

- 🔥 Easy to customize and extend
- 🧩 Modular design for adding your scripts and features
- ⚡️ Modern JavaScript (ES6+) support
- 🛠️ Built-in manifest and setup for rapid development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (optional, for build tools if you add them)
- Chrome browser

### Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/odilov-a/chrome-extension-own-library.git
   cd chrome-extension-own-library
   ```

2. **(Optional) Install dependencies:**

   If you add build tools (like webpack, etc.), install dependencies:

   ```bash
   npm install
   ```

3. **Load the extension in Chrome:**

   - Go to `chrome://extensions/` in your browser.
   - Enable "Developer mode" (top right).
   - Click “Load unpacked”.
   - Select the repository folder.

## Project Structure

```
chrome-extension-own-library/
│
├── popup.html             # HTML&CSS, Bootstrap 5
├── popup.js               # JavaScript logic
├── manifest.json          # Chrome Extension manifest
├── icon.png               # Extension icons
└── README.md
```

## Development Tips

- Use the Chrome Extension Developer Tools to debug.
- Reload the extension after making code changes.
- Keep permissions in `manifest.json` minimal for security.

## Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Author:** [odilov-a](https://github.com/odilov-a)
