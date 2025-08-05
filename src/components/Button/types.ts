import type { JSX } from "preact";

export type ButtonStatus = "default" | "danger" | "warning" | "success";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";

export type ButtonProps = {
  status?: ButtonStatus;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  class?: string;
} & JSX.IntrinsicElements["button"];
