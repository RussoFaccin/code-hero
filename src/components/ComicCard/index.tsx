import React from "react";
import { Props } from "./types";
import { Container, Thumb, Title } from "./styles";

const ComicCard = ({ comic }: Props): JSX.Element | null => {
  if (!comic) {
    return null;
  }

  return (
    <Container href={comic.url} target="_blank">
      <Title>{comic.title}</Title>
      <Thumb src={comic.thumb} alt={comic.title} />
    </Container>
  );
};

export default ComicCard;
