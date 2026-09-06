/* -------------------------------------------------------------------------- */
/*  Button — style maps derived from the Figma "Button" component set.         */
/*  Figma: Flowbite Design System (Community), node 1146:24616                 */
/*  Variant axes: Color · Size · State · Icon only · Outline                   */
/* -------------------------------------------------------------------------- */

export type ButtonVariant =
  | "primary" // Figma Color=Brand
  | "secondary" // Figma Color=Secondary
  | "tertiary" // Figma Color=Tertiary
  | "ghost" // Figma Color=Ghost
  | "dark" // Figma Color=Dark
  | "success" // Figma Color=Success
  | "danger" // Figma Color=Danger
  | "warning"; // Figma Color=Warning

export type ButtonSize = "xs" | "sm" | "base" | "lg" | "xl";

/** Shared layout for every button. */
export const buttonBase =
  "relative inline-flex items-center justify-center rounded-[var(--radius)] " +
  "font-medium whitespace-nowrap select-none outline-none " +
  "transition-[color,background-color,border-color,box-shadow] duration-150 " +
  "focus:outline-none focus:z-10 focus-visible:outline-none";

/** Text-button geometry — px / py / font-size / line-height / gap per size. */
export const textSize: Record<ButtonSize, string> = {
  xs: "gap-1.5 px-3 py-1.5 text-[length:var(--font-size-xs)] leading-[var(--line-height-5)]",
  sm: "gap-1.5 px-3 py-2 text-[length:var(--font-size-sm)] leading-[var(--line-height-5)]",
  base: "gap-1.5 px-4 py-2.5 text-[length:var(--font-size-sm)] leading-[var(--line-height-5)]",
  lg: "gap-1.5 px-5 py-3 text-[length:var(--font-size-base)] leading-[var(--line-height-6)]",
  xl: "gap-1.5 px-6 py-3.5 text-[length:var(--font-size-base)] leading-[var(--line-height-6)]",
};

/** Icon-only geometry — fixed square footprint per size. */
export const iconOnlySize: Record<ButtonSize, string> = {
  xs: "size-8 p-0",
  sm: "size-9 p-0",
  base: "size-10 p-0",
  lg: "size-11 p-0",
  xl: "size-12 p-0",
};

/** Rendered glyph size per button size (px). Used for the start/end icon slots. */
export const glyphPx: Record<ButtonSize, number> = {
  xs: 14,
  sm: 16,
  base: 16,
  lg: 16,
  xl: 20,
};

/** Glyph size for icon-only buttons (px). */
export const iconOnlyGlyphPx: Record<ButtonSize, number> = {
  xs: 16,
  sm: 16,
  base: 20,
  lg: 20,
  xl: 24,
};

type StateStyle = {
  base: string;
  hover: string;
  focus: string;
  disabled: string;
};

const DISABLED_FILL =
  "bg-[var(--color-bg-disabled)] border-[var(--color-border-default)] text-[var(--color-text-disabled)] shadow-none";

/** Solid (filled) colour variants. */
export const solidVariants: Record<ButtonVariant, StateStyle> = {
  primary: {
    base: "border border-transparent bg-[var(--color-bg-brand)] text-[var(--color-text-white)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-brand-hover)]",
    focus:
      "focus:bg-[var(--color-bg-brand-strong)] focus:shadow-[0_0_0_2px_var(--color-ring-brand)]",
    disabled: DISABLED_FILL,
  },
  dark: {
    base: "border border-transparent bg-[var(--color-bg-dark)] text-[var(--color-text-white)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-dark-strong)]",
    focus:
      "focus:bg-[var(--color-bg-dark-strong)] focus:shadow-[0_0_0_2px_var(--color-ring-dark)]",
    disabled: DISABLED_FILL,
  },
  success: {
    base: "border border-transparent bg-[var(--color-bg-success)] text-[var(--color-text-white)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-success-strong)]",
    focus:
      "focus:bg-[var(--color-bg-success-strong)] focus:shadow-[0_0_0_2px_var(--color-ring-success)]",
    disabled: DISABLED_FILL,
  },
  danger: {
    base: "border border-transparent bg-[var(--color-bg-danger)] text-[var(--color-text-white)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-danger-strong)]",
    focus:
      "focus:bg-[var(--color-bg-danger-strong)] focus:shadow-[0_0_0_2px_var(--color-ring-danger)]",
    disabled: DISABLED_FILL,
  },
  warning: {
    base: "border border-transparent bg-[var(--color-bg-warning)] text-[var(--color-text-white)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-warning-strong)]",
    focus:
      "focus:bg-[var(--color-bg-warning-strong)] focus:shadow-[0_0_0_2px_var(--color-ring-warning)]",
    disabled: DISABLED_FILL,
  },
  secondary: {
    base: "border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] text-[var(--color-text-body)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-tertiary)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-secondary)]",
    disabled:
      "bg-[var(--color-bg-disabled)] border-[var(--color-border-default)] text-[var(--color-text-disabled)] shadow-none",
  },
  tertiary: {
    base: "border border-transparent bg-[var(--color-bg-tertiary)] text-[var(--color-text-heading)]",
    hover: "hover:bg-[var(--color-bg-tertiary-strong)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-secondary)]",
    disabled:
      "bg-[var(--color-bg-disabled)] border-transparent text-[var(--color-text-disabled)]",
  },
  ghost: {
    base: "border border-transparent bg-transparent text-[var(--color-text-heading)]",
    hover: "hover:bg-[var(--color-bg-tertiary)]",
    focus:
      "focus:bg-[var(--color-bg-tertiary)] focus:shadow-[0_0_0_2px_var(--color-ring-secondary)]",
    disabled: "bg-transparent border-transparent text-[var(--color-text-disabled)]",
  },
};

/** Outline colour variants. Figma defines these for success / danger / warning; */
/* the remaining colours reuse a sensible neutral / brand outline.               */
export const outlineVariants: Record<ButtonVariant, StateStyle> = {
  success: {
    base: "border border-[var(--color-border-success)] bg-transparent text-[var(--color-text-fg-success)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-success)] hover:text-[var(--color-text-white)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-success)]",
    disabled:
      "border-[var(--color-border-success-subtle)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  danger: {
    base: "border border-[var(--color-border-danger)] bg-transparent text-[var(--color-text-fg-danger)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-danger)] hover:text-[var(--color-text-white)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-danger)]",
    disabled:
      "border-[var(--color-border-danger-subtle)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  warning: {
    base: "border border-[var(--color-border-warning)] bg-transparent text-[var(--color-text-fg-warning)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-warning)] hover:text-[var(--color-text-white)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-warning)]",
    disabled:
      "border-[var(--color-border-warning-subtle)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  primary: {
    base: "border border-[var(--color-bg-brand)] bg-transparent text-[var(--color-bg-brand)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-brand)] hover:text-[var(--color-text-white)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-brand)]",
    disabled:
      "border-[var(--color-border-default)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  dark: {
    base: "border border-[var(--color-bg-dark)] bg-transparent text-[var(--color-bg-dark)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-dark)] hover:text-[var(--color-text-white)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-dark)]",
    disabled:
      "border-[var(--color-border-default)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  secondary: {
    base: "border border-[var(--color-border-default)] bg-transparent text-[var(--color-text-body)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-secondary)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-secondary)]",
    disabled:
      "border-[var(--color-border-default)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  tertiary: {
    base: "border border-[var(--color-border-default)] bg-transparent text-[var(--color-text-heading)] shadow-xs",
    hover: "hover:bg-[var(--color-bg-tertiary)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-secondary)]",
    disabled:
      "border-[var(--color-border-default)] bg-transparent text-[var(--color-text-disabled)] shadow-none",
  },
  ghost: {
    base: "border border-[var(--color-border-default)] bg-transparent text-[var(--color-text-heading)]",
    hover: "hover:bg-[var(--color-bg-tertiary)]",
    focus: "focus:shadow-[0_0_0_2px_var(--color-ring-secondary)]",
    disabled:
      "border-[var(--color-border-default)] bg-transparent text-[var(--color-text-disabled)]",
  },
};
