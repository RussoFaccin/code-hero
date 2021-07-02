import * as React from "react";
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
  return (
    <Container>
      <BrandLink href="#">
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
