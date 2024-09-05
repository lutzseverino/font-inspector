import { PopoverContentProps } from "@radix-ui/react-popover";

import { ButtonProps } from "../button.tsx";
import { Key, ReactNode } from "react";

export interface ComboboxProps<T> {
  className?: string;
  items: T[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  notFound?: string;
  getLabel: (item: T) => string;
  getDisplayLabel?: (item: T) => string | ReactNode;
  getValue: (item: T) => string;
  hideChevrons?: boolean;
  hideSearch?: boolean;
  collisionPadding?: PopoverContentProps["collisionPadding"];
  buttonProps?: Omit<
    ButtonProps,
    "ref" | "role" | "aria-expanded" | "className"
  >;
}
