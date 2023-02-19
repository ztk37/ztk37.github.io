import Head from "next/head";
import { ReactElement, ReactNode } from "react";

type Props = {
  meta: { title: string; description: string };
  children?: ReactNode;
};

export default function Container({ meta, children }: Props): ReactElement {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
