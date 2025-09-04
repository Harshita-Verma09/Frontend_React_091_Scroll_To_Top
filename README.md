# Scroll To Top Button 

A simple React + TypeScript project demonstrating a "Back To Top" button that appears after scrolling down the page. Built with Vite for fast development.

## Features

- **Back To Top Button:** Appears when you scroll down 200px, smoothly scrolls to the top.
- **Modern Stack:** Uses React 19, TypeScript, and Vite.
- **Custom Styling:** Button with gradient, hover effects, and fixed positioning.

## Getting Started

### Install dependencies

```sh

npm install
```

### Run in development

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

## Project Structure

```
src/
  App.tsx           # Main app component
  main.tsx          # Entry point
  components/
    Scroll.tsx      # Back To Top button logic
  index.css         # Global styles
public/
  vite.svg          # Favicon
```

## How It Works

- The [`BackToTop`](src/components/Scroll.tsx) component listens for scroll events and toggles the button's visibility.
- Clicking the button smoothly scrolls the page to the top.

