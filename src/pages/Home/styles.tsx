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

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    align-items: flex-start;
  }
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.DARK_SMOKE};

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    align-items: flex-start;
  }
`;

export const Heading = styled.h2`
  font-family: "PT Sans Caption";
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 24px;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    font-size: 3.2rem;
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-family: "PT Sans Caption";
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 8px;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    font-size: 1.6rem;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
      width: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.DARK_SNOW};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1.4rem;
  font-style: italic;
  color: ${Colors.SMOKE};

  &:focus {
    outline: 1px solid ${Colors.SMOKE};
  }

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    width: 295px;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  border: 0;
  background-color: transparent;
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 64px;
  background-color: ${Colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;
