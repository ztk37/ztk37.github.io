import { ReactElement } from "react";
import Container from "~/components/container";
import BaseLayout from "~/layouts/base";

export default function Home(): ReactElement {
  return (
    <Container meta={{ title: "Home", description: "Home Page" }}>
      <BaseLayout>
        <h1 className="uppercase">Home</h1>
      </BaseLayout>
    </Container>
  );
}
