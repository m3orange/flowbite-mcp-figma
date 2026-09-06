# flowbite-mcp-figma

Flowbite Design System components implemented from Figma.

**Source design:** [Flowbite Design System · Community](https://www.figma.com/design/LcRQYS3chERMANogpl5chu/Flowbite-Design-System--Community-?node-id=1146-24616&m=dev) — `Button` component set, node `1146:24616`.

## Stack

- Vite 6 · React 19 · TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Design tokens as CSS custom properties in [`src/styles/tokens.css`](src/styles/tokens.css), mirroring the Figma variable collection.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173 — full component showcase
npm run build     # type-check + production build
```

## Button

```tsx
import { Button } from "./src/components/Button";

<Button>Button text</Button>
<Button variant="success" size="lg" endIcon={<ArrowRightIcon />}>Continue</Button>
<Button variant="danger" outline>Delete</Button>
<Button variant="ghost" iconOnly icon={<HeartIcon />} aria-label="Favourite" />
<Button href="/docs" variant="secondary">Docs</Button>
```

### Props

| Prop        | Type                                                                                       | Default     | Figma property |
| ----------- | ----------------------------------------------------------------------------------------- | ----------- | -------------- |
| `variant`   | `primary \| secondary \| tertiary \| ghost \| dark \| success \| danger \| warning`       | `primary`   | Color          |
| `size`      | `xs \| sm \| base \| lg \| xl`                                                            | `base`      | Size (`l` → `lg`) |
| `outline`   | `boolean`                                                                                 | `false`     | Outline        |
| `iconOnly`  | `boolean`                                                                                 | `false`     | Icon only      |
| `startIcon` / `endIcon` | `ReactNode`                                                                   | —           | leading / trailing icon |
| `icon`      | `ReactNode`                                                                               | —           | glyph for `iconOnly` |
| `fullWidth` | `boolean`                                                                                 | `false`     | —              |
| `href`      | `string` — renders an `<a role="button">` instead of `<button>`                           | —           | —              |

All other native `<button>` / `<a>` attributes (`onClick`, `type`, `disabled`, `aria-*`, …) pass through. `ref` is forwarded.

### States

`Initial` / `Hover` / `Focus` / `Disabled` are driven by real CSS pseudo-classes
(`:hover`, `:focus`) and the `disabled` attribute (or `aria-disabled` for links).
Focus renders a 2px ring in the variant's tint; disabled uses the neutral
disabled treatment from the Figma set.

## Layout

```
src/
├── components/Button/
│   ├── Button.tsx           # component (forwardRef, button | anchor)
│   ├── button-variants.ts   # size + colour + state class maps (from Figma)
│   └── index.ts
├── styles/
│   ├── tokens.css           # design tokens → CSS custom properties
│   └── index.css            # Tailwind entry + @theme overrides
├── demo/icons.tsx           # showcase icons (geometry from Figma exports)
└── App.tsx                  # component showcase
```
