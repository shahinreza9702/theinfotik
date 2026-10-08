# The Infotik

A modern news website built with Next.js 16, React 19, and Tailwind CSS 4. Features a responsive design with category-based navigation, article pages, and an admin dashboard.

## Tech Stack

- **Framework**: Next.js 16.3.8 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist (via next/font)
- **Linting**: ESLint 9 with Next.js config
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── (frontend)/           # Frontend route group
│   │   ├── [slug]/           # Dynamic routes for articles/categories
│   │   ├── components/
│   │   │   ├── frontend/     # Frontend components
│   │   │   │   ├── home/     # Homepage sections
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── NavLinks.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   ├── CategorySection.tsx
│   │   │   │   ├── CategoryDetailsPage.tsx
│   │   │   │   └── PostDetailsPage.tsx
│   │   │   └── admin/        # Admin components
│   │   ├── layout.tsx        # Frontend layout
│   │   └── page.tsx          # Homepage
│   ├── admin/                # Admin dashboard
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css           # Global styles & Tailwind
│   └── layout.tsx            # Root layout
├── lib/
│   ├── api.ts                # API client functions
│   └── types.ts              # TypeScript interfaces
└── icons/
    └── IconSprite.tsx        # SVG icon sprite
```

## Features

### Frontend
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px, 1200px
- **Homepage Sections**:
  - Hero section with featured articles
  - Category exploration grid
  - Featured stories
  - Latest news panel
  - Magazine slider (carousel)
  - Trending now list
  - Newsletter subscription
- **Dynamic Routing**: Single `[slug]` route handles both articles and categories
- **Category Pages**: Paginated news grid with sidebar (popular, tags, promo)
- **Article Pages**: Full article view with author, related articles, comments
- **Navigation**: Sticky header with mobile hamburger menu
- **Accessibility**: ARIA labels, semantic HTML, focus management, reduced motion support

### Admin
- Basic admin dashboard layout with sidebar and header
- Ready for CMS integration

### API Integration
- External news API (`https://news-api-v2.vercel.app/api`)
- Functions for categories, articles, search, most-read, sections

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd theinfotik

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Configuration

### Next.js Config (`next.config.ts`)
- React Compiler enabled
- Remote image domains configured (BBC images)

### Tailwind CSS (`globals.css`)
- Custom design tokens (colors, spacing, typography)
- Component utilities (buttons, cards, forms, navigation)
- Responsive utilities
- Dark mode support via `prefers-color-scheme`
- Reduced motion support

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases (`@/` maps to `src/`)

## API Reference

### `fetchCategories()`
Returns navigation categories with slug, title, and scrapable flag.

### `getNews(params?)`
Fetches news articles with optional filters:
- `limit`, `offset` - Pagination
- `category` - Filter by category slug
- `q` - Search query
- `sortBy`, `order` - Sorting

### `getNewsSection()`
Returns homepage sections (hero, featured, latest, etc.)

### `getMostRead()`
Returns most read articles.

### `getCategory(slug)`
Returns category with posts.

### `getArticle(id)`
Returns single article by ID.

### `getArticleBySlug(slug)`
Searches for article by slug.

### `getBySlug(slug)`
Resolves slug to either article or category.

## Styling Guide

### Design Tokens
CSS custom properties defined in `globals.css`:
- Colors: `--brand-primary`, `--link-btn`, `--text-primary`, etc.
- Spacing: `--space-1` through `--space-10`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`
- Shadows: `--shadow-card-hover`

### Utility Classes
- Layout: `.container`, `.u-grid`, `.u-cols-{2-6}`, `.u-gap-{xs,sm,md,lg}`
- Flexbox: `.u-flex`, `.u-items-center`, `.u-justify-between`
- Typography: `.section__title`, `.meta`, `.article-meta`
- Components: `.btn`, `.card`, `.media-card`, `.panel`, `.slider`

### Responsive Breakpoints
- `480px` - Mobile
- `768px` - Tablet
- `1024px` - Desktop
- `1200px` - Large Desktop

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Run `npm run lint` and `npm run build`
5. Submit a pull request

## License

Private project - All rights reserved.