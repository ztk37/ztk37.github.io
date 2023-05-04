---
title: "Tailwind Utils"
summary: "Summary for Tailwind Utils"
language: "Typescript"
---

# Tailwind Utils

```typescript
export function cx(...cns: (string | undefined)[]): string {
  return cns.filter(Boolean).join(" ");
}
```
