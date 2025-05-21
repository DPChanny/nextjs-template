import React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/Button";
import styles from "@components/ui/IconButton.module.css";

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
        overrideClass={undefined}
      >
        {children}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
