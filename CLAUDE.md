# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Database migrations (requires DATABASE_URL)
npm run db:push
```

## Architecture Overview

This is an Astro-based static site with React components for interactive elements.

### Key Architectural Decisions

- **Astro Static Site**: Uses Astro for static site generation with React integration for interactive components
- **Database**: Uses Drizzle ORM with PostgreSQL (Neon serverless)
- **Styling**: Tailwind CSS with shadcn/ui components and custom CSS variables for theming

### Project Structure

- `src/`: Astro pages, components, and layouts
- `public/`: Static assets
- `attached_assets/`: Additional static assets

### Environment Requirements

- `DATABASE_URL`: Required for database operations and migrations