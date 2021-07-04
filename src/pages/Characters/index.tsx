import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api, Data } from "services";
import { Character, Comic } from "shared/types";
import { ComicCard, FlatList, Header, Loading } from "components";
import { ComicSection, ComicList, Heading, Main, Thumb } from "./styles";

/**
 * Character Page
 */
const Characters = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>({} as Character);
  const [comicList, setComicList] = useState<Comic[]>([]);
  const [isLoading, setLoading] = useState(false);

  /**
   * Fetch character from Api
   */
  const getCharacter = useCallback(async () => {
    setLoading(true);
    
    const { results: data } = await Api.getCharacterById(id);
    const [character] = Data.formatData(data);
    setCharacter(character);
  }, [id]);

  /**
   * Fetch comics from Api
   */
  const getComics = useCallback(async () => {
    const { results } = await Api.getComics(id);
    setComicList(Data.formatComicData(results));

    setLoading(false);
  }, [id]);

  const renderCardItem = useCallback((card: Comic, index: number) => {
    return <ComicCard comic={card} key={`comic_${index}`} />;
  }, []);

  useEffect(() => {
    getCharacter();
    getComics();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Heading>{character.name}</Heading>
        <Thumb src={character.thumb} />
        <ComicSection>
          <Heading>Comics</Heading>
          <ComicList>
            <FlatList data={comicList} renderItem={renderCardItem} />
          </ComicList>
        </ComicSection>
      </Main>
      <Loading isActive={isLoading} />
    </>
  );
};

export default Characters;
