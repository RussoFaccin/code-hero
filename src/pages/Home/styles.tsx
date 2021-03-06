import styled, { css } from "styled-components";
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

export const Search = styled.form`
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

export const CharacterList = styled.div`
  margin-top: 32px;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    margin-top: 40px;
  }
`;

const HeadItem = css`
  text-align: center;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    text-align: left;
    
    &:not(:last-of-type) {
      padding-right: 84px;
    }
  }
`;

export const Head = styled.div`
  display: flex;
  padding: 0 24px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${Colors.SMOKE};
`;

export const THead = styled.div`
  ${HeadItem}
  flex: 1;
  justify-content: center;
`;

export const THeadInfo = styled.div`
  ${HeadItem}
  flex: 1;
  display: none;

  @media screen and (min-width: ${BreakPoints.TABLET}) {
    display: block;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 64px;
  background-color: ${Colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  padding: 20px;
  background-color: ${Colors.WHITE};
  color: ${Colors.DARK_SMOKE};
  border-radius: 4px;
  box-shadow: 0 0 5px ${Colors.LIGHT_SMOKE};
  font-family: 'PT Sans Caption';
  font-size: 3.2rem;
  font-weight: bold;
`;
