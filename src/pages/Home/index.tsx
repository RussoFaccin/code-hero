import * as React from "react";
import { Header, Pagination } from "components";
import { Button, Container, Footer, Heading, Input, InputContainer, Label, Main, Search } from "./styles";
import { ReactComponent as IconSearch } from "assets/icon-search.svg";
const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Search>
          <Heading>Busca de personagens</Heading>
          <Container>
            <Label htmlFor="fld_search">Nome do personagem</Label>
            <InputContainer>
              <Input placeholder="Search" />
              <Button><IconSearch /></Button>
            </InputContainer>
          </Container>
        </Search>
      </Main>
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
