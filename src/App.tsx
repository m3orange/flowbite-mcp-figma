import { Button } from "./components/Button";
import { ArrowRightIcon } from "./demo/icons";

/**
 * Minimal landing page. The component library and its full matrix of states
 * live in Storybook — run `npm run storybook`.
 */
export function App() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6 px-6 py-16">
      <div>
        <p className="text-sm font-medium text-[var(--color-bg-brand)]">
          Flowbite Design System
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-text-heading)]">
          flowbite-mcp-figma
        </h1>
        <p className="mt-2 text-sm text-[var(--color-text-body)]">
          Components are documented in Storybook:{" "}
          <code className="rounded bg-[var(--color-bg-tertiary)] px-1.5 py-0.5">
            npm run storybook
          </code>
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button endIcon={<ArrowRightIcon />}>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success" outline>
          Success outline
        </Button>
      </div>
    </div>
  );
}
