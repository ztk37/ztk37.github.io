---
language: "Typescript"
---

```typescript
export function cx(...cns: (string | undefined)[]): string {
  return cns.filter(Boolean).join(" ");
}
```
