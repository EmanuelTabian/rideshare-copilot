import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --app-background-color: linear-gradient(to bottom, #BEFFD9, #ffffff);
}


 * {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
 }

 body {
    background: var(--app-background-color) ;
 }
`;

export default GlobalStyles;
