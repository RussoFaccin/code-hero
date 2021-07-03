import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
    }
     
     html {
        font-size: 10px;
     }

     body {
        font-family: 'PT Sans', sans-serif;
     }

     #root {
         width: 100%;
         height: 100%;
         overflow: hidden auto;
         background-color: #E5E5E5;
         display: flex;
         flex-direction: column;
     }
`;
