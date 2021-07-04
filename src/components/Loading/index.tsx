import React from "react";
import { Container, Scrim, Spinner } from "./styles";

const Loading = (): JSX.Element => {
  return (
    <Scrim>
      <Container>
        <Spinner />
      </Container>
    </Scrim>
  );
};

export default Loading;
