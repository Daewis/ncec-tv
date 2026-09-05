import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
}

const variantClasses: Record<string, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  ghost: "hover:bg-badge",
  outline: "border border-border hover:bg-badge",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";