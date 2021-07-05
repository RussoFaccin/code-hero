import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "contexts";
import {
  ActionBox,
  BrandLink,
  BrandHeading,
  BrandSubHeading,
  Container,
  Description,
  Icon,
  Info,
  Logo,
  User,
} from "./styles";

const Header = (): JSX.Element => {
  const history = useHistory();
  const {
    actions: { setCurrPage, setOffset },
  } = useAppContext();

  const goToHome = useCallback((evt) => {
    evt.preventDefault();
    setCurrPage(1);
    setOffset(0);
    history.push("/");
  }, []);

  return (
    <Container>
      <BrandLink onClick={goToHome} to="/">
        <Logo />
        <BrandHeading>Objective</BrandHeading>
        <BrandSubHeading>
          Desenvolvimento ágil de software e consultoria
        </BrandSubHeading>
      </BrandLink>
      <ActionBox>
        <Info>
          <User>Rodrigo Russo</User>
          <Description>Teste de Front-end</Description>
        </Info>
        <Icon>CB</Icon>
      </ActionBox>
    </Container>
  );
};

export default Header;
