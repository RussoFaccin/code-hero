import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api, Data } from "services";
import { Character } from "shared/types";
import { Header } from "components";
import { Heading, Main, Thumb } from "./styles";

const Characters = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>({} as Character);

  const getCharacter = useCallback(async () => {
    const { results: data } = await Api.getCharacterById(id);
    const [character] = Data.formatData(data);
    setCharacter(character);
  }, [id]);

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Heading>{character.name}</Heading>
        <Thumb src={character.thumb} />
      </Main>
    </>
  );
};

export default Characters;
