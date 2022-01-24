import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body {
        background-color: rgb(250, 250, 250);
    }
    
`;

export default GlobalStyled;