import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib/cn";
import {
  buttonBase,
  glyphPx,
  iconOnlyGlyphPx,
  iconOnlySize,
  outlineVariants,
  solidVariants,
  textSize,
  type ButtonSize,
  type ButtonVariant,
} from "./button-variants";

type CommonProps = {
  /** Colour treatment — maps to the Figma "Color" property. */
  variant?: ButtonVariant;
  /** Size — Figma "Size" (`l` is exposed here as `lg`). */
  size?: ButtonSize;
  /** Outlined treatment instead of filled — Figma "Outline". */
  outline?: boolean;
  /** Render a square, label-less button — Figma "Icon only". */
  iconOnly?: boolean;
  /** Leading icon (ignored when `iconOnly`). */
  startIcon?: ReactNode;
  /** Trailing icon (ignored when `iconOnly`). */
  endIcon?: ReactNode;
  /** The single glyph for an `iconOnly` button. */
  icon?: ReactNode;
  /** Stretch to the width of the container. */
  fullWidth?: boolean;
  children?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    /** Anchors have no native disabled attribute; handled via aria + styling. */
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function IconSlot({ size, children }: { size: number; children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="relative block shrink-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}

/**
 * Button — Flowbite Design System.
 *
 * Implemented from the Figma "Button" component set
 * (Flowbite Design System · Community, node 1146:24616).
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "base",
      outline = false,
      iconOnly = false,
      startIcon,
      endIcon,
      icon,
      fullWidth = false,
      className,
      children,
      ...rest
    } = props;

    const variantMap = outline ? outlineVariants : solidVariants;
    const v = variantMap[variant];
    const isDisabled = Boolean((rest as { disabled?: boolean }).disabled);

    const classes = cn(
      buttonBase,
      iconOnly ? iconOnlySize[size] : textSize[size],
      v.base,
      !isDisabled && v.hover,
      !isDisabled && v.focus,
      isDisabled && ["cursor-not-allowed", v.disabled],
      fullWidth && "w-full",
      className,
    );

    const content = iconOnly ? (
      <IconSlot size={iconOnlyGlyphPx[size]}>{icon}</IconSlot>
    ) : (
      <>
        {startIcon ? <IconSlot size={glyphPx[size]}>{startIcon}</IconSlot> : null}
        {children != null ? (
          <span className="[word-break:break-word]">{children}</span>
        ) : null}
        {endIcon ? <IconSlot size={glyphPx[size]}>{endIcon}</IconSlot> : null}
      </>
    );

    if (props.href !== undefined) {
      const { href, disabled: _disabled, ...anchorRest } =
        rest as AnchorHTMLAttributes<HTMLAnchorElement> & { disabled?: boolean };
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={isDisabled ? undefined : href}
          aria-disabled={isDisabled || undefined}
          role="button"
          tabIndex={isDisabled ? -1 : undefined}
          className={cn(classes, isDisabled && "pointer-events-none")}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    const { ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonRest.type ?? "button"}
        className={classes}
        {...buttonRest}
      >
        {content}
      </button>
    );
  },
);
