---
category: "Web Development"
title: "Concatenating classes in TailwindCSS with TypeScript"
summary: "Summary for Concatenating classes in TailwindCSS with TypeScript"
tags: ["Tailwind", "JavaScript", "TypeScript", "React"]
draft: false
---

# Concatenating classes in TailwindCSS with TypeScript

TailwindCSS is a powerful utility-first CSS framework for rapidly building your UI. It also removes all unused utility classes from the resulting bundle automatically. But this only works if a full class name provided by Tailwind like bg-gray-900 is inside your code.

A utility function to the rescue
To overcome this limitation, I played a bit around before I ended up with this:

```ts
function cx(...cns: (boolean | string | undefined)[]): string {
  return cns.filter(Boolean).join(" ");
}
```

This small function is quite handy in this case. It allows us to concatenate utility classes in various ways. For example:

```ts
const styles = {
  base: "bg-gray-700",
  abc: {
    a: "hover:bg-gray-600",
    b: "hover:bg-gray-500",
    c: "hover:bg-gray-400",
  },
};

const classes = cx(styles.base, styles.abc["b"]);
```

It's also possible to use bool expressions.

```ts
const classes = cx(true && "bg-gray-700", false && "hover:bg-gray-600");
```

The class hover:bg-gray-600 will be filtered out by cx as the expression resulted in false.

Full Example

```tsx
import { PropsWithChildren, ReactElement } from "react";

const styles = {
  base: "rounded",
  variants: {
    default: "bg-gray-600",
    primary: "bg-blue-600",
    secondary: "bg-green-600",
  },
  sizes: {
    sm: "px-1 py-1",
    md: "px-2 py-1",
    lg: "px-3 py-1",
  },
};

type Variant = keyof typeof styles.variants;

type Size = keyof typeof styles.sizes;

type Props = {
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
};

function Button({
  type = "button",
  variant = "default",
  size = "md",
  disabled = false,
  children,
}: PropsWithChildren<Props>): ReactElement {
  const classes = cx(
    styles.base,
    !disabled && styles.variants[variant],
    styles.sizes[size],
    disabled && "bg-gray-800"
  );

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
```

Somewhere in your codebase, this can be used as follows:

```tsx
<Button>Click</Button>
<Button variant="primary">Click</Button>
<Button variant="secondary" sizes="lg">Click</Button>
<Button disabled>Click</Button>
```
