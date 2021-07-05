import styled from "styled-components";
import { BreakPoints, Colors } from "shared/enum";

const GAP_SIZE = 20; // px

export const Container = styled.a`
  flex-basis: calc((100% - ${GAP_SIZE}px) / 2);
  border-radius: 4px;
  background-color: ${Colors.WHITE};
  box-shadow: 0 0 5px ${Colors.LIGHT_SMOKE};
  margin-bottom: ${GAP_SIZE}px;
  text-decoration: none;
  color: inherit;
  padding: 10px;

  &:hover {
    background-color: ${Colors.DARK_SNOW};
    outline: 1px solid ${Colors.LIGHT_SMOKE};
  }

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    flex-basis: calc((100% - ${GAP_SIZE * 2}px) / 3);
  }
`;

export const Title = styled.h5`
  font-weight: normal;
  font-size: 1.4rem;
  text-align: center;
`;

export const Thumb = styled.img`
  width: 100%;
  height: auto;
`;
