import type { ReactNode } from "react";
import { Button } from "./components/Button";
import type {
  ButtonSize,
  ButtonVariant,
} from "./components/Button/button-variants";
import { ArrowLeftIcon, ArrowRightIcon, HeartIcon } from "./demo/icons";

const VARIANTS: ButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "ghost",
  "dark",
  "success",
  "danger",
  "warning",
];

const SIZES: ButtonSize[] = ["xs", "sm", "base", "lg", "xl"];

/* Emulated interaction-state classes, for the static states matrix only. */
const EMULATED: Partial<
  Record<ButtonVariant, { hover: string; focus: string }>
> = {
  primary: {
    hover: "!bg-[var(--color-bg-brand-hover)]",
    focus:
      "!bg-[var(--color-bg-brand-strong)] shadow-[0_0_0_2px_var(--color-ring-brand)]",
  },
  secondary: {
    hover: "!bg-[var(--color-bg-tertiary)]",
    focus: "shadow-[0_0_0_2px_var(--color-ring-secondary)]",
  },
  success: {
    hover: "!bg-[var(--color-bg-success-strong)]",
    focus:
      "!bg-[var(--color-bg-success-strong)] shadow-[0_0_0_2px_var(--color-ring-success)]",
  },
  danger: {
    hover: "!bg-[var(--color-bg-danger-strong)]",
    focus:
      "!bg-[var(--color-bg-danger-strong)] shadow-[0_0_0_2px_var(--color-ring-danger)]",
  },
  warning: {
    hover: "!bg-[var(--color-bg-warning-strong)]",
    focus:
      "!bg-[var(--color-bg-warning-strong)] shadow-[0_0_0_2px_var(--color-ring-warning)]",
  },
  dark: {
    hover: "!bg-[var(--color-bg-dark-strong)]",
    focus:
      "!bg-[var(--color-bg-dark-strong)] shadow-[0_0_0_2px_var(--color-ring-dark)]",
  },
  tertiary: {
    hover: "!bg-[var(--color-bg-tertiary-strong)]",
    focus: "shadow-[0_0_0_2px_var(--color-ring-secondary)]",
  },
  ghost: {
    hover: "!bg-[var(--color-bg-tertiary)]",
    focus:
      "!bg-[var(--color-bg-tertiary)] shadow-[0_0_0_2px_var(--color-ring-secondary)]",
  },
};

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--color-border-default)] py-10">
      <h2 className="text-lg font-semibold text-[var(--color-text-heading)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-1 max-w-2xl text-sm text-[var(--color-text-body)]">
          {description}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-body)]">
        {label}
      </span>
      {children}
    </div>
  );
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="pb-2">
        <p className="text-sm font-medium text-[var(--color-bg-brand)]">
          Flowbite Design System
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-[var(--color-text-heading)]">
          Button
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-text-body)]">
          Implemented from the Figma “Button” component set (Flowbite Design
          System · Community, node <code>1146:24616</code>). Axes: colour, size,
          state, icon-only and outline.
        </p>
      </header>

      {/* Sizes -------------------------------------------------------------- */}
      <Section
        title="Sizes"
        description="xs · sm · base · lg · xl — padding, font size and icon size scale together."
      >
        <div className="flex flex-wrap items-center gap-4">
          {SIZES.map((size) => (
            <Cell key={size} label={size}>
              <Button
                size={size}
                startIcon={<ArrowLeftIcon />}
                endIcon={<ArrowRightIcon />}
              >
                Button text
              </Button>
            </Cell>
          ))}
        </div>
      </Section>

      {/* Colour × state matrix ------------------------------------------- */}
      <Section
        title="Colours & states"
        description="Initial is fully interactive — hover and focus it directly. Hover / Focus columns are emulated for reference; Disabled uses the real disabled styling."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4 text-left">
            <thead>
              <tr className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-body)]">
                <th className="pr-6 font-medium">Colour</th>
                <th className="pr-6 font-medium">Initial</th>
                <th className="pr-6 font-medium">Hover</th>
                <th className="pr-6 font-medium">Focus</th>
                <th className="pr-6 font-medium">Disabled</th>
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map((variant) => {
                const emu = EMULATED[variant];
                return (
                  <tr key={variant} className="align-middle">
                    <td className="pr-6 text-sm font-medium capitalize text-[var(--color-text-heading)]">
                      {variant}
                    </td>
                    <td className="pr-6">
                      <Button
                        variant={variant}
                        startIcon={<ArrowLeftIcon />}
                        endIcon={<ArrowRightIcon />}
                      >
                        Button text
                      </Button>
                    </td>
                    <td className="pr-6">
                      <Button
                        variant={variant}
                        className={emu?.hover}
                        startIcon={<ArrowLeftIcon />}
                        endIcon={<ArrowRightIcon />}
                      >
                        Button text
                      </Button>
                    </td>
                    <td className="pr-6">
                      <Button
                        variant={variant}
                        className={emu?.focus}
                        startIcon={<ArrowLeftIcon />}
                        endIcon={<ArrowRightIcon />}
                      >
                        Button text
                      </Button>
                    </td>
                    <td className="pr-6">
                      <Button
                        variant={variant}
                        disabled
                        startIcon={<ArrowLeftIcon />}
                        endIcon={<ArrowRightIcon />}
                      >
                        Button text
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Outline -------------------------------------------------------- */}
      <Section
        title="Outline"
        description="Defined in Figma for success, danger and warning. Hover fills the button with the solid colour."
      >
        <div className="flex flex-wrap items-center gap-4">
          {(["success", "danger", "warning"] as ButtonVariant[]).map((variant) => (
            <Cell key={variant} label={variant}>
              <Button
                variant={variant}
                outline
                startIcon={<ArrowLeftIcon />}
                endIcon={<ArrowRightIcon />}
              >
                Button text
              </Button>
            </Cell>
          ))}
          <Cell label="disabled">
            <Button variant="success" outline disabled>
              Button text
            </Button>
          </Cell>
        </div>
      </Section>

      {/* Icon-only --------------------------------------------------- */}
      <Section
        title="Icon only"
        description="Square footprint per size — 32 / 36 / 40 / 44 / 48 px."
      >
        <div className="flex flex-col gap-5">
          {VARIANTS.map((variant) => (
            <div key={variant} className="flex items-center gap-4">
              <span className="w-20 text-sm font-medium capitalize text-[var(--color-text-heading)]">
                {variant}
              </span>
              {SIZES.map((size) => (
                <Button
                  key={size}
                  variant={variant}
                  size={size}
                  iconOnly
                  icon={<HeartIcon />}
                  aria-label={`${variant} ${size} icon button`}
                />
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* Composition ---------------------------------------------- */}
      <Section
        title="In context"
        description="Icon placement, link rendering and full-width layout."
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button startIcon={<ArrowLeftIcon />}>Back</Button>
            <Button endIcon={<ArrowRightIcon />}>Continue</Button>
            <Button variant="secondary" endIcon={<ArrowRightIcon />}>
              Learn more
            </Button>
            <Button variant="ghost" href="https://flowbite.com">
              Docs link
            </Button>
          </div>
          <div className="max-w-sm">
            <Button variant="primary" fullWidth endIcon={<ArrowRightIcon />}>
              Full width
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
