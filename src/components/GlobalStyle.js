import { createGlobalStyle } from "styled-components";
import bgImg2 from "../../img/bg-Img2.jpg";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}

a{
    text-decoration: none;
}

ul{
    list-style-type: none;
    
}

body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    /* background:  #404040; */
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3)
    ),
    url(${bgImg2});
  background-repeat: no-repeat;
  background-size: cover;
    
   
    
   
}

`;
