import React, { useCallback, useEffect, useState } from "react";
import { Api, Data } from "services";
import { useAppContext } from "contexts";
import { CharacterCard, FlatList, Header, Pagination } from "components";
import {
  Button,
  CharacterList,
  Container,
  Footer,
  Head,
  Heading,
  Input,
  InputContainer,
  Label,
  Main,
  Search,
  THead,
  THeadInfo,
} from "./styles";
import { ReactComponent as IconSearch } from "assets/icon-search.svg";

/**
 * Home Page
 */
const Home = (): JSX.Element => {
  const {
    data,
    currPage,
    limit,
    actions: { setData, setCurrPage },
  } = useAppContext();

  const [qtyPages, setQtyPages] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [activeQuery, setActiveQuery] = useState<"all" | "character">("all");

  /**
   * Get data from API
   */
  const getData = useCallback(async () => {
    const { results, total } = await Api.getCharacters(
      limit,
      (currPage - 1) * limit
    );

    setData(Data.formatData(results));
    setQtyPages(getPagesTotal(total));
  }, [limit, currPage]);

  /**
   * Calculate pages total
   */
  const getPagesTotal = useCallback(
    (total: number) => {
      return Math.floor(total / limit);
    },
    [limit]
  );

  const getCharacter = useCallback(async () => {
    const { results, total } = await Api.getCharacter(
      inputValue,
      limit,
      (currPage - 1) * limit
    );
    setData(Data.formatData(results));
    setQtyPages(getPagesTotal(total));
  }, [inputValue, limit, currPage]);

  /**
   * Create Character List
   */
  const renderCharacterCard = useCallback((item, index) => {
    return <CharacterCard character={item} key={`card_${index}`} />;
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      if (evt.target.checkValidity()) {
        setActiveQuery("character");
        getCharacter();
      }
    },
    [inputValue]
  );

  /**
   * Handle input search change
   */
  const handleChange = useCallback((evt) => {
    setInputValue(evt.target.value);
  }, []);

  useEffect(() => {
    if (activeQuery === "all") {
      getData();
    } else {
      getCharacter();
    }
  }, [currPage]);

  return (
    <>
      <Header />
      <Main>
        <Search onSubmit={handleSubmit} noValidate>
          <Heading>Busca de personagens</Heading>
          <Container>
            <Label htmlFor="fld_search">Nome do personagem</Label>
            <InputContainer>
              <Input
                value={inputValue}
                onChange={handleChange}
                placeholder="Search"
                required
              />
              <Button>
                <IconSearch />
              </Button>
            </InputContainer>
          </Container>
        </Search>
        <CharacterList>
          <Head>
            <THead>Personagem</THead>
            <THeadInfo>Séries</THeadInfo>
            <THeadInfo>Eventos</THeadInfo>
          </Head>
          <FlatList data={data} renderItem={renderCharacterCard} />
        </CharacterList>
      </Main>
      <Footer>
        <Pagination qtyItems={qtyPages} limit={3} onChange={setCurrPage} />
      </Footer>
    </>
  );
};

export default Home;
