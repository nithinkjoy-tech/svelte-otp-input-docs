# Svelte OTP Input Docs

Documentation and examples for the [`svelte-otp-input`](https://www.npmjs.com/package/svelte-otp-input) component.

## Overview

This is a SvelteKit-based documentation site for the Svelte OTP Input component. It provides guides, examples, and API documentation for integrating OTP (One-Time Password) input functionality into your Svelte applications.

## Tech Stack

- **Framework**: SvelteKit 2.22
- **Styling**: Tailwind CSS 4
- **Markdown Processing**: mdsvex & Marked with Shiki syntax highlighting
- **Deployment**: Cloudflare adapter
- **Build Tool**: Vite 7

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting

## Project Structure

This project uses a monorepo workspace setup. Additional packages can be added in the `packages/` directory.

## Key Dependencies

- **@sveltejs/site-kit** - Site utilities and components (workspace)
- **svelte-otp-input** - The OTP input component being documented
- **shiki** - Syntax highlighting for code blocks
- **marked** - Markdown parser
- **magic-string** - String manipulation utilities
- **typescript** - Type support

## Code Quality

This project uses:

- **Prettier** - Code formatting with Svelte and Tailwind CSS plugin support
- **Svelte Linter** - Via Prettier plugin

Run formatting:

```bash
npm run format
```

Check formatting:

```bash
npm run lint
```

## Deployment

This site is configured to deploy on Cloudflare Pages using the `@sveltejs/adapter-cloudflare` adapter. Build artifacts are optimized for serverless deployment.

## License

This project is licensed under the MIT License.