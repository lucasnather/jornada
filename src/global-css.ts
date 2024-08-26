import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({theme}) => theme.fonts["font-family"]};
        font-weight: 400;
        font-size: 16px;
    }
`