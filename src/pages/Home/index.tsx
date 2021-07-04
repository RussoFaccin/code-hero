import React, { useCallback, useEffect, useState } from "react";
import { Api, Data } from "services";
import { useAppContext } from "contexts";
import { CharacterCard, FlatList, Header, Loading, Pagination } from "components";
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
    offset,
    actions: { setData, setCurrPage, setOffset },
  } = useAppContext();

  const [qtyPages, setQtyPages] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [activeQuery, setActiveQuery] = useState<"all" | "character">("all");
  const [isLoading, setLoading] = useState(false);

  /**
   * Get data from API
   */
  const getData = useCallback(async () => {
    setLoading(true);
    
    const { results, total } = await Api.getCharacters(limit, offset);

    setLoading(false);
    setData(Data.formatData(results));
    setQtyPages(getPagesTotal(total));
  }, [limit, offset]);

  /**
   * Calculate pages total
   */
  const getPagesTotal = useCallback(
    (total: number) => {
      return Math.floor(total / limit);
    },
    [limit]
  );

  /**
   * Get character data
   */
  const getCharacter = useCallback(async () => {
    setLoading(true);
    const { results, total } = await Api.getCharacter(
      inputValue,
      limit,
      offset
    );

    setLoading(false);
    setData(Data.formatData(results));
    setQtyPages(getPagesTotal(total));
  }, [inputValue, limit, offset]);

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
        setCurrPage(1);
        setOffset(0);
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

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrPage(page);
      setOffset((page - 1) * limit);
    },
    [setCurrPage, limit]
  );

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
        <Search onSubmit={handleSubmit}>
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
        <Pagination
          qtyItems={qtyPages}
          activePage={currPage}
          onChange={handlePageChange}
        />
      </Footer>
      <Loading isActive={isLoading} />
    </>
  );
};

export default Home;
