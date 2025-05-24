import { Button, ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import styles from "@/styles/custom/IconButton.module.css";
import React from "react";

type IconButtonProps = Omit<ButtonProps, "children"> & {
  children: React.ReactElement;
  "aria-label": string;
  title: string;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, children, "aria-label": ariaLabel, title, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(styles.iconButton, className)}
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
