import styled from "styled-components";
import { Colors } from "shared/enum";

export const Container = styled.main`
    flex: 1;
`;

export const Footer = styled.footer`
    width: 100%;
    min-height: 64px;
    background-color: ${Colors.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
`;