import React from "react";
import { Container, Scrim, Spinner } from "./styles";
import { Props } from "./types";

const Loading = ({ isActive = false }: Props): JSX.Element | null => {
  if (!isActive) {
    return null;
  }

  return (
    <Scrim>
      <Container>
        <Spinner />
      </Container>
    </Scrim>
  );
};

export default Loading;
