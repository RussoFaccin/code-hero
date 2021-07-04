import styled from "styled-components";
import { BreakPoints, Colors } from "shared/enum";

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 24px;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    padding: 40px 113px 24px 113px;
  }
`;

export const Heading = styled.h2`
  font-family: "PT Sans Caption";
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 24px;
  color: ${Colors.DARK_SMOKE};

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    font-size: 3.2rem;
    margin-bottom: 16px;
  }
`;

export const Thumb = styled.img`
  width: 272px;
  height: 272px;
  border-radius: 8px;
  box-shadow: 0 0 5px ${Colors.DARK_SMOKE};
  object-fit: cover;
`;
