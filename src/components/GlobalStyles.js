import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0 auto; 
    padding: 0; 
    box-sizing: border-box; 
}

body {
  background: #e5e5e5;
}

#root {
  margin-top: 1rem;
}

`;

export default GlobalStyle;
