# UI Design Research Brief
Generated: 2026-03-04
Project context: Interview preparation dashboard — data-rich SPA with step navigation, cards, checklists, collapsible sections, AI analysis results, modals, forms. React 19 + Vite + Tailwind CSS v4.

## Executive Summary

- **The current app looks AI-generated** — `bg-white`, `blue-600` accent, `rounded-lg` on everything, Inter font, uniform `p-6` padding, identical card treatments. Every one of these is a documented AI-slop fingerprint.
- **Warm neutral light mode is the right call** for job seekers (calming, professional) — not dark mode. Replace pure white with an off-white base in OKLCH, use a single non-blue accent color.
- **Tailwind v4 unlocks the fix natively** — `@theme` for OKLCH design tokens, `@container` queries (no plugin), `field-sizing-content` for auto-resize textareas, `starting:` variant for CSS-only enter/exit animations, OKLCH gradient interpolation.
- **The 10-step horizontal stepper should become a vertical left-rail sidebar** with phase grouping (Preparation → Interviews → Review). Horizontal steppers break at 7+ steps.
- **Three different card treatments** for three content types (metrics/status, content/questions, actions/forms) — this single change has the highest anti-generic impact.
- **CSS scroll-driven animations and View Transitions API** are production-ready and eliminate the need for animation libraries for this app's use cases.

## Visual Direction

### Color Strategy

Replace the default Tailwind blue palette with a custom OKLCH token system. Warm off-white base, single chromatic accent (forest green, slate blue, or warm terracotta — NOT blue-600).

```css
@theme {
  --color-surface-base:   oklch(0.98 0.005 60);    /* warm near-white */
  --color-surface-card:   oklch(1.00 0 0);          /* white cards */
  --color-surface-inset:  oklch(0.96 0.005 60);     /* textarea backgrounds */
  --color-border:         oklch(0.88 0.01 60);       /* card borders */
  --color-border-strong:  oklch(0.78 0.02 60);       /* hover borders */

  --color-accent:         oklch(0.55 0.20 160);      /* forest green */
  --color-accent-subtle:  oklch(0.95 0.04 160);      /* green tint bg */
  --color-accent-hover:   oklch(0.48 0.20 160);      /* darker on hover */

  --color-text-primary:   oklch(0.15 0.02 60);
  --color-text-secondary: oklch(0.45 0.02 60);
  --color-text-muted:     oklch(0.65 0.01 60);

  --color-success:        oklch(0.65 0.18 145);
  --color-warning:        oklch(0.78 0.18 75);
  --color-danger:         oklch(0.58 0.22 25);
}
```

Key rules:
- Accent color on <10% of the UI — CTAs, active states, critical highlights only
- `color-mix(in oklch, ...)` for hover/subtle variants instead of separate tokens
- Never use raw Tailwind color scale (`blue-600`, `gray-200`) — always semantic tokens
- Replace pure `#FFFFFF` page background with warm off-white

### Typography

Replace the system/Inter default with a deliberate font stack:

- **Display/headings**: Plus Jakarta Sans (variable, 200–800 weight) or Bricolage Grotesque for more personality
- **Body/UI text**: Same family at regular/medium weight (single-family hierarchy for dashboards)
- **Monospace for data values**: JetBrains Mono or Geist Mono for scores, metrics, code

Scale aggressively — `text-4xl` or `text-5xl` for step names (emotional reward), `text-sm` for labels (clear hierarchy). Avoid the middle range (`text-xl`, `text-2xl`) as primary sizes. Use `clamp()` for fluid sizing:

```css
--step-hero: clamp(1.75rem, 1.5rem + 1.5vw, 2.5rem);
--step-body: clamp(0.875rem, 0.85rem + 0.25vw, 1rem);
```

Use variable font weight axis for hierarchy instead of boxes/dividers.

### Spacing

Density contrast, not uniform padding:
- **Tight zones** (checklists, data rows, badges): `p-3 gap-2`
- **Standard zones** (card interiors): `p-5 gap-4`
- **Breathing zones** (section separators, step titles): `p-8 gap-8` or larger
- **Asymmetric padding**: `pt-6 pb-3` for section headers, `pl-5 pr-4` for left-anchored content
- Modal/popover interiors get more generous padding than inline content

### Motion

Two tiers:
1. **CSS-native** (default): scroll-driven animations for fade-in-on-scroll, `@starting-style` for popover/modal enter animations, `transition` for hover states
2. **View Transitions API**: for step navigation (slide direction matches nav direction)

Timing reference:
| Interaction | Duration | Easing |
|---|---|---|
| Hover state | 100–150ms | `ease-out` |
| Card expand/collapse | 200–300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Modal appear | 200ms | `ease-out` |
| Modal dismiss | 150ms | `ease-in` |
| Step transition | 250ms | `ease-in-out` |
| Checkbox draw | 300ms | `ease-out` |
| Progress fill | 400–600ms | `cubic-bezier(0.4, 0, 0.6, 1)` |

Always wrap in `@media not (prefers-reduced-motion)`. Always use `@media (hover: hover)` for hover effects.

### Texture & Depth

Multi-layer shadow system (replace Tailwind defaults):
- **Resting**: `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)`
- **Raised/hover**: `0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)`
- **Floating (modals)**: `0 20px 60px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.10)`

Subtle ambient gradient on page background (soft radial gradient in off-white, barely perceptible). Optional: very subtle grain texture at 3–4% opacity on card backgrounds.

## Component Strategy

### Navigation — Vertical Left-Rail Sidebar

Replace the horizontal stepper with a collapsible vertical sidebar:
- Phase grouping: **Preparation** (Prep, Company), **Interviews** (Int 1–5), **Review** (Guide, Scorecard, Notes)
- Checkmarks on completed steps, half-circle for in-progress
- Progress bar at top showing overall completion
- Collapsible on mobile to a bottom sheet or hamburger
- Active step uses font-weight change (bold vs normal) instead of color alone

### Cards — Three Distinct Treatments

| Card Type | Treatment | Used For |
|---|---|---|
| **Content card** | White surface, soft radius (`rounded-xl`), resting shadow, generous `p-6` | Questions, company profile, analysis results |
| **Status/metric card** | Accent-tinted background (`color-mix` 8% accent), sharp radius (`rounded-lg`), accent left border, compact `p-4` | Gap analysis badges, interview status, scorecard numbers |
| **Inset panel** | `surface-inset` background, no shadow, `rounded-lg`, `p-4` | Textareas, cheat sheet content, notes |

### Collapsible Sections

Animate with `grid-template-rows: 0fr → 1fr` (smooth CSS-only height animation):
```css
.collapsible { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 250ms ease; }
.collapsible.open { grid-template-rows: 1fr; }
.collapsible-inner { overflow: hidden; }
```
Chevron rotates 90° on open. Show summary state when collapsed (e.g., "3/7 complete").

### Forms

- Auto-resize textareas: `field-sizing-content` (Tailwind v4: `field-sizing-content`)
- Floating labels for inputs
- Validate on blur, not on input
- Inset background (`surface-inset`) for textarea surfaces
- Focus ring: `ring-2 ring-accent/40 ring-offset-2`

### Modals

- Use HTML `<dialog>` element for native accessibility
- Enter: `scale(0.98) opacity-0 → scale(1) opacity-1`, 200ms ease-out
- Exit: 150ms ease-in (faster out than in)
- Backdrop: `backdrop-blur-sm` with semi-transparent overlay
- `@starting-style` for CSS-only enter animation

### Data Visualization (Non-Chart)

- Gap analysis: segmented horizontal bars with color fill (strong=100%, partial=50%, gap=8%) + badge label
- Status indicators: icon + color + text triple redundancy (accessible)
- Progress: thin 4px track with animated fill for step completion
- Skeleton shimmer for AI loading states (not a spinner)
- Badge sizing: `xs` for tables, `sm` for inline, `md` for card headers

## Anti-Pattern Checklist

Things to actively avoid in the redesign:

- [ ] Pure `#FFFFFF` background (use warm off-white)
- [ ] `blue-600` as the accent color (use a custom accent)
- [ ] Inter or system font as the only typeface
- [ ] `rounded-lg` on everything (vary by component type)
- [ ] Identical card treatment for all content types
- [ ] Uniform `p-6` on every card
- [ ] `shadow-sm` as the only elevation
- [ ] Center-aligned headings everywhere (left-align most)
- [ ] Symmetric 50/50 two-column grids (use 60/40 or bento)
- [ ] No hover states or all-identical `hover:bg-gray-100`
- [ ] No empty state design
- [ ] Color as sole state indicator (add icon + text)
- [ ] Horizontal stepper with 10+ steps
- [ ] Fixed-height textareas
- [ ] Instant show/hide with no transitions

## CSS Techniques to Use

All production-ready in 2026:

| Technique | Use Case |
|---|---|
| **OKLCH color tokens** via `@theme` | Entire color system, dark mode by adjusting L only |
| **`color-mix(in oklch)`** | Hover states, tinted backgrounds, disabled states |
| **Container queries** (`@container`, `@sm:`, `@lg:`) | Cards that adapt to sidebar vs. main column |
| **`field-sizing: content`** | Auto-resize textareas without JS |
| **`@starting-style`** (`starting:` variant) | Modal/popover enter animations, CSS-only |
| **Scroll-driven animations** | Fade-in sections, progress bar tied to scroll |
| **View Transitions API** | Step-to-step navigation slide transitions |
| **`grid-template-rows: 0fr→1fr`** | Smooth expand/collapse without JS height calc |
| **Subgrid** | Align card internals across a grid |
| **Popover API** | Tooltips, hint panels, dropdown menus |
| **`clamp()` fluid typography** | Responsive font sizing without breakpoints |
| **OKLCH gradient interpolation** (`bg-linear-to-r/oklch`) | Vivid gradients without muddy midpoints |
| **`@media (hover: hover)`** | Prevent sticky hover on touch devices |
| **`prefers-reduced-motion`** | Accessibility gate for all animations |

## Sources

### Visual Trends
- Figma 2026 Web Design Trends (figma.com/resource-library/web-design-trends)
- CODERCOPS State of CSS 2026 (codercops.com/blog/state-of-css-2026)
- SaaSFrame Dashboard Anatomy (saasframe.io)
- UITOP Dashboard Trends (uitop.design)
- Porto Theme SaaS Density Analysis (portotheme.com)
- Fontfabric Typography Trends 2025 (fontfabric.com)

### Component Patterns
- Lollypop Design — Stepper UI (lollypop.design)
- Eleken — 32 Stepper UI Examples (eleken.co)
- Browser London Dashboard Trends 2025 (browserlondon.com)
- Material Design 3 Progress Indicators (m3.material.io)
- Stan.vision — Micro Interactions (stan.vision)

### AI Anti-Patterns
- Austin Knight — Design Shapes AI (austinknight.com)
- DEV Community — Break the AI UI Curse (dev.to/a_shokn)
- DEV Community — You Are Using TailwindCSS Wrong (dev.to/ismail9k)
- Ross O'Neill — Do Modern Websites Look Identical (ross-oneill.com)
- Tech Bytes — Escape AI Slop (techbytes.app)

### CSS & Web Platform
- Tailwind CSS v4 Release (tailwindcss.com/blog/tailwindcss-v4)
- Chrome CSS Wrapped 2025 (developer.chrome.com)
- Evil Martians OKLCH Deep Dive (evilmartians.com)
- Chrome View Transitions 2025 (developer.chrome.com)
- Josh Comeau on Subgrid (joshwcomeau.com)
- WebKit Scroll-Driven Animations Guide (webkit.org)
