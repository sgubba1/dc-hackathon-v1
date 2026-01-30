# Deep Detective

An OSINT (Open Source Intelligence) investigation platform built with React, TypeScript, and Vite.

## Features

- **Investigation Dashboard**: Search and investigate subjects or companies
- **Real-time Agent Logs**: Track investigation progress in real-time
- **Evidence Board**: Visual corkboard-style evidence display
- **Legitimacy Scoring**: Automated risk assessment and verdict generation

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── lib/           # Utilities and API clients
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
└── assets/        # Static assets
```

## License

MIT
