"use client";

import * as React from "react";
import { cn } from "../../lib/utils"; // helper para concatenar clases (lo vemos abajo)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default" &&
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
          variant === "outline" &&
            "border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100",
          variant === "ghost" &&
            "bg-transparent text-gray-800 hover:bg-gray-100",
          size === "sm" && "px-3 py-1 text-sm",
          size === "md" && "px-4 py-2 text-base",
          size === "lg" && "px-6 py-3 text-lg",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
