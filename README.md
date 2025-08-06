# Travel Map 🌍

![Maintenance](https://img.shields.io/badge/Maintenance-8A2BE2?style=for-the-badge&color=19e650&label=Status)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF.svg?logo=vite)

## Overview

Travel Map is an interactive web application that visualises my global travel experiences. This modern, responsive app allows you to explore the countries I've visited across different continents and serves as inspiration for future travel adventures.

✨ **Live Demo:** [Visit the Travel Map](https://jackplowman.github.io/travel-map/)

## Table of Contents

- [Travel Map 🌍](#travel-map-)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Quick Start](#-quick-start)
  - [🛠️ Installation](#️-installation)
    - [Prerequisites](#prerequisites)
    - [Setup Steps](#setup-steps)
    - [Build for Production](#build-for-production)
  - [💻 Development](#-development)
    - [Available Scripts](#available-scripts)
    - [Adding New Countries](#adding-new-countries)
    - [Development Workflow](#development-workflow)
  - [🏗️ Project Structure](#️-project-structure)
  - [🧪 Testing](#-testing)
  - [🤝 Contributing](#-contributing)
    - [Quick Contribution Guide](#quick-contribution-guide)
  - [📄 License](#-license)

## ✨ Features

- **Interactive World Map**: Powered by jsVectorMap for smooth, responsive interactions
- **Country Highlighting**: Visually distinct marking of visited countries
- **Multi-Continental Coverage**: Tracks travel across North America, Europe, Asia, and Oceania
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Lightweight**: Minimal dependencies for fast loading times

## 🚀 Quick Start

Get the travel map running locally in under 2 minutes:

```bash
# Clone and navigate to the project
git clone https://github.com/JackPlowman/travel-map.git
cd travel-map/website

# Install dependencies and start development server
npm install && npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser! 🎉

## 🛠️ Installation

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/JackPlowman/travel-map.git
   cd travel-map/website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build    # Creates optimized build in dist/
npm run preview  # Preview the production build locally
```

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

### Adding New Countries

To add countries you've visited, edit the `places` array in `src/travel-map.js`:

```javascript
const places = [
  "US", // United States
  "FR", // France
  // Add new ISO 3166-2 country codes here
];
```

_Find country codes at: [ISO 3166-2 Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-2)_

### Development Workflow

- Source code is in `website/src/`
- Main entry point: `travel-map.js`
- Styles: `style.css`
- HTML template: `index.html`
- Use the `Justfile` for automation tasks

## 🏗️ Project Structure

```text
travel-map/
├── website/                 # Main application directory
│   ├── src/
│   │   ├── travel-map.js   # Main JavaScript file
│   │   └── style.css       # Application styles
│   ├── public/
│   │   └── earth-globe.ico # Favicon
│   ├── index.html          # HTML template
│   ├── package.json        # Dependencies and scripts
│   └── vite.config.js      # Vite configuration
├── docs/                   # Documentation
├── Justfile               # Automation commands
└── README.md              # You are here!
```

## 🧪 Testing

Currently, the project is focused on visual and manual testing. Planned improvements include:

- [ ] Integration tests for map functionality
- [ ] Visual regression tests
- [ ] Accessibility testing
- [ ] Cross-browser compatibility tests

**Want to help?** See our [Contributing Guidelines](docs/CONTRIBUTING.md) for testing contributions!

## 🤝 Contributing

We welcome contributions from the community! Whether you want to:

- 🐛 Report bugs or issues
- 💡 Suggest new features
- 📝 Improve documentation
- 🧪 Add tests
- 🎨 Enhance the design

Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before submitting issues or pull requests.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting and formatting
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT Licence - see the [LICENCE](LICENCE) file for details.

---

<div align="center">

**Made with ❤️ for fellow travelers**

[⭐ Star this project](https://github.com/JackPlowman/travel-map) • [🐛 Report Bug](https://github.com/JackPlowman/travel-map/issues) • [💡 Request Feature](https://github.com/JackPlowman/travel-map/issues)

</div>
