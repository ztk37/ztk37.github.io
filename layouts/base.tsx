import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";

type Props = {
  children?: ReactNode;
};

export default function BaseLayout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
