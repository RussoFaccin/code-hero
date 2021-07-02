import styled, { css } from "styled-components";
import { BreakPoints, Colors } from "shared/enum";
import { ReactComponent as Brand } from "assets/logoObjective.svg";

export const Container = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${Colors.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

export const BrandLink = styled.a`
  display: block;
`;

export const Logo = styled(Brand)`
  width: auto;
  height: 24px;
`;

const hideText = css`
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
`;

export const BrandHeading = styled.h1`
    ${hideText}
`;

export const BrandSubHeading = styled.h2`
    ${hideText}
`;

export const ActionBox = styled.div`
    display: flex;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: 'PT Sans Caption', sans-serif;
    font-size: 1.2rem;
    color: ${Colors.DARK_SMOKE};
    margin-right: 16px;

    @media screen and (min-width: ${BreakPoints.TABLET}) {
        flex-direction: row;
        align-items: center;
        font-size: 1.4rem;
    }
`;

export const User = styled.strong`
    font-weight: 700;

    @media screen and (min-width: ${BreakPoints.TABLET}) {
        margin-right: 10px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
`;

export const Icon = styled.button`
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 4px;
    background-color: ${Colors.SNOW};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.DARK_SMOKE};
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
`;
