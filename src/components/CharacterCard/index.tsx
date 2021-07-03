import React from "react";
import { Props } from "./types";
import { Card, Info, Name, Person, Thumb } from "./styles";

const CharacterCard = ({ character }: Props) => {
  if (!character) {
    return null;
  }
  return (
    <Card to={`/characters/${character.id}`}>
      <Person>
        <Thumb src={character.thumb} />
        <Name>{character.name}</Name>
      </Person>
      <Info>{character.series.join(" - ")}</Info>
      <Info>{character.events}</Info>
    </Card>
  );
};

export default CharacterCard;
