import * as React from "react";
import { Header, Pagination } from "components";
import { Container, Footer } from "./styles";
const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <h1>Home page</h1>
      </Container>
      <Footer>
        <Pagination
          qtyItems={10}
          limit={3}
          onChange={(n) => console.log("PAGE", n)}
        />
      </Footer>
    </>
  );
};

export default Home;
