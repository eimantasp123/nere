import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        clear: "",
        default: "px-10 py-3 font-jakarta text-sm font-normal",
        icon: "h-10 w-10",
        lg: "h-11 rounded px-8",
        sm: "h-9 rounded px-3",
      },
      variant: {
        default:
          "bg-primary rounded-full text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white",
        primary:
          "hover:bg-primary rounded-full hover:text-black hover:text-black shadow-sm transition-colors duration-200 ease-in-out bg-neutral-800 text-white",
        secondary:
          "bg-secondary cursor-pointer rounded-full text-sm text-black shadow-sm transition-colors duration-200 ease-in-out hover:bg-neutral-800 hover:text-white",
        secondaryDark:
          "hover:bg-secondary rounded-full bg-neutral-800 text-white shadow-sm transition-colors duration-200 ease-in-out hover:text-black",
        link: "text-textColor underline ...",
        darkLight:
          "bg-neutral-800 text-white hover:bg-background rounded-full transition-all duration-300 ease-in-out border border-transparent hover:border-neutral-500 hover:text-neutral-800 ",
        outline:
          "border border-input bg-background text-foreground hover:bg-[#b7cfcc1d] hover:text-accent-foreground",
      },
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
