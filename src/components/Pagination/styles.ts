import styled from "styled-components";
import { BreakPoints, Colors } from "shared/enum";
import { hideText } from "shared/styles";
import { ButtonProps } from "./types";

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  padding: 0;
  margin: 0 8px;
  background-color: ${Colors.SNOW};
  border: 1px solid ${Colors.DARK_SNOW};
  color: ${Colors.DARK_SMOKE};
  transform: ${(props) =>
    props.direction === "right" ? "scaleX(-1)" : "scaleX(1)"};

  &:hover,
  &.--active {
    background-color: ${Colors.DARK_BLUE};
    color: ${Colors.WHITE};
    cursor: pointer;
  }

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    width: 40px;
  }
`;

export const Label = styled.span`
  ${hideText}
`;
