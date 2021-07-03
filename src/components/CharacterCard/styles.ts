import styled, { css } from "styled-components";
import { BreakPoints, Colors } from "shared/enum";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: flex;
  padding: 12px 16px;
  background-color: ${Colors.WHITE};
  box-shadow: 0 0 5px ${Colors.LIGHT_SMOKE};
  border-radius: 4px;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    padding: 20px 24px;
  }
`;

const CardItem = css`
  flex: 1;
  display: flex;
  align-items: center;

  &:not(last-of-type) {
    padding-right: 84px;
  }
`;

export const Person = styled.div`
  ${CardItem}
`;

export const Thumb = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 24px;
`;

export const Name = styled.strong`
  font-family: "PT Sans";
  font-size: 1.4rem;
  font-weight: 700;
  color: ${Colors.DARK_SMOKE};

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    font-size: 1.6rem;
  }
`;

export const Info = styled.div`
  ${CardItem};
  display: none;
  @media screen and (min-width: ${BreakPoints.TABLET}) {
    display: flex;
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 1.4rem;
    color: ${Colors.DARK_SMOKE};
  }
`;
