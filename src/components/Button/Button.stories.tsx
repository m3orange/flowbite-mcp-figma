import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import type { ButtonSize, ButtonVariant } from "./button-variants";
import { ArrowLeftIcon, ArrowRightIcon, HeartIcon } from "../../demo/icons";

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

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button text",
    variant: "primary",
    size: "base",
    outline: false,
    iconOnly: false,
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    outline: { control: "boolean" },
    iconOnly: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    children: { control: "text", name: "label" },
    // Non-serialisable / advanced props — hidden from the controls panel.
    startIcon: { control: false },
    endIcon: { control: false },
    icon: { control: false },
    href: { control: false },
    className: { control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive: tweak every prop from the Controls panel. */
export const Playground: Story = {};

export const Variants: Story = {
  parameters: { layout: "padded" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {SIZES.map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

export const Outline: Story = {
  parameters: { layout: "padded" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {(["success", "danger", "warning"] as ButtonVariant[]).map((variant) => (
        <Button key={variant} {...args} variant={variant} outline>
          Button text
        </Button>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: { layout: "padded" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} startIcon={<ArrowLeftIcon />}>
        Back
      </Button>
      <Button {...args} endIcon={<ArrowRightIcon />}>
        Continue
      </Button>
      <Button {...args} startIcon={<ArrowLeftIcon />} endIcon={<ArrowRightIcon />}>
        Both
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  parameters: { layout: "padded" },
  args: { iconOnly: true },
  render: (args) => (
    <div className="flex items-center gap-3">
      {SIZES.map((size) => (
        <Button
          key={size}
          {...args}
          size={size}
          icon={<HeartIcon />}
          aria-label={`favourite (${size})`}
        />
      ))}
    </div>
  ),
};

export const States: Story = {
  parameters: { layout: "padded" },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}>Default</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} className="pointer-events-none !bg-[var(--color-bg-brand-hover)]">
        Hover
      </Button>
      <Button
        {...args}
        className="pointer-events-none !bg-[var(--color-bg-brand-strong)] shadow-[0_0_0_2px_var(--color-ring-brand)]"
      >
        Focus
      </Button>
    </div>
  ),
};

export const AsLink: Story = {
  args: { href: "https://flowbite.com", variant: "secondary" },
  render: (args) => <Button {...args}>Docs link</Button>,
};
