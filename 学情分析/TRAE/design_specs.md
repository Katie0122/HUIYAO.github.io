# Design Specifications - ResearchHub Dashboard

## 1. Color System

### Primary Colors
- **Primary**: `#95a4fc` (Brand/Action)
- **Primary Light**: `#e3e8ff` (Backgrounds/Active States)
- **Primary Dark**: `#7682cc` (Text/Icons)
- **Accent**: `#c6c7f8` (Gradients/Highlights)

### Backgrounds
- **Body Background**: `#f7f9fb`
- **Sidebar/Card Background**: `#ffffff`

### Text Colors
- **Primary Text**: `#1c1c1c` (Headings, Body)
- **Secondary Text**: `#8e8e93` (Subtitles, Metadata)
- **Tertiary Text**: `#b0b0b5` (Disabled, Placeholders)

### Status Colors
- **Success (Green)**: `#4caf50` / `#e8f5e9` (bg)
- **Warning (Yellow)**: `#fbc02d` / `#fff8e1` (bg)
- **Info (Blue)**: `#1976d2` / `#e3f2fd` (bg)
- **Error (Red)**: `#f44336`

## 2. Typography

**Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 / Page Title | 18px | 600 (SemiBold) | 1.5 | Page Headers |
| H2 / Card Title | 16px | 600 (SemiBold) | 1.5 | Section/Card Headers |
| H3 / Stat Value | 28px | 600 (SemiBold) | 1.2 | Statistics Numbers |
| Body | 14px | 400 (Regular) | 1.5 | Main Content |
| Caption | 12px | 400 (Regular) | 1.4 | Labels, Metadata |
| Tag | 11px | 500 (Medium) | 1.4 | Status Tags |

## 3. Spacing & Layout

### Grid System
- **Desktop**: 12-column grid
- **Gap**: 24px (`--spacing-lg`)

### Spacing Variables
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px

### Dimensions
- **Sidebar Width**: 212px
- **Header Height**: 64px
- **Border Radius (Card)**: 16px
- **Border Radius (Small)**: 8px

## 4. Shadows & Effects

- **Small Shadow**: `0 2px 8px rgba(0, 0, 0, 0.04)` (Cards default)
- **Medium Shadow**: `0 4px 16px rgba(0, 0, 0, 0.06)` (Hover states)
- **Header Blur**: `backdrop-filter: blur(8px)`

## 5. Directory Structure
```
/
├── index.html          # Main Dashboard
├── styles.css          # Design System & Styles
├── script.js           # Interactions
├── images/
│   ├── icons/          # Raw SVG Icons
│   └── resources/      # Organized Assets
│       ├── sidebar/
│       ├── header/
│       └── dashboard/
```
