# Abdulrahman Portfolio Design System

> Generated from the official UI/UX Pro Max database for: personal developer portfolio, frontend engineer, AI researcher, modern, vibrant, dark, professional, immersive.

## Direction

- Product category: Portfolio/Personal
- Pattern: Portfolio Grid
- Style: Bento Grids
- Typography: Inter / Inter, modern dark cinema
- Design variance: 8/10, bold and asymmetric
- Motion intensity: 8/10, complex choreography with restrained micro-interactions
- Visual density: 5/10, balanced

## Palette

- Canvas: `#09090B`
- Surface: `#18181B`
- Elevated surface: `#202024`
- Primary text: `#FAFAFA`
- Muted text: `#A1A1AA`
- Border: `#3F3F46`
- Accent: `#2563EB`
- Accent bright: `#60A5FA`
- Success: `#22C55E`
- Error: `#EF4444`

The generated light palette is inverted for the selected "Modern Dark Cinema" typography mood while preserving its monochrome + blue strategy and contrast relationships.

## Layout

- Full-bleed portrait hero with content over real imagery
- 12-column asymmetric bento grid on desktop
- One content column or horizontal snap decks on mobile
- Maximum content width: 1240px
- Card radius: 8px
- Touch targets: minimum 44px with at least 8px separation

## Motion

- Section reveals: 600-750ms, expo-style easing, once per visit
- Micro-interactions: 150-300ms
- Animate transform and opacity; avoid layout-changing width/height animation
- Preserve spatial continuity between project cards and case studies
- Respect `prefers-reduced-motion`

## Required UX

- Visible form labels and inline status feedback
- Visible keyboard focus states
- No page-level horizontal overflow
- Responsive imagery with reserved aspect ratios
- Project imagery is the primary portfolio content
- No decorative animation that competes with reading or interaction

## Anti-Patterns

- Generic corporate portfolio templates
- Equal-sized card grids without hierarchy
- Placeholder-only form labels
- Tiny mobile controls
- Repeating blur-heavy animations on every scroll pass
- Multiple competing accent colors
