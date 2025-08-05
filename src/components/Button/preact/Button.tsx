import type { FC } from "preact/compat";
import type { ButtonProps, ButtonStatus } from "../types";
import { toggleTheme } from "@src/utils/theme";

const Button: FC<ButtonProps> = (props) => {
  const { children, status = "default", className, ...rest } = props;

  const statusClass: Record<ButtonStatus, string>[] = [
    {
      danger: "text-",
      warning: "text-",
      success: "text-",
      default: "text-",
    },
    {
      danger: "bg-danger",
      warning: "bg-warning",
      success: "bg-success",
      default: "bg-primary",
    },
  ];

  return (
    <button
      onClick={() => toggleTheme()}
      className={`h-10 min-w-10 px-4 rounded-md ${statusClass.map((item) => item[status]).join(" ")} ${className}`}
      //   {...rest}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
