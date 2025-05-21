import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import styles from "@/components/ui/Button.module.css";

const buttonVariants = cva(styles.button, {
  variants: {
    intent: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
      destructive: styles["button--destructive"],
    },
    tone: {
      solid: styles["button--solid"],
      outline: styles["button--outline"],
      ghost: styles["button--ghost"],
    },
    size: {
      sm: styles["button--sm"],
      md: styles["button--md"],
      lg: styles["button--lg"],
    },
  },
  defaultVariants: {
    intent: "primary",
    tone: "solid",
    size: "md",
  },
});

type VariantBaseProps = {
  variantIntent?: VariantProps<typeof buttonVariants>["intent"];
  variantTone?: VariantProps<typeof buttonVariants>["tone"];
  variantSize?: VariantProps<typeof buttonVariants>["size"];
};

type ButtonPropsWithVariant = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantBaseProps & {
    overrideClass?: undefined;
  };

type ButtonPropsWithOverride = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  overrideClass: string;
  variantIntent?: never;
  variantTone?: never;
  variantSize?: never;
};

export type ButtonProps = ButtonPropsWithVariant | ButtonPropsWithOverride;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variantIntent,
      variantTone,
      variantSize,
      overrideClass,
      ...props
    },
    ref
  ) => {
    const baseClass =
      overrideClass ??
      buttonVariants({
        intent: variantIntent,
        tone: variantTone,
        size: variantSize,
      });

    return <button ref={ref} className={cn(baseClass, className)} {...props} />;
  }
);

Button.displayName = "Button";
