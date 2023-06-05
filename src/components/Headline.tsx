import type { ReactElement, ReactNode } from "react";

export default function Headline({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1 className="font-bold">{children}</h1>;
}
