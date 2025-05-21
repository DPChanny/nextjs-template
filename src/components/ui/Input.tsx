import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "@components/ui/Input.module.css";
import { cn } from "@/lib/utils";

const inputVariants = cva(styles.input, {
  variants: {
    intent: {
      default: styles["input--default"],
      error: styles["input--error"],
    },
    tone: {
      solid: styles["input--solid"],
      outline: styles["input--outline"],
      ghost: styles["input--ghost"],
    },
    size: {
      sm: styles["input--sm"],
      md: styles["input--md"],
      lg: styles["input--lg"],
    },
  },
  defaultVariants: {
    intent: "default",
    tone: "solid",
    size: "md",
  },
});

type VariantBaseProps = {
  variantIntent?: VariantProps<typeof inputVariants>["intent"];
  variantTone?: VariantProps<typeof inputVariants>["tone"];
  variantSize?: VariantProps<typeof inputVariants>["size"];
};

type InputPropsWithVariant = React.InputHTMLAttributes<HTMLInputElement> &
  VariantBaseProps & {
    overrideClass?: undefined;
  };

type InputPropsWithOverride = React.InputHTMLAttributes<HTMLInputElement> & {
  overrideClass: string;
  variantIntent?: never;
  variantTone?: never;
  variantSize?: never;
};

export type InputProps = InputPropsWithVariant | InputPropsWithOverride;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      inputVariants({
        intent: variantIntent,
        tone: variantTone,
        size: variantSize,
      });

    return <input ref={ref} className={cn(baseClass, className)} {...props} />;
  }
);

Input.displayName = "Input";
